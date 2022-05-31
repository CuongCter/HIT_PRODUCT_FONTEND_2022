import React, { useState } from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './Header.scss'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (
        <div className='header'>
            <div className='w-screen h-[90px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
                <div className='px-10 flex justify-between items-center w-full h-full '>
                    <div className='flex items-center '>
                        <h1 className='text-3xl font-bold mr-4 sm:text-3xl'>HelloTravel</h1>
                        <ul className='hidden md:flex md:ml-44 text-lg  font-normal'>
                            <li className=''><Link to="home" smooth={true} duration={500} className='text-black'>Trang chủ</Link></li>
                            <li><Link to="\about" smooth={true} offset={-200} duration={500} className='text-black'>Địa điểm</Link></li>
                            <li><Link to="\support" smooth={true} offset={-50} duration={500} className='text-black'>Dịch vụ</Link></li>
                            <li><Link to="\platforms" smooth={true} offset={-100} duration={500} className='text-black'>Blog</Link></li>
                            <li><Link to="\pricing" smooth={true} offset={-50} duration={500} className='text-black'>Tin tức</Link></li>
                            <li><Link to="\contact" smooth={true} offset={-50} duration={500} className='text-black'>Liên hệ</Link></li>
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
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="\home" smooth={true} duration={500} className='text-black'>Trang chủ</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="\about" smooth={true} offset={-200} duration={500} className='text-black'>Địa điểm</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="\support" smooth={true} offset={-50} duration={500} className='text-black'>Dịch vụ</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="\platforms" smooth={true} offset={-100} duration={500} className='text-black'>Blog</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="\pricing" smooth={true} offset={-50} duration={500} className='text-black'>Tin tức</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="\contact" smooth={true} offset={-50} duration={500} className='text-black'>Liên hệ</Link></li>
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
