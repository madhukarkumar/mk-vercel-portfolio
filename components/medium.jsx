import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";
import { Button } from "@/components/ui/button"

const Medium = ({username}) => {
    return (
        <div
            className="card bordered h-fullrounded-lg max-w-full bg-base-100 items-center p-7 shadow-2xl">
            <Image src="/images/medium-icon.svg" alt="Medium logo" width={50} height={50}/>
            <div className="font-sans text-[28px] font-medium">
                <Link href="https://madhukarkumar.medium.com" target="_blank"> Medium </Link>
            </div>
            <div className="card-body">
                Marketing, PLG and Tech
                
            </div>
            
            <Button>
                <Link
                    href="https://madhukarkumar.medium.com" target="_blank">Read more</Link>
                
            </Button>

        </div>
    );
};

export default Medium;