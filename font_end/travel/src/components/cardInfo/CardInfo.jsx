import React from 'react'
import './CardInfo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { dataInfo } from './dataInfo'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const CardInfo = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ]
    };
    return (
        <>
            <div className='card'>
                <h1 className='font-bold text-3xl pt-5 mb-5'>Gặp gỡ chúng tôi</h1>
                <ul className='card-list '>
                    {dataInfo.map((item) => (
                        <li className='card-list__item'>
                            <div class="card-container ">
                                <div >
                                    <div className='card-container_upper'>
                                        <img src={item.linkAvt} alt="" />
                                    </div>
                                    <div className='card-container_lower'>
                                        <div className='card-container_lower-title'>
                                            <h2 className='font-bold'>{item.name}</h2>
                                        </div>
                                        <div className='card-container_lower-cmt'>
                                            <h3>{item.cmt}</h3>
                                        </div>
                                        <div className='card-container_lower-icon'>

                                            <i class="fa-brands fa-facebook"></i>
                                            <i class="fa-brands fa-instagram-square"></i>
                                            <i class="fa-brands fa-github"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    ))}
                </ul>
            </div >
            <div className='cardMoblie'>
                <Slider {...settings} className="slickInfo">
                    {dataInfo.map((item) => (
                        <div class="moblie_card-container ">
                            <div >
                                <div className='moblie_card-container_upper'>
                                    <img src={item.linkAvt} alt="" />
                                </div>
                                <div className='moblie_card-container_lower'>
                                    <div className='moblie_card-container_lower-title'>
                                        <h2 className='font-bold'>{item.name}</h2>
                                    </div>
                                    <div className='moblie_card-container_lower-cmt'>
                                        <h3>{item.cmt}</h3>
                                    </div>
                                    <div className='moblie_card-container_lower-icon'>

                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-instagram-square"></i>
                                        <i class="fa-brands fa-github"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                    ))}
                </Slider>
            </div>
        </>

    )
}

export default CardInfo