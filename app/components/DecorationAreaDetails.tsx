import React from "react";
import Link from "next/link";
import { MapPin, Sparkles, Clock } from "lucide-react";

/**
 * Area- and event-specific content for the /wedding-decoration-{area}-lahore and
 * /birthday-decoration-{area}-lahore pages, so each of the 26 pages carries its
 * own local detail (zones, venues, access, timing) and links to its neighbours,
 * instead of repeating the same template text.
 */

export type DecorKind = "wedding" | "birthday";

type Area = {
  name: string;
  zones: string;
  venues: string;
  access: string;
  arrival: string;
  nearby: string[];
};

export const DECOR_AREAS: Record<string, Area> = {
  dha: {
    name: "DHA Lahore",
    zones: "DHA Phases 1 to 9, Phase 9 Town, Defence Raya and Sector Y",
    venues: "kanal homes with lawns, rooftop terraces, Raya clubhouse-side venues and the marquees along the DHA main boulevards",
    access: "Our team carries CNIC copies for the phase gates, and for Phases 6 to 9 we leave earlier so the setup is finished before your guests arrive.",
    arrival: "Phases 1 to 5 are reached fastest; Phases 6 to 9 and Raya need the longer travel window.",
    nearby: ["cantt", "askari", "gulberg"],
  },
  gulberg: {
    name: "Gulberg Lahore",
    zones: "Gulberg I, II and III, Liberty Market, MM Alam Road, Main Boulevard and the Jail Road corridor",
    venues: "family homes in Gulberg II and III, private dining rooms and cafés on MM Alam Road, and the hotel banquet halls along Main Boulevard",
    access: "For café and restaurant venues we coordinate the setup slot with the venue manager, so décor goes up before service starts.",
    arrival: "Gulberg is our quickest zone, so same-day and last-minute setups are easiest to fit in here.",
    nearby: ["model-town", "cantt", "dha"],
  },
  "bahria-town": {
    name: "Bahria Town Lahore",
    zones: "Sectors A to F, Safari Villas and Sector Jasmine",
    venues: "villas and townhouses across the sectors, community halls and the open lawns near the main commercial area",
    access: "Our team enters with CNIC clearance at the Bahria gates and travels by the Ring Road, with flowers kept hydrated in an air-conditioned van.",
    arrival: "Allow 2.5 to 4 hours of travel time, so we confirm the team's arrival time with you the day before.",
    nearby: ["lake-city", "valencia-town", "johar-town"],
  },
  "model-town": {
    name: "Model Town Lahore",
    zones: "Model Town Blocks A to M, Model Town Link Road, Garden Town and Barkat Market",
    venues: "large bungalow homes with lawns, block community spaces and the halls near Model Town Link Road",
    access: "We come via Ferozepur Road or the Kalma Chowk underpass and plan outdoor lawn setups around the evening light.",
    arrival: "Model Town is 1.5 to 2.5 hours from our studio, so even same-day bookings are often possible.",
    nearby: ["gulberg", "faisal-town", "iqbal-town"],
  },
  "johar-town": {
    name: "Johar Town Lahore",
    zones: "Johar Town Phases 1 and 2, the Emporium corridor and Khayaban-e-Firdousi",
    venues: "homes in Blocks J and R, the marquees and halls along Khayaban-e-Firdousi, and restaurants near Emporium Mall",
    access: "We reach Johar Town by Canal Road and Khayaban-e-Firdousi and plan marquee setups around evening traffic.",
    arrival: "Allow 2 to 3 hours of travel time for the décor team.",
    nearby: ["faisal-town", "wapda-town", "iqbal-town"],
  },
  cantt: {
    name: "Lahore Cantt",
    zones: "Saddar, Cavalry Ground, PAF Colony, Falcon Complex and the Fortress commercial area",
    venues: "officers' residences, Cavalry Ground homes, the Fortress-side halls and garrison-area event lawns",
    access: "Share the colony and gate details when you book; our team carries ID for gate clearance at every checkpoint.",
    arrival: "We cross via Sherpao Bridge or the Cavalry Underpass, usually 2 to 2.5 hours from booking confirmation.",
    nearby: ["dha", "askari", "gulberg"],
  },
  askari: {
    name: "Askari Lahore",
    zones: "Askari 1 to 11, including the Bedian Road sectors",
    venues: "family homes, rooftop setups in the Askari apartment blocks and the community halls in the newer sectors",
    access: "Askari is gated, so we register the décor team with security in advance using the resident's name and house number.",
    arrival: "Allow 2 to 3 hours via the Ring Road and Bedian Road corridor.",
    nearby: ["dha", "cantt", "bahria-town"],
  },
  "wapda-town": {
    name: "Wapda Town Lahore",
    zones: "Wapda Town, PIA Housing Society, NFC Society and Township",
    venues: "family homes in the Wapda Town blocks, PIA Housing community spaces and the halls along College Road",
    access: "We travel the College Road southern route in air-conditioned vans so fresh flowers arrive in good condition.",
    arrival: "Allow 2.5 to 3.5 hours for the team to reach you.",
    nearby: ["valencia-town", "johar-town", "eme-society"],
  },
  "valencia-town": {
    name: "Valencia Town Lahore",
    zones: "Valencia's main boulevard, the commercial market and all residential blocks",
    venues: "block homes and the halls and restaurants near the commercial market",
    access: "Main boulevard addresses are quickest to set up; for inner blocks we confirm the street with you so the team arrives on time.",
    arrival: "Allow 2.5 to 3.5 hours, plus extra time in evening traffic.",
    nearby: ["wapda-town", "lake-city", "bahria-town"],
  },
  "lake-city": {
    name: "Lake City Lahore",
    zones: "the golf-course villas, Downtown commercial and the sectors near the Ring Road interchange",
    venues: "golf-course villas with large lawns, Downtown commercial venues and the open spaces near the lake",
    access: "Our riders handle Lake City's gated entrances with CNIC clearance and know the sector layout.",
    arrival: "Allow 3 to 4 hours via the Raiwind Road corridor, so bookings a day ahead work best.",
    nearby: ["bahria-town", "valencia-town", "wapda-town"],
  },
  "eme-society": {
    name: "EME Society Lahore",
    zones: "the EME Society commercial area, residential blocks and the sectors off the Multan Road link",
    venues: "block homes and the halls near the commercial area",
    access: "The commercial area is quickest; blocks deeper inside the society take the full travel window in evening Multan Road traffic.",
    arrival: "Allow 2.5 to 3.5 hours for the team to arrive.",
    nearby: ["wapda-town", "valencia-town", "iqbal-town"],
  },
  "iqbal-town": {
    name: "Iqbal Town Lahore",
    zones: "all blocks of Allama Iqbal Town, Moon Market and the Multan Road side",
    venues: "family homes across the blocks, venues near Moon Market and the halls along Multan Road",
    access: "Blocks near Moon Market and Multan Road are quickest; for deeper blocks we confirm the street and house number first.",
    arrival: "Allow 2 to 3 hours for the décor team.",
    nearby: ["faisal-town", "model-town", "johar-town"],
  },
  "faisal-town": {
    name: "Faisal Town Lahore",
    zones: "all residential blocks of Faisal Town and the Johar Town side",
    venues: "family homes across the blocks and the nearby halls toward Johar Town",
    access: "Blocks on the Johar Town side are quickest to reach; we plan longer setups for deeper streets.",
    arrival: "Allow 2 to 3 hours for the team to arrive.",
    nearby: ["johar-town", "model-town", "iqbal-town"],
  },
};

