import styles from './Sidebar.module.scss'
import { HomeIcon, SearchIcon, LikeIcon, LibraryIcon, AddIcon } from '../../components/IconBox';
import {Link} from "react-router-dom";


function Sidebar() {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <Link to={`http://localhost:3000`}>
                        <HomeIcon />
                        <span>Home</span>
                    </Link>
                    <Link to={`http://localhost:3000/search`}>
                        <SearchIcon />
                        Search
                    </Link>
                </div>
            </div>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <Link to={`http://localhost:3000/library`} >
                        <LibraryIcon />
                        Library
                    </Link>
                    <Link to={`http://localhost:3000/`}>
                        <LikeIcon />
                        Liked Song
                    </Link>
                    <Link to={`http://localhost:3000/playlist/create`}>
                        <AddIcon />
                        New Playlist
                    </Link>
                </div>
            </div>

        </div >
    );
}

export default Sidebar;