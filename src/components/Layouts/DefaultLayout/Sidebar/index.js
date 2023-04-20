import styles from './Sidebar.module.scss'
import { HomeIcon, SearchIcon, LikeIcon, LibraryIcon, AddIcon } from '../../components/IconBox';
import {Link} from "react-router-dom";

const HOST = 'http://localhost:3000';
function Sidebar() {
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
                    <Link to={`${HOST}`}>
                        <AddIcon />
                        New Playlist
                    </Link>
                </div>
            </div>

        </div >
    );
}

export default Sidebar;