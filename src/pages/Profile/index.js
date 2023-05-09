import styles from './Profile.module.scss';
import ListMusic from "../components/ListMusic/ListMusic";
import playlistApi from '../../api/PlaylistApi';
import profileApi from '../../api/UserApi';
import Detail from "./Details";
import React, { useState, useEffect } from 'react';


function Profile() {
    
    const [isDivVisible, setIsDivVisible] = useState(false);
  
    const handleClick = () => {
      setIsDivVisible(!isDivVisible);
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await playlistApi.getAllPlaylistByUser();
                setData(response);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLibrary();
    }, [])

    const [dataProfile, setDataProfile] = useState([]);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await profileApi.getDataUser('21020342@vnu.edu.vn');
                setDataProfile(response);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLibrary();
    }, [])


    return (
    <div className={styles['profile']}>
        <div className={styles['header']}>
            <div className={styles['header-img']}>
                <img src={dataProfile.image} alt ="" className={styles['header-img_round']}></img>
            </div>

            <div className={styles['header-name']}>
                <span>Hồ sơ</span>
                <h1 onClick={handleClick} className={styles['header-name_main']}>{dataProfile.name}</h1>
                {isDivVisible && (
                    <div>
                        <div onClick={handleClick} className={styles['list-hidden_background']}></div>
                        <Detail/>
                    </div>
                )}
                <span>{data.length} ist</span>
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
                    <Detail data={dataProfile}/>
                </div>
            )}

            <div className={styles['list-link']}>
                <a href=''>Playlist công khai</a>
                <a href=''>hiển thị tất cả</a>
            </div>

            <div className={styles['list-container']}>
                <ListMusic data={data}/>
            </div>
        </div>
    </div>
    );
}

export default Profile;