import React from 'react';
import Image from 'next/image';
import '../app/globals.css';

const Medium = ({ username }) => {
    return (
        <div className="max-w-full sm:w-96 h-52 rounded-lg flex flex-col items-center justify-center shadow-2xl p-2 bg-gray-50">
            <p className="text-gray-800 text-lg mb-4 font-sans">My Medium Articles</p>
            <p className="text-gray-700 text-sm mb-2 font-sans">Follow me on</p>
            <div className="flex items-center">
                <Image src="/images/mastodon.svg" alt="Mastodon logo" width={20} height={20} />
                <span className="text-gray-700 text-sm">{username}</span>
            </div>
        </div>
    );
};

export default Medium;

