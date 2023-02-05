import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({name, icon, link}) => {
    return (
        <Link to={link} className='bg-gray-200 flex w-[150px] text-center px-2 py-3 items-center justify-center rounded-sm hover:text-white duration-700 hover:bg-gray-500 gap-2'>
            <span>{icon}</span>
            <span>{name}</span>
        </Link>
    );
};

export default Button;