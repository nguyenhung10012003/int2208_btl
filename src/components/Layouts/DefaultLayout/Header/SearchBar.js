import styles from './Header.module.scss'
import { SearchIcon } from '../../components/IconBox';

function SearchBar() {
    return (
        <div className={styles['search-bar']}>
            <input className={styles['search-box']} type="text" placeholder="Search"></input>
            <SearchIcon />
        </div>);
}

export default SearchBar;