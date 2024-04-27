import React from 'react';

function DigitalClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    return (
        <div className="flex justify-center items-center">
            <div className="text-4xl font-bold text-white">
                {hours}:{minutes}
            </div>
            <div className="text-2xl ml-4 text-white">
                <div>{seconds}</div>
                <div className="text-xs">{milliseconds}</div>
            </div>
        </div>
    );
}

export default DigitalClock;
