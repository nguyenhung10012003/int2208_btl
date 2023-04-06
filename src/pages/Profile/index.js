import styles from './Profile.module.scss';
import ListMusic from "./ListMusic";
import React, { useState } from 'react';


function Profile() {
    const [isDivVisible, setIsDivVisible] = useState(false);
  
    const handleClick = () => {
      setIsDivVisible(!isDivVisible);
    };

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

        <div className={styles['list']}>
            <i className={`${styles.iconDots} fa-solid fa-ellipsis`}></i>
            <ul className={styles['list-select']}>
                <li onClick={handleClick} className={styles['list-select_1']}>Chỉnh sửa hồ sơ</li>
                <li className={styles['list-select_2']}>Sao chép liên kết</li>
            </ul>
            {isDivVisible && (
                <div>
                    <div onClick={handleClick} className={styles['list-hidden_background']}></div>
                    <div className={styles['list-hidden_content']}>
                        <div className={styles['list-hidden_content-header']}>
                            <h1>Chi tiết hồ sơ</h1>
                            <i onClick={handleClick} className={`${styles.iconXmark} fa-sharp fa-solid fa-xmark`}></i>
                        </div>

                        <div className={styles['list-hidden_content-profile']}>
                            <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg" alt ="" className={styles['list-hidden_content-img']}></img>
                            <div className={styles['list-hidden_content-form']}>
                                <input type="text" placeholder="Thêm tên hiển thị"  className={styles['list-hidden_content-input']}></input>
                                <button type="button" className={styles['list-hidden_content-button']}>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
    </div>
    );
}

export default Profile;