const SETUPS: Record<DecorKind, { title: string; items: [string, string][] }> = {
  wedding: {
    title: "Wedding functions we decorate",
    items: [
      ["Mehndi", "yellow and orange marigold stages, swings and low seating with fresh-flower jhoolay"],
      ["Nikkah", "white and blush floral backdrops with an aisle of fresh petals for the nikkah couch"],
      ["Barat entrance", "floral arches, phoolon ki chadar and rose-petal showers for the groom's arrival"],
      ["Walima", "elegant stage florals and centerpieces for the guest tables"],
      ["Bridal room", "a rose-petal bed, candles and a fresh floral canopy for the wedding night"],
      ["Car", "fresh-flower styling for the doli car on the barat day"],
    ],
  },
  birthday: {
    title: "Birthday setups we decorate",
    items: [
      ["Balloon arch & backdrop", "organic balloon garlands with the name and age, finished with fresh flowers"],
      ["Surprise room", "a bedroom or lounge set up while they're out, with balloons, fairy lights and rose petals"],
      ["Midnight surprise", "a late-night setup timed for 12 AM, with the cake and bouquet ready"],
      ["Kids' theme party", "colour-matched balloons, a cake table and a photo corner for children's birthdays"],
      ["Rooftop or lawn", "an outdoor dinner setup with florals, lights and table décor"],
      ["Office birthday", "a quick desk or meeting-room surprise during work hours"],
    ],
  },
};

export default function DecorationAreaDetails({ area, kind }: { area: string; kind: DecorKind }) {
  const a = DECOR_AREAS[area];
  if (!a) return null;
  const other: DecorKind = kind === "wedding" ? "birthday" : "wedding";
  const label = kind === "wedding" ? "Wedding" : "Birthday";
  const setups = SETUPS[kind];

  return (
    <>
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">{label} décor across {a.name}</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          We cover {a.zones}. Most {kind} setups we do here are at {a.venues}.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">{a.access}</p>
        <p className="flex items-start gap-2 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
          <span>{a.arrival}</span>
        </p>
      </section>

      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">{setups.title} in {a.name}</h2>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          {setups.items.map(([t, d]) => (
            <li key={t} className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <strong className="text-[#0B0B0B]">{t}:</strong> {d}.
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label={`More in ${a.name}`} className="p-6 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] text-xs sm:text-sm space-y-2">
        <p className="font-bold text-[#0B0B0B]">More in {a.name}</p>
        <p className="leading-relaxed">
          <Link href={`/delivery-areas/${area}`} className="text-[#8B1E2D] underline">Flower delivery in {a.name}</Link>
          {" • "}
          <Link href={`/${other}-decoration-${area}-lahore`} className="text-[#8B1E2D] underline">
            {other === "wedding" ? "Wedding" : "Birthday"} decoration in {a.name}
          </Link>
          {" • "}
          <Link href={kind === "wedding" ? "/wedding-decor" : "/birthday-decoration-lahore"} className="text-[#8B1E2D] underline">
            All {kind} decoration in Lahore
          </Link>
        </p>
        <p className="leading-relaxed">
          Nearby:{" "}
          {a.nearby.map((n, i) => (
            <React.Fragment key={n}>
              {i > 0 && " • "}
              <Link href={`/${kind}-decoration-${n}-lahore`} className="text-[#8B1E2D] underline">
                {label} decoration in {DECOR_AREAS[n].name}
              </Link>
            </React.Fragment>
          ))}
        </p>
      </nav>
    </>
  );
}

/** Links from a /delivery-areas/{area} page to that area's decoration pages. */
export function AreaDecorLinks({ area }: { area: string }) {
  const a = DECOR_AREAS[area];
  if (!a) return null;
  return (
    <nav aria-label={`Decoration in ${a.name}`} className="p-6 rounded-2xl bg-white border border-[#E5DED2] text-xs sm:text-sm space-y-2">
      <p className="font-bold text-[#0B0B0B]">Planning an event in {a.name}?</p>
      <p className="leading-relaxed">
        We also decorate in {a.name}:{" "}
        <Link href={`/wedding-decoration-${area}-lahore`} className="text-[#8B1E2D] underline">wedding decoration in {a.name}</Link>
        {" and "}
        <Link href={`/birthday-decoration-${area}-lahore`} className="text-[#8B1E2D] underline">birthday decoration in {a.name}</Link>.
      </p>
    </nav>
  );
}

/** Grid of links to every area page for one decoration kind (for hub pages). */
export function DecorationAreaLinks({ kind }: { kind: DecorKind }) {
  const label = kind === "wedding" ? "Wedding" : "Birthday";
  return (
    <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
      <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">{label} decoration by area</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
        {Object.entries(DECOR_AREAS).map(([slug, a]) => (
          <li key={slug}>
            <Link href={`/${kind}-decoration-${slug}-lahore`} className="text-[#8B1E2D] underline">
              {label} decoration in {a.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
