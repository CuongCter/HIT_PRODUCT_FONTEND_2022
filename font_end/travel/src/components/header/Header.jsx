import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./Header.scss"
import { MenuIcon, XIcon } from '@heroicons/react/outline'


const Header = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose = () => setNav(!nav)

    return (
        <div className='header'>
            <div className=' w-screen h-[56px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
                <div className="px-2 flex  items-center w-full h-full justify-around">
                    <div className="flex items-center ">
                        <h1 className="text-3xl font-bold mr-44 sm:text-4xl">Travel</h1>
                        <ul className="hidden md:flex font-medium   ">
                            <li>Trang chủ</li>
                            <li>Địa điểm</li>
                            <li>Dịch vụ</li>
                            <li>Blogs</li>
                            <li>Tin tức</li>
                            <li>Liên hệ</li>
                        </ul>
                    </div>
                    <div className="hidden md:flex pr-4">
                        <button className='border-none bg-transparent text-black mr-4 font-medium'>
                            Sign In
                        </button>
                        <button className='px-8 py-3 font-medium' >Sign Up</button>
                    </div>
                    <div className="md:hidden" onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                    </div>
                </div>
                <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'} >
                    <li className='border-b-2 border-zinc-300 w-full'>Trang chủ</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Địa điểm</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Dịch vụ</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Blogs</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Tin tức</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Liên hệ</li>
                    <div className='flex flex-col my-4'>
                        <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                        <button className='px-8 py-3'>Sign Up</button>
                    </div>
                </ul>
            </div >
        </div>


    )
}

export default Header