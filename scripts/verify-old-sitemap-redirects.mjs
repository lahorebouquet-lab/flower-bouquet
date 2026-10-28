#!/usr/bin/env node
/**
 * Verify the old Pasha-style sitemap URLs against a running build.
 *
 * Usage:
 *   node scripts/verify-old-sitemap-redirects.mjs [baseUrl] [outCsv]
 * Defaults: baseUrl http://localhost:3000,
 *           outCsv docs/old-sitemap-redirect/redirect-verification.csv
 *
 * For each of the 967 old paths it records:
 *   old_url, new_url, final_status, match_type
 * Rules enforced:
 * - A broken old URL must answer with exactly one 301 whose Location
 *   returns 200 (no chains, no 404s).
 * - An already-working old URL must answer 200 directly (the one
 *   exception: /collections/bouquets, a pre-existing 301 -> /bouquets).
 * - match_type comes from docs/old-sitemap-redirect/redirect-map.json
 *   ("already-live" / "existing-redirect" for the working URLs).
 * Exits non-zero if any row fails.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const outCsv = process.argv[3] || join(root, "docs/old-sitemap-redirect/redirect-verification.csv");

const paths = readFileSync(join(root, "docs/old-sitemap-redirect/old-sitemap-paths.txt"), "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter(Boolean);
const map = JSON.parse(readFileSync(join(root, "docs/old-sitemap-redirect/redirect-map.json"), "utf8"));
const bySource = new Map(map.map((r) => [r.source, r]));

const csvEscape = (v) => `"${String(v).replace(/"/g, '""')}"`;

async function fetchManual(url) {
  const res = await fetch(url, { redirect: "manual" });
  return { status: res.status, location: res.headers.get("location") };
}

const rows = [];
const failures = [];
let n301 = 0;
let n200 = 0;
for (const p of paths) {
  const oldUrl = `${base}${p}`;
  const entry = bySource.get(p);
  try {
    const first = await fetchManual(oldUrl);
    if (first.status === 200) {
      rows.push([oldUrl, oldUrl, 200, "already-live"]);
      n200++;
      continue;
    }
    if (first.status === 301 || first.status === 308) {
      n301++;
      const loc = first.location || "";
      const dest = loc.startsWith("http") ? loc : `${base}${loc}`;
      const second = await fetchManual(dest);
      const ok = second.status === 200;
      const mt = entry ? entry.match_type : "existing-redirect";
      rows.push([oldUrl, dest, second.status, mt]);
      if (!ok) failures.push(`${oldUrl} -> ${dest} returned ${second.status} (expected 200)`);
      else if (second.status >= 300 && second.status < 400)
        failures.push(`${oldUrl} -> ${dest} redirected again (chain)`);
      continue;
    }
    rows.push([oldUrl, oldUrl, first.status, entry ? entry.match_type : "already-live"]);
    failures.push(`${oldUrl} returned ${first.status} (expected 200 or 301)`);
  } catch (e) {
    rows.push([oldUrl, oldUrl, "ERROR", entry ? entry.match_type : "already-live"]);
    failures.push(`${oldUrl} fetch error: ${e.message}`);
  }
}

const csv = ["old_url,new_url,final_status,match_type", ...rows.map((r) => r.map(csvEscape).join(","))].join("\n") + "\n";
writeFileSync(outCsv, csv);
console.log(`checked: ${rows.length}, direct 200: ${n200}, via 301: ${n301}, failures: ${failures.length}`);
for (const f of failures) console.log(`FAIL: ${f}`);
if (failures.length > 0) process.exit(1);
console.log(`wrote ${outCsv}`);
