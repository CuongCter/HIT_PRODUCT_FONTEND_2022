import React from 'react'
import { dataList } from './dataList'
import './ListHotel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { Stack, Rating } from '@mui/material'
import Slider from 'react-slick'
const ListHotel = () => {
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
                <h1 className='font-bold text-3xl pt-4 mb-2'>Khách sạn giá sốc</h1>
                <div className='flex'>
                    {dataList.map((item) => (
                        <button className='btn-location mr-3 bg-white text-black w-max-[94px] h-max-[32px] p-1 rounded-xl border-black '>{item.location}</button>
                    ))}
                </div>

                <div className='card-list '>
                    {dataList.map((item) => (
                        <div className='card-list__item'>
                            <div className='cardList'>
                                <div className='cardList-item  '>
                                    <div className='cardList-top '>
                                        <button className='mt-2 ml-2 absolute w-14 bg-pink-400 border-pink-400'>{item.promotion}</button>
                                        <img src={item.linkImg} alt={item.title} />
                                        <h1 className='text-base pl-2 font-semibold'>{item.title}</h1>

                                        <Rating className='pl-2'
                                            name="size-small" defaultValue={5} size="small" />
                                    </div>
                                    <div className='cardHotel-bottom pl-2  '>
                                        <div className='flex mb-2'>
                                            <div className='mr-2 '><FontAwesomeIcon className='text-sm' icon={faLocationDot} /></div>
                                            <div><h3 className='text-sm'>{item.location}</h3></div>
                                            <button className='ml-2 text-sm bg-white text-pink-500 border-pink-400 '>Khu nghỉ dưỡng</button>
                                        </div>
                                        <div className='flex'>
                                            <button className='mr-1 mb-1 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon className='text-sm' icon={faUmbrellaBeach} /> {item.point}</button>
                                            <h3 className='text-sm'>{item.cmt}</h3>
                                        </div>
                                        <span className='bg-slate-200 border-neutral-100 rounded-sm text-blue-500 text-sm'>{item.time}</span>
                                        <h2 className="flex justify-end  line-through font-thin right-0 mr-2 text-sm">{item.price}</h2>
                                        <h1 className='flex justify-end font-medium mr-2 text-sm'>{item.pay}</h1>
                                        <div className='flex justify-between border-dashed border-2 rounded-md border-slate-200 mb-3 mt-2 p-1 mr-2'>
                                            <div>
                                                <h2 className='text-sm'>Mã: <span className='text-sm text-blue-400'>DONNHE <button className='bg-blue-400 text-sm'>-5%</button></span></h2>
                                            </div>
                                            <div>
                                                <h1 className='font-medium text-lg text-pink-400 text-base'>{item.pay}</h1>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div className="text-center mt-5 text-xl ">
                    <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem tất cả</button>
                </div>
            </div >
            <div className='cardMoblie'>
                <h1 className='font-bold text-3xl pt-5 mb-0'>Khách sạn giá sốc</h1>
                <Slider {...settings} className="slickInfo">
                    {dataList.map((item) => (
                        <div className='cardList'>
                            <div className='cardList-item m-2 '>
                                <div className='cardList-top '>
                                    <button className='mt-2 ml-2 absolute w-13 bg-pink-400 border-pink-400'>{item.promotion}</button>
                                    <img src={item.linkImg} alt={item.title} />
                                    <h1 className='text-lg pl-2 font-semibold'>{item.title}</h1>

                                    <Rating className='pl-2'
                                        name="size-small" defaultValue={5} size="small" />
                                </div>
                                <div className='cardHotel-bottom pl-2  '>
                                    <div className='flex mb-2'>
                                        <div className='mr-2'><FontAwesomeIcon icon={faLocationDot} /></div>
                                        <div><h3>{item.location}</h3></div>

                                    </div>
                                    <div className='flex'>
                                        <button className='mr-1 mb-2 h-6 w-14 bg-slate-200 border-neutral-100 text-pink-400'><FontAwesomeIcon icon={faUmbrellaBeach} /> {item.point}</button>
                                        <h3 className=''>{item.cmt}</h3>
                                    </div>
                                    <span className='bg-slate-200 border-neutral-100 rounded-sm text-blue-500'>{item.time}</span>
                                    <h2 className="flex justify-end  line-through mt-5 font-thin right-0 mr-2">{item.price}</h2>
                                    <h1 className='flex justify-end text-lg font-medium mr-2'>{item.pay}</h1>
                                    <div className='flex justify-between border-dashed border-2 rounded-md border-slate-200 mb-3 mt-2 p-1 mr-2'>
                                        <div>
                                            <h2>Mã: <span>DONNHE <button>-5%</button></span></h2>
                                        </div>
                                        <div>
                                            <h1 className='font-medium text-lg text-pink-400 '>{item.pay}</h1>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>


                    ))}
                </Slider>
                <div className="text-center mt-10 text-xl ">
                    <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400">Xem tất cả</button>
                </div>
            </div>
        </>
    )
}

export default ListHotel