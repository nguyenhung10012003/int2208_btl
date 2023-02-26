import styles from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <a href='#'>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        Home
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        Search
                    </a>
                </div>
            </div>
            <div className={styles['side-wrapper']}>
                <div className={styles['side-menu']}>
                    <a href='#'>
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        Library
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        Liked Song
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        New Playlist
                    </a>
                </div>
            </div>

        </div >
    );
}

export default Sidebar;