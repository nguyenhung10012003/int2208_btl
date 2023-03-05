import styles from './Sidebar.module.scss'
import { HomeIcon, SearchIcon, LikeIcon, LibraryIcon, AddIcon } from '../../components/IconBox';


function Sidebar() {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <a href='#'>
                        <HomeIcon />
                        <span>Home</span>
                    </a>
                    <a href='#'>
                        <SearchIcon />
                        Search
                    </a>
                </div>
            </div>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <a href='#' >
                        <LibraryIcon />
                        Library
                    </a>
                    <a href='#'>
                        <LikeIcon />
                        Liked Song
                    </a>
                    <a href='#'>
                        <AddIcon />
                        New Playlist
                    </a>
                </div>
            </div>

        </div >
    );
}

export default Sidebar;