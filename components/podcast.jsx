import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import { Button } from './button';

const Podcast = ({ username }) => {
    return (
        <div className="card card-bordered h-100 rounded-lg p-6 card-compact bg-base-100 shadow-xl min-w-full">
            <figure>
                <Image 
                    src="/images/mk_podcast_profile.jpg" 
                    alt="Madhukar Kumar"
                    width={400}
                    height={300}
                />
            </figure>
            <div className="card-body flex flex-col h-full">
                <h2 className="font-sans font-medium text-[28px] pt-3 pb-2">How we made that App</h2>
                <div className="text-left font-sans text-[18px]">
                    <p>Interviews of engineers building startups with their apps</p>
                </div>
                <div className="mt-5">
                    <Button
                        href="https://www.youtube.com/playlist?list=PLB4l67JmPvKCnJOFkc5DaJ4i9Lo2OgUiJ"
                        target="_blank"
                        color="dark/zinc"
                    >
                        Watch Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Podcast;
