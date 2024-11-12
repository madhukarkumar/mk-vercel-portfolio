import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import { Button } from './button';

const Medium = ({username}) => {
    return (
        <div className="card bordered h-full rounded-lg max-w-full bg-base-100 p-5 shadow-2xl">
            <div className="flex flex-col h-full">
                <div className="flex flex-col items-start">
                    <Image src="/images/medium-icon.svg" alt="Medium logo" width={50} height={50}/>
                    <h2 className="font-sans text-[28px] font-medium mt-4">Medium</h2>
                </div>
                <div className="card-body pl-0">
                    <p className="font-sans">Marketing, PLG and Tech</p>
                </div>
                <div className="mt-8 mb-2">
                    <Button
                        href="https://madhukarkumar.medium.com"
                        target="_blank"
                        color="dark/zinc"
                    >
                        Read more
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Medium;
