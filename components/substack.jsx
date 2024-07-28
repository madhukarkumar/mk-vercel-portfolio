import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";
import { Button } from "@/components/ui/button"


const Substack = ({ username }) => {
    return (
        <div className=" max-w-full h-52 bg-base-200 rounded-lg flex flex-col items-center justify-center shadow-2xl p-2">

            <Image src="/images/substack.png" alt="Substack logo" width={50} height={50} />
            <p className="font-sans text-[28px] font-medium mb-2 ">
                <Link
                    href="https://madhukarkumar.substack.com" target="_blank"> Substack </Link>
            </p>
            <div className="flex items-center">

                <Button className="btn btn-primary font-sans font-medium text-[16px]">
                    <Link
                        href="https://madhukarkumar.substack.com" target="_blank"> My Book on PLG </Link>
                </Button>
                </div>
        </div>
);
};

export default Substack;

