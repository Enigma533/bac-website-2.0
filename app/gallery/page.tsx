import { Metadata } from "next";
import Link from "next/link";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "BAC Gallery",
  description: "Moments from BAC events.",
};

export default async function GalleryPage() {

  redirect("/gallery/bac-bulletin-2024")

}
