import styles from './Profile.module.scss';
import ListMusic from "../components/ListMusic/ListMusic";
import Detail from "./Details";
import React, { useState } from 'react';


function Profile() {
    
    const [isDivVisible, setIsDivVisible] = useState(false);
  
    const handleClick = () => {
      setIsDivVisible(!isDivVisible);
    };

    const dataProfile = {
        name: 'Name',
        cnt : '1',
        img :'https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg',
    }
    
    const data = {
        title: 'My playlist',
        img: 'holder.js/100px160',
        listSong: [
            {name: 'Song 1', img: 'holder.js/100px160' , singer: 'Singer1', album: 'album1', duration: '3:46'},
            {name: 'Song 2', img: 'holder.js/100px160' , singer: 'Singer2', album: 'album1', duration: '3:41'}

        ]
    };

    return (
    <div className={styles['profile']}>
        <div className={styles['header']}>
            <div className={styles['header-img']}>
                <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong-600x600.jpg" alt ="" className={styles['header-img_round']}></img>
            </div>

            <div className={styles['header-name']}>
                <span>Hồ sơ</span>
                <h1 onClick={handleClick} className={styles['header-name_main']}>Name</h1>
                {isDivVisible && (
                    <div>
                        <div onClick={handleClick} className={styles['list-hidden_background']}></div>
                        <Detail/>
                    </div>
                )}
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
                    <Detail />
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