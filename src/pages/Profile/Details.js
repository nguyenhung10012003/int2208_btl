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
    const [dataIMG, setdataIMG] = useState();
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
    
    const handleChangeImage = async (event) => {
        const input = event.target;

        const file2 = await resizeImage(input.files[0], 160, 160);

        const base64 = await convertToBase64(file2);

        if (input.files && input.files[0]) {
            setDataProfile({ ...dataProfile, image: base64 });
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
                    <div>
                        <img src={dataProfile.image} alt ="" className={styles['list-hidden_content-img']}></img>
                        <input type="file" accept=".jpeg, .png, .jpg" onChange={handleChangeImage} className={styles['profile-input-image']}></input>
                    </div>
                    <form onSubmit={handleSubmit} className={styles['list-hidden_content-form']}>
                        <div className={styles['list-hidden_content-data']}>
                            <label className={styles['list-hidden_content-label']}>Tên</label>
                            <input type={'text'} value={dataProfile.name} onChange={handleChange} name='name' className={styles['list-hidden_content-input']}></input>
                            <label className={styles['list-hidden_content-label']}>Mật khẩu</label>
                            <input type={'text'} value={dataProfile.password} onChange={handleChange} name='password' className={styles['list-hidden_content-input']}></input>
                            <label className={styles['list-hidden_content-label']}>Xác nhận mật khẩu</label>
                            <input type={'text'} value={confirmPass} onChange={handleChange} name='confirmPassword' className={styles['list-hidden_content-input']}></input>
                            {isDivVisible && (
                                <p className={styles['list-hidden_content-checkPass']}>sai mk</p>
                            )}
                        </div>
                    <button type="submit" onClick={checkPassword} className={styles['list-hidden_content-button']}>Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Detail;

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

function resizeImage(file, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            let width = img.width;
            let height = img.height;

            // Tính toán kích thước mới của hình ảnh
            if (width > maxWidth) {
                height *= maxWidth / width;
                width = maxWidth;
            }
            if (height > maxHeight) {
                width *= maxHeight / height;
                height = maxHeight;
            }

            // Thiết lập kích thước của canvas
            canvas.width = width;
            canvas.height = height;

            // Vẽ hình ảnh mới lên canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Chuyển canvas thành file và resolve
            canvas.toBlob((blob) => {
                resolve(blob);
            }, file.type || 'image/jpeg');
        };
        img.onerror = (error) => {
            reject(error);
        };
    });
}