import { NextResponse } from "next/server";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "@/app/data/products";

export async function GET() {
  try {
    const sanityProducts = await getSanityProducts();
    const products = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
    return NextResponse.json(products, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    });
  } catch {
    return NextResponse.json(ALL_PRODUCTS);
  }
}
