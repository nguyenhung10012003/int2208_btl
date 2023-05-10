import styles from './Profile.module.scss';
import React, { useState } from 'react';

function Detail() {

    const [isDivVisible, setIsDivVisible] = useState(false);
  
    const handleClick = () => {
      setIsDivVisible(!isDivVisible);
    };

    const handleClosed = () => {
        setIsDivVisible(false);
    }
    return (
        <div>
            <div className={styles['list-hidden_content']}>
                <div className={styles['list-hidden_content-header']}>
                    <h1>Chi tiết hồ sơ</h1>
                    <button onClick={handleClosed}>
                        <i className={`${styles.iconXmark} fa-sharp fa-solid fa-xmark`}></i>
                    </button>
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
    )
}

export default Detail;