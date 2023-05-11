import styles from './Profile.module.scss';
import profileApi from '../../api/UserApi';
import {useAuth} from "../../hooks/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Detail(props) {
    const navigate = useNavigate();
    const {getUser} = useAuth();
    const [dataProfile, setDataProfile] = useState([]);
    const [confirmPass, setconfirmPass] = useState();
    const [checkPass, setCheckPass] = useState(false);
    const [isDivVisible, setIsDivVisible] = useState(false);


    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await profileApi.getDataUser(getUser().email);
                setDataProfile(response);
                setconfirmPass(response.password);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLibrary();
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();


        if(checkPass) {
        profileApi.editProfile(dataProfile._id, dataProfile);

        props.onClick(false);
        
        navigate(`/profile`);
        }
    }

    const handleChange = (event) => {
        if (event.target.name == 'confirmPassword')
            setconfirmPass(event.target.value);
        else
        setDataProfile({
          ...dataProfile,
          [event.target.name]: event.target.value,
        });
      };
    
  
    const handleClick = () => {
        props.onClick(false);
    };

    const checkPassword = () => {
        if(dataProfile.password == confirmPass && dataProfile.password.length > 6)
            setCheckPass(!checkPass);
        else if(!isDivVisible)
            setIsDivVisible(!isDivVisible);
    };

    return (
        <div>
            <div className={styles['list-hidden_content']}>
                <div className={styles['list-hidden_content-header']}>
                    <h1>Chi tiết hồ sơ</h1>
                    <button onClick={handleClick}>
                        <i className={`${styles.iconXmark} fa-sharp fa-solid fa-xmark`}></i>
                    </button>
                </div>

                <div className={styles['list-hidden_content-profile']}>
                    <img src={dataProfile.image} alt ="" className={styles['list-hidden_content-img']}></img>
                    <form onSubmit={handleSubmit} className={styles['list-hidden_content-form']}>
                        <label className={styles['list-hidden_content-label']}>Tên</label>
                        <input type={'text'} value={dataProfile.name} onChange={handleChange} name='name' className={styles['list-hidden_content-input']}></input>
                        <label className={styles['list-hidden_content-label']}>Mật khẩu</label>
                        <input type={'text'} value={dataProfile.password} onChange={handleChange} name='password' className={styles['list-hidden_content-input']}></input>
                        <label className={styles['list-hidden_content-label']}>Xác nhận mật khẩu</label>
                        <input type={'text'} value={confirmPass} onChange={handleChange} name='confirmPassword' className={styles['list-hidden_content-input']}></input>
                        {isDivVisible && (
                            <p>sai mk</p>
                        )}
                        <button type="submit" onClick={checkPassword} className={styles['list-hidden_content-button']}>Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Detail;