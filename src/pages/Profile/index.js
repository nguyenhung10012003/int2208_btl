import styles from './Profile.module.scss';
import ListMusic from "./ListMusic";

function Profile() {
    return (
    <div className={styles['profile']}>
        <div className={styles['header']}>
            <div className={styles['header-img']}>
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg" alt ="" className={styles['header-img_round']}></img>
            </div>

            <div className={styles['header-name']}>
                <span>Hồ sơ</span>
                <h1>Name</h1>
                <span>list</span>
            </div>
        </div>

        <i className={`${styles.iconDots} fa-solid fa-ellipsis`}></i>

        <div className={styles['list-link']}>
            <a href=''>Playlist công khai</a>
            <a href=''>hiển thị tất cả</a>
        </div>

        <div className={styles['list-container']}>
            <ListMusic/>
            <ListMusic/>
            <ListMusic/>
            <ListMusic/>
            <ListMusic/>
        </div>
    </div>
    );
}

export default Profile;