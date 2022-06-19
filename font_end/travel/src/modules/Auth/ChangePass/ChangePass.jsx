import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios'
import './ChangePass.scss'
import { API } from '../const/const.api'

const ChangePass = () => {

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            //alert(JSON.stringify(values, null, 2));
            if (values.newPassword !== values.confirmPassword) {
                alert('Xác nhận không khớp')
            }
            else {
                try {
                    console.log(values);
                    const resData = await axios.patch(`${API}users/changePassword`,
                        {
                            oldPassword: values.oldPassword,
                            newPassword: values.newPassword
                        },
                        // {
                        //     headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2dXF1eW5oIiwiaWF0IjoxNjU1MjIyMDk0LCJleHAiOjE2NTUzMDg0OTR9.V_hA88YPfABajAiGOHJ7UmTBdNZoeLkVNLiFgTb4jqU' }
                        // })
                    )
                    console.log(resData)

                } catch (err) {
                    console.log(err)
                    alert('Fail')
                }
            }

        },
    });
    return (
        <div className='change'>
            <div className="change_main">
                <div className="change_main-img">
                    <img src="https://images.unsplash.com/photo-1654896888033-a12b0ee910b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="change_main-content">
                    <div className="change_main-content__input">
                        <Link to='/'>
                            <div className='flex justify-end' >
                                <div className='login_main-content__signin-close text-black'>
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div>
                        </Link>
                        <h1 className='text-3xl font-bold'>Hello Travell</h1>
                        <h1 className='mt-3'>Thay đổi mật khẩu</h1>
                        <div className='mt-5'>
                            <form onSubmit={formik.handleSubmit}>
                                <input
                                    id="oldPassword"
                                    name="oldPassword"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.oldPassword}
                                    placeholder='Mật khẩu hiện tại'
                                    className='inputPass'
                                />
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.newPassword}
                                    placeholder='Nhập mật khẩu mới'
                                    className='inputPass'
                                />
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.confirm}
                                    placeholder='Xác nhận mật khẩu'
                                    className='inputPass'
                                />
                                <button className='btn-pass bg-[#FC5981] hover:bg-[#9ec0e2] hover:text-black' type="submit">Xác thực</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePass