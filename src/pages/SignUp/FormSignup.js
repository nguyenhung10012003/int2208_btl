import styles from "./SignUp.module.scss";
import axios from "axios";

function FormSignup() {
    const urlSignup = 'http://localhost:3001/sign-up';

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        axios.post(urlSignup, formData)
            .then((res) => {
                // Xử lý phản hồi từ server ở đây

            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <form className={styles['formGroup']}>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Email của bạn là gì?</span>
                <input type={'email'} name='email' className={styles['inputData']} placeholder='Nhập email của bạn.'
                       required></input>
            </div>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Tạo mật khẩu</span>
                <input type={'password'} name='password' className={styles['inputData']} placeholder='Tạo mật khẩu.'
                       required></input>
            </div>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Xác nhận lại mật khẩu</span>
                <input type={'password'} className={styles['inputData']} placeholder='Nhập lại mật khẩu.'
                       required></input>
            </div>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Họ tên của bạn</span>
                <input type={'text'} name='name' className={styles['inputData']} placeholder='Nhập họ tên của bạn .'
                       required></input>
            </div>
            <div className={styles['inputGender']}>
                <span className={styles['headInputGender']}>Giới tính của bạn:</span>
                <div className={styles["radioInputGender"]}>
                    <input className={styles.radioInput} id="radioInputMale" name='gender' type="radio"
                           value="male"></input>
                    <label className={styles["radio-label"]}>Nam</label>
                </div>
                <div className={styles["radioInputGender"]}>
                    <input className={styles.radioInput} id="radioInputFemale" name='gender' type="radio"
                           value="female"></input>
                    <label className={styles["radio-label"]}>Nữ</label>
                </div>
                <div className={styles["radioInputGender"]}>
                    <input className={styles.radioInput} id="radioInputDiff" name='gender' type="radio"
                           value="other"></input>
                    <label className={styles["radio-label"]}>Khác</label>
                </div>
            </div>

            <button type='submit' className={styles['submitSignUp']} formAction={urlSignup} formMethod={'post'}
                    onSubmit={handleSubmit}>Đăng ký
            </button>
            <span className={styles['hasAccount']}>
                            {`Bạn có tài khoản? `}
                <a className={styles['hasAccountLink']} href='#'>Đăng nhập</a>
                    </span>

        </form>
    )
}

export default FormSignup;