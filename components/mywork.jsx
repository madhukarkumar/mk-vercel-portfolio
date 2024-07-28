import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Link from "next/link";
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
const Mywork = ({ username }) => {
    return (
        <div className="card bg-black h-full p-7 card-bordered rounded-lg max-w-full min-h-full shadow-xl">
            <div className="card-body">
                <h2 className="text-white font-sans text-[28px] font-medium">Work Samples</h2>
                <br/>
                <div className="flex items-center space-x-2">
                    <ChevronDoubleRightIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                    <Link
                        href="https://www.nutanix.com/one-platform" target="_blank"
                        className="text-[18px]  text-white font-light font-sans"> Test
                        Drive</Link>
                </div>

                <div className="flex items-center space-x-2">
                    <ChevronDoubleRightIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                    <Link
                        href="https://devrev.ai/people" target="_blank"
                        className=" text-[18px] font-light text-white font-sans"> Humans of
                        DevRev
                    </Link>
                </div>

                <div className="flex items-center space-x-2">
                    <ChevronDoubleRightIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                    <Link
                        href="https://www.singlestore.com/billboards/" target="_blank"
                        className="text-[18px] text-white font-light font-sans"> Billboard on 101
                    </Link>
                </div>

                <div className="flex items-center space-x-2">
                    <ChevronDoubleRightIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                    <Link
                        href="/work"
                        className="text-[18px] text-white font-light font-sans"> LinkedIn Rants
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Mywork;

