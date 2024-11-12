import React from 'react';
import Image from 'next/image';
import { Button } from './button';

const FullImageCard = ({ imageUrl, buttonUrl }) => {
    return (
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
            <img src={imageUrl} alt="LinkedIn Post" className="w-full h-full object-cover" />
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 flex items-end">
                <div className="pointer-events-none absolute inset-0 bg-black opacity-50"></div>
                <div className="relative mt-52 w-full">
                    <Button
                        href={buttonUrl}
                        target="_blank"
                        color="dark/zinc"
                    >
                        View Post
                    </Button>
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
