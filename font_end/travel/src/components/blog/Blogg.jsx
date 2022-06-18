import { ListItem } from '@mui/material'
import React from 'react'
import './Blog.scss'
import {dataBlog} from './dataBlog'
import { dataBlogg } from './dataBlogg'

const Blogg = () => {
  return (
    <div className='blog'>
      <div>
        <p className='heading'> Những lăng kính mới</p>
        <p className='heading-small'>Những góc nhìn mới qua từng câu chuyện</p>
        <div>
          {dataBlog.map((item, index) => {
            return (
              <div key={index} className=" ">
                <div className='blog-right'>
                  <img className='imgCXG' src={item.imgCXG} alt="" />
                  <div>
                    <p className='theme-blog'>{item.title}</p>
                    <p className='nameDS'>{item.nameDS}</p>
                    <p className='time-ac'>{item.time}</p>
                    <p className='cmt-blog'>{item.cmt}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <p className='posts-outstanding'>Bài viết nổi bật</p>
        <div>
          <img className='posts-outstanding-img' src="https://dulichviet.net.vn/wp-content/uploads/2019/09/ho-guom.jpg" alt="" />
        </div>

        <div>
          <p className='theme-new'>Bài viết mới đăng</p>
          <img className='theme-new-img' src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/anh15-9.png" alt="" />
          {dataBlogg.map((item, index) => {
            return (
              <div key={index} className='info-new'>
                <img className='imgNew' src={item.imgNew} alt="" />
                <div>
                  <p className='themeNew'>{item.themeNew }</p>
                  <div className='icon-date'>
                    <i class="fa-solid fa-pen"></i>
                    <p className='dateNew'>{item.dateNew }</p>
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