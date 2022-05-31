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
            <div className='slickSale  '>
                <div>
                    <img src="/font_end/travel/src/img/flashsalelogo.png" alt="" />
                </div>
                <div>Chỗ này để flase sale</div>
                .
                .
                .
                <Slider {...settings}>
                    {dataBestSeller.map((item) => (
                        <div className='cardSale'>
                            <div className='cardSale-item'>
                                <div className='cardSale-top'>
                                    <img src={item.linkImg} alt={item.title} />
                                    <h1 className='text-lg'>{item.title}</h1>
                                </div>
                                <div className='carSale-bottom'>
                                    <h3>{item.location}</h3>
                                    <h2>{item.price}</h2>
                                </div>

                            </div>
                        </div>
                    ))
                    }
                </Slider>
                <div className="text-center mt-10 text-xl ">
                    <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem thêm</button>
                </div>

            </div >

        </>

    )
}

export default Card