import React from 'react';

const GiftExplore = () => {
    return (
        <div className='bg-orange-200 py-4 my-5'>
            <div className='lg:max-w-[1350px] mx-auto  flex flex-col md:flex-row gap-y-2 justify-between items-center'>
            <h1 className='text-lg md:text-3xl lg:text-5xl font-bold'>Your Gift</h1>
            <p>of</p>
            <h2 className='text-md md:text-2xl lg:text-4xl text-gray-700 font-medium'>The Day</h2>
            <button className='px-4 py-2 bg-pink-500 text-white hover:bg-pink-600 hover:font-bold font-bold rounded'>Explore</button>
        </div>
        </div>
    );
};

export default GiftExplore;