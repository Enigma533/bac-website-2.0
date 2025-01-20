import { Metadata } from "next";
import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FaInstagram, FaWhatsapp, FaXTwitter, FaDiscord, FaFacebook, FaTelegram, FaBluesky, FaYoutube } from "react-icons/fa6";

interface SocialButtonProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  label: string;
}

export const metadata: Metadata = {
  title: "Join BAC",
  description: "Join BAC from any social platforms - WhatsApp, Discord, Twitter/X, Instagram, Facebook, BlueSky.",
};

export default async function SocialsPage() {

  const socialLinks = [
    { href: "https://instagram.com/bengaluruanimeclub/", icon: FaInstagram, label: "Instagram", size: 35 },
    { href: "https://chat.whatsapp.com/LK11ZuLjXJN0v6zRvew71W", icon: FaWhatsapp, label: "WhatsApp (Main)", size: 30 },
    { href: "https://chat.whatsapp.com/LsAeB6NjzNA995fiYk5DRd", icon: FaWhatsapp, label: "WhatsApp (Clubhouse)", size: 30 },
    { href: "https://whatsapp.com/channel/0029Va4WaK1I1rcnkEFOnV35", icon: FaWhatsapp, label: "WhatsApp (Channel)", size: 30 },
    { href: "https://x.com/bengaluwu", icon: FaXTwitter, label: "Twitter", size: 25 },
    { href: "https://www.youtube.com/@BengaluruAnimeClub", icon: FaYoutube, label: "YouTube", size: 35 },
    { href: "https://discord.gg/EumfnhyZvB", icon: FaDiscord, label: "Discord", size: 30 },
    { href: "https://bsky.app/profile/bac.moe", icon: FaBluesky, label: "Bluesky", size: 25 },
    { href: "https://www.facebook.com/bangaloreanimeclub", icon: FaFacebook, label: "Facebook (Page)", size: 30 },
    { href: "https://facebook.com/groups/BangaloreAnimeClub/", icon: FaFacebook, label: "Facebook (Group)", size: 30 },
  ];

  const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon, label }) => (
    <Link 
      href={href} 
      target="_blank"
      className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "flex items-center align-center justify-center w-[250px] h-12")}
      >
      <Icon size = {25}/>&nbsp;&nbsp;
      <span style={{fontWeight: '500'}}>{label}</span>
    </Link>
  );

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <h1 className="block font-black text-4xl lg:text-5xl text-center mb-10">
        Join BAC
      </h1>

      <div className="columns-1 md:columns-2 lg:columns-2 w-fit gap-4 mx-auto space-y-4">

        {socialLinks.map((link, index) => (
          <SocialButton key={index} {...link} />
        ))}
        
      </div>
      
  </div>
  );
}