import styles from './Header.module.scss'
import SearchBar from './SearchBar';
import HeaderProfile from './HeaderProfile';

function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles['menu-circle']}></div>
            <SearchBar />
            <HeaderProfile />
        </header>
    );
}

export default Header;