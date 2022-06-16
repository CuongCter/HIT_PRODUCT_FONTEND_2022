import Resgister from "../modules/Auth/Resgister/Resgister";
import Login from "../modules/Auth/Login/Login";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import ForgotPassword from "../modules/Auth/forgot-password/ForgotPassword";
import Locations from "../../src/pages/Locations";
import ChangePass from "../modules/Auth/ChangePass/ChangePass";


const publicRoutes = [
    
   
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/resgister', component: Resgister },
    { path: '/pass', component: ForgotPassword },
    { path: '/location', component: Locations },
    { path: '/changepass', component: ChangePass },
    
]; 







const privateRoutes = [];

export { publicRoutes, privateRoutes };