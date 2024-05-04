import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";

const Substack = ({ username }) => {
    return (
        <div className=" max-w-full h-52 bg-base-200 rounded-lg flex flex-col items-center justify-center shadow-2xl p-2">

            <Image src="/images/substack.png" alt="Substack logo" width={50} height={50} />
            <p className="text-gray-800 font-bold mb-2 font-sans">
                <Link
                    href="https://madhukarkumar.substack.com" target="_blank"> Substack </Link>
            </p>
            <div className="flex items-center">

                <button className="btn btn-primary">
                    <Link
                        href="https://madhukarkumar.substack.com" target="_blank"> My Book on PLG </Link>
                </button>
                </div>
        </div>
);
};

export default Substack;

