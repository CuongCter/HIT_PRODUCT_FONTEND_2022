
//import Login from '../components/login/Login'
import SignUp from '../components/SignUp/SignUp'
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gapi} from 'gapi-script'
const clientId = '36536591056-nqetopeqi2e466uk4ujl7dh8e73m9n73.apps.googleusercontent.com'
const Test= () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    })

    return (
        <SignUp />

    )
}

export default Test