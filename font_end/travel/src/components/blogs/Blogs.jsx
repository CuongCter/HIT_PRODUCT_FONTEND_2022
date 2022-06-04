import React from 'react'
import { dataBlogs } from './dataBlogs'

const Blogs = () => {
  return (
    <div className="container">
      <h1 className='title'>Cảm hứng cho những chuyến đi</h1>
      <p className='desc-title'>Những câu chuyện thú vị đằng sau mỗi bài viết</p>
      <div className="list-news grid grid-cols-2">
        <div className="cols-span-1">
          
          {dataBlogs.map((item, index) => {
            return (
              <div key={index} className="general-news"> 
                <img src={item.img} alt="" />
                <p>Top 5 Điểm Cắm Trại Quanh Hà Nội Siêu Hấp Dẫn Phải Rủ “Cạ Cứng” Đi Ngay</p>

              </div>
            )
          })
          }
        </div>
{/* 
        <div className="grid grid-cols-2 cols-span-1">
            <div className="item-news col-span-1">
            {dataBlogs.map((item, index) => {
              return (
                <div key={index} className="general-news"> 
                  <img src={item.img} alt="" />
                  <p>{item.title }</p>

                </div>
              )
            })}
          </div>
        </div>
         */}
      </div>
    </div>
  )
}

export default Blogs