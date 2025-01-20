import React from 'react';
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaPixiv} from "react-icons/fa6";

// Define the props interface
interface ArtCardProps {
    name: string;
    imageSrc: string;
    caption: string;
    instagram: string;
    twitter: string;
    pixiv: string;
}

const ArtCard: React.FC<ArtCardProps> = ({ name, imageSrc, caption, instagram, twitter, pixiv }) => {
    return (
        <div className='break-inside-avoid'>

        <div className="w-full max-w-sm bg-[#f2f2f2] border rounded-lg shadow-xl dark:bg-[#2f2f2f] ">
            <div className="flex flex-col items-center pb-2">
                <img className="w-full mb-2 rounded-t-lg" src={imageSrc} alt={`${name} image`} />
                <p className="text-md font-medium text-gray-600 dark:text-white">{name}</p>
                
                {caption && (<p className={`text-md text-gray-500 dark:text-gray-400 px-5 py-1 ${caption.length > 70 ? `text-left` : `text-center`}`}>{caption}</p>)}

                <div className="flex flex-row justify-center space-x-4 mt-1 mb-1">
                {instagram && (
                    <Link href={`https://instagram.com/${instagram}`} target="_blank">
                        <FaInstagram size = {25}/>
                    </Link>
                )}
                {twitter && (
                    <Link href={`https://x.com/${twitter}`} target="_blank">
                        <FaXTwitter size = {25}/>
                    </Link>
                )}
                {pixiv && (
                    <Link href={`https://pixiv.net/en/users/${pixiv}`} target="_blank">
                        <FaPixiv size = {25}/>
                    </Link>
                )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ArtCard;
