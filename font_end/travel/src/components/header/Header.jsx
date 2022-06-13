import React, { useState } from 'react';
import { animateScroll as scroll, } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom'
import { dataHeader } from './dataHeader';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)
    const navigate = useNavigate()

    const handleLogoutSystem = () => {
        localStorage.setItem('isLogin', false)
        const isLogin = localStorage.getItem('isLogin')
        if (isLogin === 'false') {
            localStorage.removeItem('accessToken')
            navigate('/login')
            window.history.replaceState({}, "/");
            localStorage.removeItem('isLogin')
        }
    }

    const isLogin = localStorage.getItem('isLogin')

    // console.log(isLogin);
    return (
        <div className='header'>
            <div>
                <video src='/videos/beach_-_3998 (Original).mp4' autoPlay loop muted />
            </div>
            <div className='w-screen md:h-[80px] lg:h-[56px] z-10 bg-zinc-200 fixed drop-shadow-lg '>
                <div className='px-10 flex justify-between items-center w-full h-full '>
                    <div className='flex items-center '>
                        <h1 className='text-3xl font-bold xl:mr-12 sm:text-3xl'>HelloTravel</h1>
                        <ul className='hidden md:flex md:ml-40 text-lg  font-normal '>
                            {dataHeader.map((item) => (
                                <li><Link to={item.linkPage} onClick className='text-black font-medium'>{item.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className='hidden md:flex pr-4 lg:hidden xl:block'>
                        {
                            isLogin ?
                                <>
                                    <div> <i class="fa-solid fa-user"></i></div>

                                    {/* <button>Đổi mật khẩu</button> */}
                                    <button onClick={handleLogoutSystem}>Logout</button>
                                </>
                                :
                                <>

                                    <Link to='/login'>
                                        <button className='border-none bg-transparent text-black mr-4 font-medium text-lg'>
                                            Đăng nhập
                                        </button>
                                    </Link>
                                    <Link to='/resgister'>
                                        <button className='px-8 py-2 font-medium text-lg'>Đăng ký</button>
                                    </Link>
                                </>
                        }



                    </div>
                    <div className='md:hidden mr-4 lg:hidden' onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
                    </div>
                </div>

                <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                    {dataHeader.map((item) => (
                        <li className='text-black font-medium border-b-2 border-zinc-300 w-full '>{item.title}</li>
                    ))}

                    <div className='flex flex-col my-4'>
                        {
                            isLogin ? <button onClick={handleLogoutSystem}>Logout</button> :
                                <><Link to='\login'><button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 text-base'>Đăng nhập</button></Link>

                                    <Link to='\register'><button className='px-8 py-3 text-base'>Đăng Ký</button></Link></>
                        }


                    </div>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;
