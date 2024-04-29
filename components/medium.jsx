import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";

const Medium = ({ username }) => {
    return (
        <div className="card card-bordered h-52 rounded-lg max-w-full bg-base-100 pt-5 items-center justify-center shadow-2xl ">
            <Image src="/images/medium-icon.svg" alt="Medium logo" width={50} height={50} />
            <p className="card-title">
                <Link
                    href="https://madhukarkumar.medium.com"> <a target="_blank"> Medium </a></Link>
            </p>
            <p className="card-body">Marketing, PLG and Tech </p>

        </div>
    );
};

export default Medium;