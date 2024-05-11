import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FullImageCard = ({ imageUrl, buttonUrl }) => {
    return (
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
            <img src={imageUrl} alt="LinkedIn Post" />
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 flex justify-center items-center">
                <div className="pointer-events-none absolute inset-0 bg-black opacity-50"></div>
                <div className=" flex flex-col p-8 items-center justify-center">
                    <Link href={buttonUrl} target={"_blank"}
                         className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">View Post
                    </Link>
                </div>
            </div>
        </div>
    );
};

FullImageCard.defaultProps = {
    imageUrl: "https://source.unsplash.com/j5L0X1ioajw",
    buttonUrl: "#"
};

export default FullImageCard;