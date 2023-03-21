import Account from '../pages/Account';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Playlist from '../pages/Playlist';
import SignUp from '../pages/SignUp';
import InforSong from '../pages/InforSong';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account', component: Account },
    { path: '/search', component: Search },
    { path: '/login', component: Login, layout: null},
    { path: '/sign-up', component: SignUp, layout: null }
];
const privateRoutes = [
    { path: '/profile', component: Profile },
    { path: '/library', component: Library },
    { path: '/playlist', component: Playlist },
    { path: '/infor-song', component: InforSong}
];

export { publicRoutes, privateRoutes }