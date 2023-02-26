import Account from '../pages/Account';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Playlist from '../pages/Playlist';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account', component: Account },
    { path: 'login', component: Login },
    { path: 'search', component: Search }
];
const privateRoutes = [
    { path: 'profile', component: Profile },
    { path: '/library', component: Library },
    { path: '/plalist', component: Playlist }
];

export { publicRoutes, privateRoutes }