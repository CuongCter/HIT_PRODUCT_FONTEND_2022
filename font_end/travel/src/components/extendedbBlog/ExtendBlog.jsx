import React from 'react'
import { dataExtendBlog } from './dataExtendBlog'
import {dataInsideBlog} from './dataInsideBlog'
import './ExtendBlog.scss'

const ExtendBlog = () => {
  return (
    <div className='extend-blog'>
      <div className="img-on-top grid xl:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-3">
        {dataInsideBlog.map((item, index) => {
          return (
            <div key={index} >
              <img className='img-top' src={item.imgTheme} alt="" />
            </div>
          )
        })}
      </div>
      
      <div className="blur-frame">
        <p>Review Tiệm Bánh Cối Xay Gió Nơi Check In Hoàn Hảo</p>
        <div>
          <i class="fa-solid fa-location-dot"></i>
          <a className='location-blog' href="">9 Đường Tăng Bạt Hổ, Phường 1, Thành phố Đà Lạt, Lâm Đồng</a>
        </div>
      </div>

      <div className="content">
        <div className='content-left'>
          {dataExtendBlog.map((item, index) => {
            return (
              <div key={index} className="container-content">
                <p className='content-title mb-2 '>{item.title}</p>
                <p className='content-cmt mb-2'>{item.content}</p>
                <img className='content-img' src={item.imgOnTop} alt="" />
              </div>
            )
          })}
        </div>

        <div></div>
      </div>

    </div>
  )
}

export default ExtendBlog