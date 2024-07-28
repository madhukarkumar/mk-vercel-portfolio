import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";
import { Button } from "@/components/ui/button"

const Podcast = ({ username }) => {
    return (
        <div className="card card-bordered h-100 rounded-lg p-6 card-compact bg-base-100 shadow-xl min-w-full">
            <figure><img src="/images/mk_podcast_profile.jpg" alt="Madhukar Kumar"/>
            </figure>
            <div className="card-body">
                <h2 className="font-sans font-medium text-[28px] pt-3 pb-2 mb-2">How we made that App</h2>
                    <div className="text-left font-sans text-[18px] mb-2">
                        <p>Interviews of engineers building startups with their apps</p>
                    </div>
                    <div className="card-actions justify-end">
                    <Button>
                        <Link href="https://www.youtube.com/playlist?list=PLB4l67JmPvKCnJOFkc5DaJ4i9Lo2OgUiJ" target="_blank">
                            Watch Now
                            </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Podcast;

