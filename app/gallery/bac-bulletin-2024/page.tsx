import ArtCard from "@/components/ui/artcard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAC Gallery · Cosplay",
  description: "Cosplayers featured in the BAC Bulletin 2024.",
};

const artworks = [
  {
    name: "Leonora Fernandes",
    imageSrc: "/images/gallery/bac-bulletin-2024/Leonora-1.webp",
    caption: "",
    instagram: "parttimetitania",
    twitter: "",
  },
  {
    name: "Daisy",
    imageSrc: "/images/gallery/bac-bulletin-2024/Daisy-1.webp",
    caption: "",
    instagram: "daisyackerman4",
    twitter: "",
  },
  {
    name: "Kevin Bobby",
    imageSrc: "/images/gallery/bac-bulletin-2024/Kevin-1.webp",
    caption: "",
    instagram: "daz_krafts",
    twitter: "",
  },
  {
    name: "Abdul Basha",
    imageSrc: "/images/gallery/bac-bulletin-2024/Abdul-1.webp",
    caption: "",
    instagram: "ab.drenaline",
    twitter: "",
  },
  {
    name: "Mahi",
    imageSrc: "/images/gallery/bac-bulletin-2024/Mahi-1.webp",
    caption: "",
    instagram: "hana_tries_cosplay",
    twitter: "",
  },
  {
    name: "Nivi Pal",
    imageSrc: "/images/gallery/bac-bulletin-2024/Nivi-1.webp",
    caption: "",
    instagram: "nivi_in.ig",
    twitter: "",
  },
  {
    name: "Pavan Teja",
    imageSrc: "/images/gallery/bac-bulletin-2024/Pavan-1.webp",
    caption: "",
    instagram: "pavanix_cos",
    twitter: "",
  },
  {
    name: "Prisha (Cosplola)",
    imageSrc: "/images/gallery/bac-bulletin-2024/Prisha-1.webp",
    caption: "",
    instagram: "cosplola",
    twitter: "",
  },
  {
    name: "Shardul Gosain",
    imageSrc: "/images/gallery/bac-bulletin-2024/Shardul-1.webp",
    caption: "",
    instagram: "shardulgosain",
    twitter: "",
  },
  {
    name: "Sherone D'Souza",
    imageSrc: "/images/gallery/bac-bulletin-2024/Sherone-1.webp",
    caption: "",
    instagram: "enorehs",
    twitter: "",
  },
  {
    name: "Twinkle",
    imageSrc: "/images/gallery/bac-bulletin-2024/Twinkle-1.webp",
    caption: "",
    instagram: "twii_nkle",
    twitter: "",
  },
  {
    name: "Yashwitha Shetty",
    imageSrc: "/images/gallery/bac-bulletin-2024/Yashwitha-1.webp",
    caption: "",
    instagram: "udupi_ninja",
    twitter: "",
  },
  {
    name: "Daisy",
    imageSrc: "/images/gallery/bac-bulletin-2024/Daisy-2.webp",
    caption: "",
    instagram: "daisyackerman4",
    twitter: "",
  },
  {
    name: "Kevin Bobby",
    imageSrc: "/images/gallery/bac-bulletin-2024/Kevin-2.webp",
    caption: "",
    instagram: "daz_krafts",
    twitter: "",
  },
  {
    name: "Pavan Teja",
    imageSrc: "/images/gallery/bac-bulletin-2024/Pavan-2.webp",
    caption: "",
    instagram: "pavanix_cos",
    twitter: "",
  },
  {
    name: "Leonora Fernandes",
    imageSrc: "/images/gallery/bac-bulletin-2024/Leonora-2.webp",
    caption: "",
    instagram: "parttimetitania",
    twitter: "",
  },
  {
    name: "Prisha (Cosplola)",
    imageSrc: "/images/gallery/bac-bulletin-2024/Prisha-2.webp",
    caption: "",
    instagram: "cosplola",
    twitter: "",
  },
  {
    name: "Sherone D'Souza",
    imageSrc: "/images/gallery/bac-bulletin-2024/Sherone-2.webp",
    caption: "",
    instagram: "enorehs",
    twitter: "",
  },
  {
    name: "Twinkle",
    imageSrc: "/images/gallery/bac-bulletin-2024/Twinkle-2.webp",
    caption: "",
    instagram: "twii_nkle",
    twitter: "",
  },
  {
    name: "Yashwitha Shetty",
    imageSrc: "/images/gallery/bac-bulletin-2024/Yashwitha-2.webp",
    caption: "",
    instagram: "udupi_ninja",
    twitter: "",
  },
  {
    name: "Leonora Fernandes",
    imageSrc: "/images/gallery/bac-bulletin-2024/Leonora-3.webp",
    caption: "",
    instagram: "parttimetitania",
    twitter: "",
  },
  {
    name: "Twinkle",
    imageSrc: "/images/gallery/bac-bulletin-2024/Twinkle-3.webp",
    caption: "",
    instagram: "twii_nkle",
    twitter: "",
  },
];

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-center gap-4 justify-center mb-12 mt-6">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Cosplay @ BAC
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
              pixiv=""
            />
          ))}
      </div>
    </div>
  );
}
