import styles from './Profile.module.scss';
import profileApi from '../../api/UserApi';
import React, { useState, useEffect } from 'react';

function Detail() {
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

    const [isDivVisible, setIsDivVisible] = useState(false);
  
    const handleClick = () => {
      setIsDivVisible(!isDivVisible);
    };
    return (
        <div>
            <div className={styles['list-hidden_content']}>
                <div className={styles['list-hidden_content-header']}>
                    <h1>Chi tiết hồ sơ</h1>
                    <i onClick={handleClick} className={`${styles.iconXmark} fa-sharp fa-solid fa-xmark`}></i>
                </div>

                <div className={styles['list-hidden_content-profile']}>
                    <img src={dataProfile.image} alt ="" className={styles['list-hidden_content-img']}></img>
                    <form className={styles['list-hidden_content-form']}>
                        <input type="text" placeholder={dataProfile.name} className={styles['list-hidden_content-input']}></input>
                        <button type="submit" className={styles['list-hidden_content-button']}>Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Detail;