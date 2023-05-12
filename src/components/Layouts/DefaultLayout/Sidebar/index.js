import styles from './Sidebar.module.scss'
import { HomeIcon, SearchIcon, LikeIcon, LibraryIcon, AddIcon } from '../../components/IconBox';
import {Link} from "react-router-dom";
import CreateNewPlaylist from '../../../CreateNewPlaylist';
import { useState } from 'react';

const HOST = 'http://localhost:3000';
function Sidebar() {
    const [isDisCreate, setIsDisCreate] = useState(false);
    const [tab, setTab] = useState('home');
  
    const handleClick = () => {
        setIsDisCreate(!isDisCreate);
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <Link to={`${HOST}/`} onClick={() => setTab('home')}
                          style={tab==='home' ? {color: '#fff'} : {}}
                    >
                        <HomeIcon active={tab === 'home'}/>
                        <span>Home</span>
                    </Link>
                    <Link to={`${HOST}/search`} onClick={() => setTab('search')}
                          style={tab==='search' ? {color: '#fff'} : {}}
                    >
                        <SearchIcon active={tab === 'search'}/>
                        Search
                    </Link>
                </div>
            </div>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <Link to={`${HOST}/library`} onClick={() => setTab('library')}
                          style={tab==='library' ? {color: '#fff'} : {}}
                    >
                        <LibraryIcon />
                        Library
                    </Link>
                    <Link to={`${HOST}/likedsong`} onClick={() => setTab('liked')}
                          style={tab==='liked' ? {color: '#fff'} : {}}
                    >
                        <LikeIcon liked={tab==='liked'}/>
                        Liked Song
                    </Link>
                    <Link onClick={handleClick}>
                        <AddIcon />
                        New Playlist
                    </Link>
                </div>
            </div>
            {isDisCreate && 
                <div>
                    <div onClick={handleClick} className={styles['hidden_background']}></div>
                    <CreateNewPlaylist onClick={handleClick}/>
                </div>
            }
        </div >
    );
}

export default Sidebar;