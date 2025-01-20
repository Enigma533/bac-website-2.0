import React from 'react';

export default function Custom404() {
    return (
        <div className="container max-w-6xl py-10 lg:py-10">
            <div className="flex justify-center items-center">
                <img src="/images/404.webp" alt="" className="w-3/4 md:w-1/2 lg:w-1/2 pt-50"></img>
            </div>
            <br></br>
            <h1 className="block font-light text-lg lg:text-lg text-center">
                <b>404</b> - We couldn&apos;t find what you were looking for
            </h1>
        </div>
    );
}