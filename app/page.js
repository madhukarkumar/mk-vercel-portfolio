import { Strong, Text, TextLink } from '@/components/text'
import Medium  from "@/components/medium";
import Link from "next/link";
import Substack from "@/components/substack";
import Podcast from "@/components/podcast";
import Mywork from "@/components/mywork";

import Fullengthcard from "@/components/fullengthcard";
import './globals.css';
import Image from "next/image";


export default function Home() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 h-96" style={{marginBottom: '0'}}>
            <div className="col-span-4 sm:col-span-4 pl-9 pt-10">
                <Text>
                    <figure><img
                        src="/images/mk-casual.jpeg"
                        alt="Madhukar Kumar profile picture"
                        className="rounded-full w-52 h-52"/>
                    </figure>
                    <h1 className="text-4xl text-gray-800 font-sans mb-4">Madhukar Kumar</h1>
                    <p className="text-xl font-sans">
                        Dev turned Marketer
                    </p>
                    _____
                    <br/>
                    <p className="text-xl font-sans">
                        Currently: CMO @SingleStore <br/>
                        Previously: Redis, Nutanix, Oracle
                    </p>
                </Text>
                <br/>
            </div>
            <div className="col-span-8 pr-5 pt-5 h-96">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 ">
                    <div className="col-span-8 min-w-full">
                        <div className="grid grid-rows-1">
                            <div >
                                <div className="grid grid-cols-12">
                                    <div className="col-span-8 p-2">
                                        <div className="p-2">
                                            <Substack username="madhukarkumar" />
                                        </div>
                                    </div>
                                    <div className="col-span-4 pt-2 min-w-full">
                                        <div className="p-2">
                                            <Medium username="madhukarkumar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 ">
                            <div className="col-span-4">
                                <div className="p-2">
                                    <Mywork username="madhukarkumar"/>
                                </div>
                            </div>
                            <div className="col-span-8 min-w-full">
                                <div className="p-2 ">
                                    <Podcast username="madhukarkumar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 p-2 pt-4 hidden sm:block">
                        <div className="card w-full bg-black shadow-lg h-full">
                            <figure><img src="https://photos.smugmug.com/Portfolio/i-jZBn2Xw/0/8M7RqwJs67DhCBC4X6K2c7J3JBN8QGBSdfHWbZgP/4K/_DSC2077-4K.jpg" target="_blank"
                                         alt="Diwali night"/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white font-sans">Unsplash</h2>
                                <p className="font-sans text-white">My pictures on Unsplash</p>
                                <br/>
                                <br/>
                                <br/>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary font-sans "><Link
                                        href="https://unsplash.com/@madhukarkumar" target="_blank">  Browse
                                    </Link></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-12 p-2 ">
                        <Fullengthcard username="madhukarkumar"/>
                    </div>
                </div>
            </div>
        </div>


    );
}