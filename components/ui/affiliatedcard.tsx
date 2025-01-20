/* eslint-disable */

import React from 'react';
import Markdown from 'react-markdown'

// Define the props interface
interface AffiliatedCardProps {
    name: string;
    imageSrc: string;
    url: string;
}

const AffiliatedCard: React.FC<AffiliatedCardProps> = ({ name, imageSrc, url }) => {
    return (
        <div className='break-inside-avoid'>

        <div className="w-full max-w-sm bg-white border rounded-xl shadow dark:bg-[#191919] border-[#EA4168]">
            <div className="flex flex-col items-center pb-6 pt-6">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img className="w-[115px] h-[115px] mb-3 rounded-full" src={imageSrc} alt={`${name} image`} />
                </a>
                
                <h5 className="text-sm text-gray-600 dark:text-white text-center px-3"><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h5>

                {/* <span className="text-sm text-gray-500 dark:text-gray-400 px-5">{name}</span> */}
                {/* <p className={`text-md text-gray-500 dark:text-gray-400 px-5 py-3 ${bio.length > 70 ? `text-left` : `text-center`}`}><Markdown children={bio}/></p> */}
            </div>
        </div>
        </div>
    );
};

export default AffiliatedCard;
