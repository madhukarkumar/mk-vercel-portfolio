import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";
import { Button } from './ui/button';

const Substack = ({ username }) => {
    return (
        <div className="max-w-full h-full bg-base-200 rounded-lg flex flex-col p-5 shadow-2xl">
            <div className="flex flex-col items-start">
                <Image src="/images/substack.png" alt="Substack logo" width={50} height={50} />
                <h2 className="font-sans text-[28px] font-medium mt-4">
                    Substack
                </h2>
            </div>
            <div className="mt-auto">
                <Button className="font-sans font-medium text-[16px]">
                    <Link href="https://madhukarkumar.substack.com" target="_blank">
                        PLG Handbook
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Substack;
