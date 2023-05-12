import { AccountLayout } from '../components/Layouts';

import Account from '../pages/Account';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Playlist from '../pages/Playlist';
import SignUp from '../pages/SignUp';
import InforSong from '../pages/InforSong';
import Album from "../pages/Album";
import Watch from "../pages/Watch";
import Artist from "../pages/Artist";
import LikedSong from '../pages/LikedSong';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account', component: Account, layout: AccountLayout },
    { path: '/search', component: Search },
    { path: '/login', component: Login, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/album/:albumId', component: Album},
    { path: '/artist/:name', component: Artist},
    { path: '/watch', component: Watch}
];
const privateRoutes = [
    { path: '/library', component: Library },
    { path: '/playlist/:id', component: Playlist},
    { path: '/infor-song/:id', component: InforSong },
    { path: '/profile', component: Profile },
    { path: '/likedsong', component: LikedSong}
];

export { publicRoutes, privateRoutes }