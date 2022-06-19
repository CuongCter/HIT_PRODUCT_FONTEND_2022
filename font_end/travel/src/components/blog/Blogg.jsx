import { ListItem } from '@mui/material'
import React from 'react'
import './Blog.scss'
import { dataBlog } from './dataBlog'
import { dataBlogg } from './dataBlogg'

const Blogg = () => {
  return (
    <div className='blog'>
      <div>
        <p className='heading '> Những lăng kính mới</p>
        <p className='heading-small mb-2'>Những góc nhìn mới qua từng câu chuyện</p>
        <div>
          {dataBlog.map((item, index) => {
            return (
              <div key={index} className="">
                <div className='blog-right  '>
                  <img className='imgCXG ' src={item.imgCXG} alt="" />
                  <div>
                    <p className='theme-blog ml-2'>{item.title}</p>
                    <p className='nameDS ml-2'>{item.nameDS}</p>
                    <p className='time-ac ml-2'>{item.time}</p>
                    <p className='cmt-blog ml-2'>{item.cmt}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <p className='posts-outstanding mb-2'>Bài viết nổi bật</p>
        <div>
          <img className='posts-outstanding-img mb-4' src="https://dulichviet.net.vn/wp-content/uploads/2019/09/ho-guom.jpg" alt="" />
        </div>

        <div>
          <p className='theme-new'>Bài viết mới đăng</p>
          <img className='theme-new-img' src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/anh15-9.png" alt="" />
          {dataBlogg.map((item, index) => {
            return (
              <div key={index} className='info-new '>
                <img className='imgNew mt-2' src={item.imgNew} alt="" />
                <div>
                  <p className='themeNew mt-2'>{item.themeNew}</p>
                  <div className='icon-date mt-2'>
                    <i class="fa-solid fa-pen "></i>
                    <p className='dateNew'>{item.dateNew}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogg