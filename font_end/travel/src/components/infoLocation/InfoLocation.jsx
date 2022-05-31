import React from 'react'
import './InfoLocation.scss'


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

                <div className='infoLocation__content_main xl:grid xl:grid-cols-4 xl:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 md:mt-3 sm:grid'>
                    <div className='infoLocation__content_main-pic xl:row-span-2 xl:min-h-[186px] xl:min-w-[285px] lg:row-span-2 lg:min-h-[180px]'>
                        <img src="/font_end/travel/public/imgs/hanoi2.png" alt="" />
                    </div>
                    <div className='infoLocation__content_main-pic xl:row-span-1 xl:min-h-[186px] xl:min-w-[286px] lg:row-span-2 lg:min-h-[180px]'>2</div>
                    <div className='infoLocation__content_main-pic xl:row-span-2 xl:min-h-[186px] xl:min-w-[285px] lg:row-span-2 lg:min-h-[180px]'>3</div>
                    <div className='infoLocation__content_main-pic  xl:row-span-1 xl:min-h-[186px] xl:min-w-[285px] lg:row-span-2 lg:min-h-[180px]'>4</div>
                    <div className='infoLocation__content_main-pic  xl:row-span-1 xl:min-h-[186px] xl:min-w-[285px] lg:row-span-2 lg:min-h-[180px]'>5</div>
                    <div className='infoLocation__content_main-pic  xl:row-span-1 xl:min-h-[186px] xl:min-w-[285px] lg:row-span-2 lg:min-h-[180px]'>6</div>
                </div>
            </div>

        </div>
    )
}

export default InfoLocation