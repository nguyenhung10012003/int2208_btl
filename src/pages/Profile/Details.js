import styles from './Profile.module.scss';
import profileApi from '../../api/UserApi';
import {useAuth} from "../../hooks/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Detail({check}) {
    const navigate = useNavigate();
    const {getUser} = useAuth();
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

    const handleSubmit = (event) => {
        event.preventDefault();

        profileApi.changeName(dataProfile._id, dataProfile);

        check.onClick(false);

        navigate(`/profile`);
    }

    const handleChange = (event) => {
        setDataProfile({
          ...dataProfile,
          [event.target.name]: event.target.value,
          [event.target.password]: event.target.value,
        });
      };
    
  
    const handleClick = () => {
        check.onClick(false);
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
                    <form onSubmit={handleSubmit} className={styles['list-hidden_content-form']}>
                        <label className={styles['list-hidden_content-label']}>Tên</label>
                        <input type="text" value={dataProfile.name} onChange={handleChange} name='name' className={styles['list-hidden_content-input']}></input>
                        <label className={styles['list-hidden_content-label']}>Mật khẩu</label>
                        <input type="password" value={dataProfile.password} onChange={handleChange} name='password' className={styles['list-hidden_content-input']}></input>
                        <button type="submit" className={styles['list-hidden_content-button']}>Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Detail;