import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className='lg:max'>
            
        </div>
    );
};

export default ProductDetails;