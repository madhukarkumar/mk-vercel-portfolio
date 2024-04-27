import React from 'react';
import Image from 'next/image';
import '../app/globals.css';

const Medium = ({ username }) => {
    return (
        <div className="max-w-full sm:w-96 h-52 bg-purple-700 rounded-lg flex flex-col items-center justify-center shadow-2xl p-2">
            <p className="text-white text-lg mb-4 font-sans">My Medium Articles</p>
            <p className="text-white text-sm mb-2 font-sans">Follow me on</p>
            <div className="flex items-center">
                <Image src="/images/mastodon.svg" alt="Mastodon logo" width={20} height={20} />
                <span className="text-white text-sm">{username}</span>
            </div>
        </div>
    );
};

export default Medium;

