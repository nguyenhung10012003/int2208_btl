import styles from './Header.module.scss'

function SearchBar() {
    return (
        <div className={styles['search-bar']}>
            <input className={styles['search-box']} type="text" placeholder="Search"></input>
        </div>);
}

export default SearchBar;