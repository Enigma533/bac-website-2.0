import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ArtCard from "@/components/ui/artcard";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAC Art · Bulletin 2024",
  description: "Artworks by BAC Artists, published in the BAC Bulletin 2024.",
};

const artworks = [
  {
    name: "Siddharth Mittal",
    imageSrc: "/images/art/bac-bulletin-2024/SiddharthMittal.webp",
    caption: "",
    instagram: "",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Atharva Rane",
    imageSrc: "/images/art/bac-bulletin-2024/AtharvaRane-1.webp",
    caption: "",
    instagram: "thrvexpart73",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Priyanka",
    imageSrc: "/images/art/bac-bulletin-2024/Priyanka.webp",
    caption: "",
    instagram: "palette.__gallery",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Balamurugan213",
    imageSrc: "/images/art/bac-bulletin-2024/Balamurugan-1.webp",
    caption: "",
    instagram: "artbybala213",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Aashi Gupta",
    imageSrc: "/images/art/bac-bulletin-2024/AashiGupta.webp",
    caption: "",
    instagram: "icicle_kf",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Nagdeepa",
    imageSrc: "/images/art/bac-bulletin-2024/Nagdeepa.webp",
    caption: "",
    instagram: "nd__draws",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Divishth Pancholi",
    imageSrc: "/images/art/bac-bulletin-2024/Divishth.webp",
    caption: "",
    instagram: "divishthp",
    twitter: "divishthp",
    pixiv: "",
  },
  {
    name: "Astrop",
    imageSrc: "/images/art/bac-bulletin-2024/Astrop.webp",
    caption: "",
    instagram: "Pgaurav3009",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Manish Shetty",
    imageSrc: "/images/art/bac-bulletin-2024/Manish.webp",
    caption: "",
    instagram: "untailedsaiyan",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Balamurugan213",
    imageSrc: "/images/art/bac-bulletin-2024/Balamurugan-2.webp",
    caption: "",
    instagram: "artbybala213",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Royale von akraman",
    imageSrc: "/images/art/bac-bulletin-2024/Royal.webp",
    caption: "",
    instagram: "royale_von_akraman",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Deeksha Bharath",
    imageSrc: "/images/art/bac-bulletin-2024/Deeksha.webp",
    caption: "",
    instagram: "deekeyid",
    twitter: "deekeyid",
    pixiv: "",
  },
  {
    name: "Ean Hegde",
    imageSrc: "/images/art/bac-bulletin-2024/EanHegde.webp",
    caption: "",
    instagram: "trschain",
    twitter: "",
    pixiv: "",
  },
  {
    name: "HooArtCule",
    imageSrc: "/images/art/bac-bulletin-2024/HooArtCule.webp",
    caption: "",
    instagram: "hooartcule_m",
    twitter: "",
    pixiv: "101807835",
  },
  {
    name: "Atharva Rane",
    imageSrc: "/images/art/bac-bulletin-2024/AtharvaRane-2.webp",
    caption: "",
    instagram: "thrvexpart73",
    twitter: "",
    pixiv: "",
  },
  {
    name: "Mukunda.K",
    imageSrc: "/images/art/bac-bulletin-2024/MukundaK.webp",
    caption: "",
    instagram: "artjourneyvibes",
    twitter: "",
    pixiv: "",
  },
];

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 justify-center mb-12 mt-6">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Bulletin 2024
          </h1>
      </div>

      {/* <hr className="my-8" /> */}

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-6 w-full mx-auto space-y-6 pb-12">
          
          {artworks.map((artwork, index) => (
            <ArtCard
              key={index}
              name={artwork.name}
              imageSrc={artwork.imageSrc}
              caption={artwork.caption}
              instagram={artwork.instagram}
              twitter={artwork.twitter}
              pixiv={artwork.pixiv}
            />
          ))}
      </div>
    </div>
  );
}
