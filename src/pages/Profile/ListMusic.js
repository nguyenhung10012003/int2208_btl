import styles from './ListMusic.module.scss';

function ListMusic() {
    return (
        <div className={styles['list-content']}>
            <div className={styles['list-content_img']}>
                <img src=''></img>
                <i className={`${styles.iconPlay} fa-sharp fa-solid fa-circle-play`}></i>
            </div>
            <h3 className={styles['list-content_text']}>danh sách cần hiển thị</h3>
        </div>
    )
}
export default ListMusic;