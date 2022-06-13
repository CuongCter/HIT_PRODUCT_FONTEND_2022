<<<<<<< Updated upstream

import SignIn from "../components/SignIn/SignIn";
import Home from "../pages/Home";
import Login from "../pages/Login";
const publicRoutes = [
    { path: '/', component: Home },
     {path: '/signup',component: Login },
     {path: '/signin', component: SignIn}
]; 
=======
import Home from "../pages/Home";
import Locations from "../pages/Locations";
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/location', component: Locations }
];
>>>>>>> Stashed changes

const privateRoutes = [];

export { publicRoutes, privateRoutes };