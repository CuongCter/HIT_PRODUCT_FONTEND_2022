
import SignIn from "../components/SignIn/SignIn";
import Home from "../pages/Home";
import Login from "../pages/Login";
const publicRoutes = [
    { path: '/', component: Home },
     {path: '/signup',component: Login },
     {path: '/signin', component: SignIn}
]; 

const privateRoutes = [];

export { publicRoutes, privateRoutes };