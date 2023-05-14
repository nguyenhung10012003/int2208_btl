import styles from './Profile.module.scss';
import ListMusic from "../components/ListMusic/ListMusic";
import playlistApi from '../../api/PlaylistApi';
import profileApi from '../../api/UserApi';
import {useAuth} from "../../hooks/AuthContext";
import Detail from "./Details";
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Profile() {
    
    const [isDivVisible, setIsDivVisible] = useState(false);
    const updateDataProfile = async () => {
        try {
          const response = await profileApi.getDataUser(getUser().email);
          setDataProfile(response);
        } catch (err) {
          console.log(err);
        }
      };
  
    const handleClick = () => {
      setIsDivVisible(!isDivVisible);
      updateDataProfile();
    };

    const params = useParams();
    const {getUser} = useAuth();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await playlistApi.getAllPlaylistByUser(getUser().email);
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
                const response = await profileApi.getDataUser(getUser().email);
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
                        <Detail onClick={handleClick}/>
                    </div>
                )}
                <span>{data.length} list</span>
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
                    <Detail onClick={handleClick}/>
                </div>
            )}

            <div className={styles['list-link']}>
                <a href=''>Playlist công khai</a>
                <Link to='/library' className={styles['content-link']}>hiển thị tất cả</Link>
            </div>

            <div className={styles['list-container']}>
                <ListMusic data={data}/>
            </div>
        </div>
    </div>
    );
}

export default Profile;