import React, { useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './Header.scss'
import { dataHeader } from './dataHeader';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className='header'>
            <div className='w-screen h-[90px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
                <div className='px-10 flex justify-between items-center w-full h-full '>
                    <div className='flex items-center '>
                        <h1 className='text-3xl font-bold xl:mr-12 sm:text-3xl'>HelloTravel</h1>
                        <ul className='hidden md:flex md:ml-44 text-lg  font-normal '>
                            {dataHeader.map((item) => (
                                <li className='text-black font-medium'>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:flex pr-4 lg:hidden xl:block'>
                        <button className='border-none bg-transparent text-black mr-4'>
                            Sign In
                        </button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                    <div className='md:hidden mr-4 lg:hidden' onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                    </div>
                </div>

                <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                    {dataHeader.map((item) => (
                        <li className='text-black font-medium border-b-2 border-zinc-300 w-full'>{item.title}</li>
                    ))}

                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 '>Sign In</button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
