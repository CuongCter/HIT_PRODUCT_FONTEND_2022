
import Resgister from "../modules/Auth/Resgister/Resgister";
import Login from "../modules/Auth/Login/Login";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import ForgotPassword from "../modules/Auth/forgot-password/ForgotPassword";

const publicRoutes = [
    
   
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/resgister', component: Resgister },
    { path: '/pass', component: ForgotPassword },
     
]; 

const privateRoutes = [];

export { publicRoutes, privateRoutes };