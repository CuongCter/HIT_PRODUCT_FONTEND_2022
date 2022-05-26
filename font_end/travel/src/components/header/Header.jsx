import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
    return (
        <div className='header ' >
            <div className='header__navbar'>
                <div className='header__navbar--logo'>
                    <Link to="/">HelloTravel</Link>
                </div>

                <div className='header__navbar--menu'>
                    <ul className='header__navbar--menu_list'>
                        <li className="header__navbar--menu_list--item">Trang chủ</li>
                        <li className="header__navbar--menu_list--item">Địa điểm </li>
                        <li className="header__navbar--menu_list--item">Dịch vụ</li>
                        <li className="header__navbar--menu_list--item">Blogs</li>
                        <li className="header__navbar--menu_list--item">Tin tức</li>
                        <li className="header__navbar--menu_list--item">Liên hệ</li>
                    </ul>

                </div>
                <div class="header__navbar--bars">
                    <div class="menu d-flex align-items-center">
                        <span class="header__navbar--bars_respon-menu" /><i class="fas fa-bars"></i>
                    </div>
                </div>
                <div className='header__menu--login'>
                    Login
                </div>
            </div>

        </div>
    )
}

export default Header