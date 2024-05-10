import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";

const FullLengthCard = ({ username }) => {
    return (
        <div className="card min-w-full h-52 bg-gradient-to-r from-purple-500 to-blue-400 rounded-lg flex flex-col shadow-2xl pl-10 pt-5">
            <p className="text-white text-left font-sans text-[28px] font-medium ">Current Obsession(s)</p>
            <p className="text-white text-left font-sans text-[18px] mb-2 pb-4">Building an AI Agent based app for marketers.
            <p> Chat with an my ever evolving AI twin and ask questions about marketing, PLG, tech stack (coming soon).</p>
            </p>

            <div className="flex items-center">
                <div className="flex items-center space-x-4">
                    <Link href="https://www.linkedin.com/in/madhukarkumar/" target="_blank">
                            <Image src="/images/linkedin-icon.svg" alt="LinkedIn" width={24} height={24}/>
                    </Link>
                    <Link href="https://twitter.com/madhukarkumar" target="_blank">
                            <Image src="/images/twitter-icon.svg" alt="Twitter" width={24} height={24}/>
                    </Link>
                    <Link href="https://www.instagram.com/madhukarkumar/" target="_blank">
                            <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24}/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FullLengthCard;

