import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";

const Podcast = ({ username }) => {
    return (
        <div className="card card-bordered h-96 rounded-lg card-compact bg-base-100 shadow-xl min-w-full">
            <figure><img src="/images/mk_podcast_profile.jpg" alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">How we made that App</h2>
                <p>Interviews of engineers building startups with their apps</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href="https://www.youtube.com/playlist?list=PLB4l67JmPvKCnJOFkc5DaJ4i9Lo2OgUiJ" target="_blank">
                            Watch Now
                            </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Podcast;

