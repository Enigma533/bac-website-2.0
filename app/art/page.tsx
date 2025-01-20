import { Metadata } from "next";
import Link from "next/link";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "BAC Art",
  description: "A collection of artworks made by BAC artists.",
};

export default async function ArtPage() {

  redirect("/art/bac-bulletin-2024")

}
