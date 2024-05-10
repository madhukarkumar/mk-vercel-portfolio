import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";

const Medium = ({ username }) => {
    return (
        <div className="card card-bordered h-52 rounded-lg max-w-full bg-base-100 pt-20 items-center justify-evenly shadow-2xl ">
            <Image src="/images/medium-icon.svg" alt="Medium logo" width={50} height={50} />
            <div className="font-sans text-[28px] font-medium">
                <Link href="https://madhukarkumar.medium.com" target="_blank"> Medium </Link>
            </div>
            <div className="card-body">
                <Link
                    href="https://madhukarkumar.medium.com" target="_blank" className="mb-10 pb-5 text-left font-sans text-[18px]">
                    Marketing, PLG and Tech
                </Link>
            </div>

        </div>
    );
};

export default Medium;