import React from 'react';
import { assets } from '../assets/assets';

const Profit = () => {
    return (
        <div className="bg-profit p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
                <div className="px-2 py-2 bg-white rounded-md mr-3">
                    <img src={assets.money} className='w-7' />
                </div>
                <h1 className="text-xl font-semibold text-gray-800">Profit</h1>
            </div>

            <div className="mb-4">
                <img src={assets.profit}
                    alt="Profit chart"
                    className="w-full h-auto rounded-lg"
                />
            </div>

            <div className="mb-2">
                <span className="font-semibold">+14%</span>
                <span className="text-gray-600 ml-1">Since last week</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-800">$12,895.5</h1>
        </div>
    );
};

export default Profit;