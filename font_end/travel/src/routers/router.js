import Resgister from "../modules/Auth/Resgister/Resgister";
import Login from "../modules/Auth/Login/Login";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";
import ForgotPassword from "../modules/Auth/forgot-password/ForgotPassword";
import Locations from "../../src/pages/Locations";
import ChangePass from "../modules/Auth/ChangePass/ChangePass";
import Room from "../../src/pages/Room";
import Blog from "../../src/pages/Blog";
import InsideBlog from "../../src/pages/InsideBlog";
import Location2 from "../pages/Location2";
import PickRoom from "../pages/PickRoom";
import Contact from "../pages/Contact";
import User from '../pages/User';
import UserRoom from '../pages/UserRoom';
import UserPosts from '../pages/UserPosts';
import UserAssess from '../pages/UserAssess.jsx';
import UserPromotion from '../pages/UserPromotion.jsx';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/resgister', component: Resgister },
    { path: '/pass', component: ForgotPassword },
    { path: '/location', component: Locations },
    { path: '/changepass', component: ChangePass },
    { path: '/room', component: Room},
    { path: '/blog', component: Blog },
    { path: '/insideBlog', component: InsideBlog},
    { path: '/blog', component: Blog},
    { path: '/bookRoom', component: PickRoom},
    { path: '/contact', component: Contact},
    { path: '/location2', component: Location2},
    { path: '/user', component: User },
    { path: '/user2', component: UserRoom },
    { path: '/user3', component: UserPosts},
    { path: '/user4', component: UserAssess },
    { path: '/user5', component: UserPromotion},
]; 


const privateRoutes = [];

export { publicRoutes, privateRoutes };