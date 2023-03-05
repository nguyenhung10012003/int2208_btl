import styles from './Header.module.scss'
import SearchBar from './SearchBar';
import HeaderProfile from './HeaderProfile';
import { Logo } from '../../../global'
import Ward from './Ward';

function Header() {
    return (
        <header className={styles['wrapper']}>
            <div className={styles['Logo']}>
                <Logo />
            </div>
            <div className={styles['container']}>
                <Ward />
                <SearchBar />
                <HeaderProfile />
            </div>
        </header>
    );
}

export default Header;