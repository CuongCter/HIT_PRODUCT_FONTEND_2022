import React from 'react'
import Slider from "react-slick";
import { dataBestSeller } from './data';
import './CardSale.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Card = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 4
                },
            }
        ]
    };
    return (
        <>
            <div className='slick'>
                <Slider {...settings}>
                    {dataBestSeller.map((item) => (
                        <div className='card'>
                            <div className='card-item'>
                                <div className='card-top'>
                                    <img src={item.linkImg} alt={item.title} />
                                    <h1 className='text-lg'>{item.title}</h1>
                                </div>
                                <div className='card-bottom'>
                                    <h3>{item.location}</h3>
                                    <h2>{item.price}</h2>
                                </div>

                            </div>
                        </div>
                    ))
                    }
                </Slider>

            </div >
        </>

    )
}

export default Card