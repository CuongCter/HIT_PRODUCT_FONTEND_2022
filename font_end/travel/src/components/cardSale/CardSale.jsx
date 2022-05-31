import React from 'react'
import Slider from "react-slick";
import { dataBestSeller } from './data';
import './CardSale.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/left-arrow.svg"
import RightArrow from "../assets/right-arrow.svg"

const Card = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img className="" src={RightArrow} alt="nextArrow" {...props} />
    );
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
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
            <div className='slickSale xl:pl-32 xl:pr-32'>

                <div>Chỗ này để flase sale</div>
                .
                .
                .
                <Slider {...settings} >
                    {dataBestSeller.map((item) => (
                        <div className='cardSale'>
                            <div className='cardSale-item m-2 '>
                                <div className='cardSale-top '>
                                    <img src={item.linkImg} alt={item.title} />
                                    <h1 className='text-lg pl-2'>{item.title}</h1>
                                </div>
                                <div className='carSale-bottom pl-2  '>
                                    <h3>{item.location}</h3>
                                    <h2 className="flex justify-end">{item.price}</h2>
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