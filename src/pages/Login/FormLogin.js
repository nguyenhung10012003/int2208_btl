import styles from "./Login.module.scss";
const url = 'http://localhost:3001/login';
function FormLogin() {
    return (
        <form className={styles['formGroup']}>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Email của bạn là gì?</span>
                <input type={'email'} name={'email'} className={styles['inputData']} placeholder='Nhập email của bạn.'
                       required></input>
            </div>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Nhập mật khẩu</span>
                <input type={'password'} name={'password'} className={styles['inputData']} placeholder='Nhập mật khẩu.' required></input>
            </div>
            <div className={styles['footerLogin']}>
                <span className={styles['fogotPassword']}>Bạn đã quên mật khẩu?</span>
                <button type='submit' formAction={url} formMethod={'post'} className={styles['submitLogin']}>
                    Đăng nhập
                </button>
                <span className={styles['hasAccount']}>
                        Bạn chưa có tài khoản?
                        <a className={styles['hasAccountLink']} href='#'> Đăng ký</a>
                </span>
            </div>
        </form>
    )
}

export default FormLogin;