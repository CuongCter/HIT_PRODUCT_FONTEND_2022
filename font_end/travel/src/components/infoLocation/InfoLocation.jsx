import React from 'react'
import './InfoLocation.scss'
const InfoLocation = () => {
    return (
        <div className='infoLocation'>
            <div className='infoLocation__content'>
                <div className='infoLocation__content_header'>
                    <div className='infoLocation__content_header-title'>
                        <h1 className='text-2xl'>Các điểm đến hấp dẫn</h1>
                        <h2>Các địa điểm du lịch hàng đầu do HelloTravel đề xuất</h2>
                    </div>
                    <div className='infoLocation__content_header-btn '>
                        <button className="px-5 py-2 text-pink-400 back bg-white border-pink-400 ">Khám phá ngay</button>
                    </div>

                </div>
                <div className='infoLocation__content_main grid grid-cols-4 gap-4'>
                    <div className='infoLocation__content_main-pic row-span-2 min-h-[390px] min-w-[285px]'></div>
                    <div className='infoLocation__content_main-pic min-h-[178px] min-w-[285px]'></div>
                    <div className='infoLocation__content_main-pic row-span-2 min-h-[390px] min-w-[285px]'></div>
                    <div className='infoLocation__content_main-pic min-h-[178px] min-w-[285px]'></div>
                    <div className='infoLocation__content_main-pic min-h-[178px] min-w-[285px]'></div>
                    <div className='infoLocation__content_main-pic min-h-[178px] min-w-[285px]'></div>
                </div>
            </div>

        </div>
    )
}

export default InfoLocation