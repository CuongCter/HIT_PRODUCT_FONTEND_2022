import React from 'react'
import './InfoLocation.scss'
import { imgs } from '../assets/img'
import { dataLocation } from './dataLocation'
const InfoLocation = (dataLoca) => {
    return (
        <div className='infoLocation '>
            <div className='infoLocation__content '>
                <div className='infoLocation__content_header'>
                    <div className='infoLocation__content_header-title'>
                        <h1 className='xl:text-2xl xl:font-semibold md:font-semibold md:text-2xl sm:text-xl sm:font-semibold'>Các điểm đến hấp dẫn</h1>
                        <h2 className='xl:text-lg md:text-lg sm:text-xs'>Các địa điểm du lịch hàng đầu do HelloTravel đề xuất </h2>
                    </div>
                    <div className='infoLocation__content_header-btn '>
                        <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400 ">Khám phá ngay</button>
                    </div>

                </div>

                <div className='infoLocation__content_main xl:grid xl:grid-cols-4 xl:gap-4 xl:grid-rows-2 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-5 lg:mt-10 md:mt-3 sm:grid '>
                    <div className='infoLocation__content_main-pic xl:h-full xl:row-span-2 xl:min-h-[186px] xl:max-h-full xl:min-w-[285px]  lg:max-h-[250px]  '>
                        <button className='mt-2 ml-2 absolute w-20 bg-pink-500 border-pink-500'>{dataLocation.haNoi}</button>
                        <img src={imgs.img1} alt="" className='w-full h-full '></img>
                    </div>
                    <div className='infoLocation__content_main-pic xl:h-full xl:row-span-1 xl:min-h-[186px] xl:max-h-full xl:min-w-[286px]  lg:max-h-[250px] '>
                        <button className='mt-2 ml-2 absolute w-20 bg-pink-500 border-pink-500'>{dataLocation.daNang}</button>
                        <img src={imgs.img2} alt="" className='w-full h-full '></img>
                    </div>
                    <div className='infoLocation__content_main-pic xl:h-full xl:row-span-2 xl:min-h-[186px] xl:max-h-full xl:min-w-[285px]   lg:max-h-[250px]'>
                        <button className='mt-2 ml-2 absolute w-50 p-1 bg-pink-500 border-pink-500'>{dataLocation.hoChiMinh}</button>
                        <img src={imgs.img3} alt="" className='w-full h-full '></img>
                    </div>
                    <div className='infoLocation__content_main-pic  xl:row-span-1 xl:min-h-[186px] xl:min-w-[285px]  lg:min-h-[250px] '>
                        <button className='mt-2 ml-2 absolute w-20 bg-pink-500 border-pink-500'>{dataLocation.daLat}</button>
                        <img src={imgs.img4} alt="" className='w-full h-full '></img>
                    </div>
                    <div className='infoLocation__content_main-pic  xl:row-span-1 xl:min-h-[186px] xl:min-w-[285px]  lg:min-h-[250px] '>
                        <button className='mt-2 ml-2 absolute w-20 bg-pink-500 border-pink-500'>{dataLocation.phuQuoc}</button>
                        <img src={imgs.img5} alt="" className='w-full h-full '></img>
                    </div>
                    <div className='infoLocation__content_main-pic  xl:row-span-1 xl:min-h-[186px] xl:min-w-[285px]  lg:min-h-[250px] '>
                        <button className='mt-2 ml-2 absolute w-20 bg-pink-500 border-pink-500'>{dataLocation.hoiAn}</button>
                        <img src={imgs.img6} alt="" className='w-full h-full '></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoLocation