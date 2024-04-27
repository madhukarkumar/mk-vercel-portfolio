import { Strong, Text, TextLink } from '@/components/text'
import Medium  from "@/components/medium";
import Link from "next/link";
import Substack from "@/components/substack";


export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-2" style={{marginBottom: '0'}}>
            <div className="col-span-4 pl-9 pt-10">
                <Text>
                    <h1 className="text-3xl font-bold mb-4">Madhukar Kumar</h1>
                    <p className="text-xl">
                        Dev turned Marketer
                    </p>
                    __
                    <br/>
                    <p className="text-xl">
                        Currently: CMO @SingleStore <br/>
                        Previously: Redis, Nutanix, Oracle, Zuora
                    </p>
                </Text>
                <br/>
            </div>
            <div className="col-span-8">
                <div className="grid grid-cols-12 gap-2 ">
                    <div className="col-span-8 ">
                        <div className="grid grid-rows-1">
                            <div >
                                <div className="grid grid-cols-12">
                                    <div className="col-span-8 p-2">
                                        <div className="p-2">
                                            <Medium username="madhukarkumar" />
                                        </div>
                                    </div>
                                    <div className="col-span-4 pt-2">
                                        <div className="p-2">
                                            <Substack username="madhukarkumar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <div className="col-span-4 ">
                                <div className="p-2">
                                    <Substack username="madhukarkumar"/>
                                </div>
                            </div>
                            <div className="col-span-8">
                                <div className="p-2">
                                    <Medium username="madhukarkumar"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 p-2 ">
                        <div className="card w-full bg-base-100 min-h-full shadow-xl">
                            <figure><img src="https://photos.smugmug.com/Portfolio/i-jZBn2Xw/0/8M7RqwJs67DhCBC4X6K2c7J3JBN8QGBSdfHWbZgP/4K/_DSC2077-4K.jpg"
                                         alt="Diwali night"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">Unsplash</h2>
                                <p>My pictures on Unsplash</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link
                                        href="https://unsplash.com/@madhukarkumar"> <a target="_blank"> Browse </a>
                                    </Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}