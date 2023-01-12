import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Home/Navbar';

const Main = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </section>
    );
};

export default Main;