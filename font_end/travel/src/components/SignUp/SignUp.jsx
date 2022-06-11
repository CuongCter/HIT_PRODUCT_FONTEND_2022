import React, { useEffect, useState } from 'react'
import './SignUp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faXmark, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
const SignUp = () => {
    // const fetchData = () => {
    //     return axios.get("https://api-travell.herokuapp.com/api/v1/users")
    //         .then((response) => console.log(response.data));
    // }

    // fetchData()
    const clientId = '36536591056-nqetopeqi2e466uk4ujl7dh8e73m9n73.apps.googleusercontent.com'
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS ! Current user: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return (
        <div className='signUp'>
            <div className='signUp-container'>

                <div className='signUp-container_pic'>
                    <img src="https://images.unsplash.com/photo-1654665463324-154b0dbec308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

                <div className='signUp-container_content'>

                    <div className='signUp-container_content__main '>
                        <Link to='/'>
                            <div className='flex justify-end mb-12 '>
                                <div className='signUp-container_content__close  text-black '>
                                    <FontAwesomeIcon icon={faXmark} className='' />
                                </div>
                            </div></Link>

                        <h1 className='text-3xl font-bold mb-5'>Hello Travell</h1>
                        <div>
                            <button className='face-btn w-[312px] h-[44px] mb-5 bg-white text-black border-neutral-300 '>
                                <div className='flex p-2 '>
                                    <div className='w-[31px] h-[31px]'>
                                        <img src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png " className='' alt="" />
                                    </div>

                                    <h2 className='ml-12 font-normal'>Đăng ký bằng Facebook</h2>
                                </div>

                            </button>
                        </div>
                        <div>
                            
                            <GoogleLogin
                                clientId={clientId}
                                buttonText='Đăng ký bằng Google'
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                                className='google-btn google-btn h-[44px] w-[312px] mb-5 bg-white text-black border-neutral-300'
                            >

                            </GoogleLogin>
                        </div>

                        <h2 className='mb-5 font-medium'>Hoặc đăng ký bằng số điện thoại</h2>
                        <div >
                            <input className='mb-5 h-[44px] w-[312px]' type="" placeholder='   xxx-000-000' />
                        </div>

                        <button className=' w-[312px] h-[44px] mb-5 bg-pink-400 border-pink-400'>Đăng ký</button>
                        <h2 className='mb-10'>Bạn đã có tài khoản ? <Link to='/signin'><span className='text-blue-400 font-medium'>Đăng nhập</span></Link> </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp