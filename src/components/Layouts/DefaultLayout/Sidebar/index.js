import styles from './Sidebar.module.scss'
import { HomeIcon, SearchIcon, LikeIcon, LibraryIcon, AddIcon } from '../../components/IconBox';
import {Link} from "react-router-dom";
import CreateNewPlaylist from '../../../../pages/Playlist/CreateNewPlaylist';
import { useState } from 'react';

const HOST = 'http://localhost:3000';
function Sidebar() {
    const [isDisCreate, setIsDisCreate] = useState(false);
  
    const handleClick = () => {
        setIsDisCreate(!isDisCreate);
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <Link to={`${HOST}/`}>
                        <HomeIcon />
                        <span>Home</span>
                    </Link>
                    <Link to={`${HOST}/search`}>
                        <SearchIcon />
                        Search
                    </Link>
                </div>
            </div>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <Link to={`${HOST}/library`} >
                        <LibraryIcon />
                        Library
                    </Link>
                    <Link to={`${HOST}/`}>
                        <LikeIcon />
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