import { AccountLayout, CreatePlaylistLayout } from '../components/Layouts';

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
import createPlaylist from '../pages/Playlist/createPlaylist'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/account', component: Account, layout: AccountLayout },
    { path: '/search', component: Search },
    { path: '/login', component: Login, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/album/:albumId', component: Album}
];
const privateRoutes = [
    { path: '/library', component: Library },
    { path: '/playlist/:id', component: Playlist},
    { path: '/playlist/create', component: createPlaylist, layout: CreatePlaylistLayout},
    { path: '/infor-song/:id', component: InforSong },
    { path: '/profile', component: Profile }
];

export { publicRoutes, privateRoutes }