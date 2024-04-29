import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";

const Mywork = ({ username }) => {
    return (
        <div className="card h-96 card-bordered bg-base-100 rounded-lg max-w-full min-h-full shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Work Samples</h2>
                <br/>
                <p><span className="font-bold"> PLG </span>
                    <Link
                        href="https://www.nutanix.com/one-platform" target="_blank">- Test Drive</Link>
                </p>
                <p><span className="font-bold">Social </span>
                    <Link
                        href="https://devrev.ai/people" target="_blank"> - Humans of DevRev
                    </Link></p>
                <p><span className="font-bold">Brand </span>
                    <Link
                        href="https://www.singlestore.com/billboards/" target="_blank">- Billboard on 101
                    </Link></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

export default Mywork;

