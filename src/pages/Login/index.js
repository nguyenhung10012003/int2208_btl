import styles from './Login.module.scss';

function Login() {
    return (
            <div className={styles['Login']}>
                <h1 className={styles['headingLogin']}>
                    OneMusic
                </h1>
                <div className={styles['buttons']}>
                    <button type='button' className={styles['btnLoginFacebook']}>
                        <i className={`${styles.iconLogin} fa-brands fa-facebook`}></i>
                        Đăng nhập bằng Facebook
                    </button>

                    <button type='button' className={styles['btnLoginGoogle']}>
                        <i className={`${styles.iconGoogleLogin} fa-brands fa-google`}></i>
                        Đăng nhập bằng Google
                    </button>
                </div>
                    <span className={styles['spanOr']}>
                    hoặc
                </span>
                <form className={styles['formGroup']}>
                    <div className={styles['formInput']}>
                        <span className={styles['headInput']}>Email của bạn là gì?</span>
                        <input type={'email'} className={styles['inputData']} placeholder='Nhập email của bạn.' required ></input>
                </div>
                <div className={styles['formInput']}>
                    <span className={styles['headInput']}>Nhập mật khẩu</span>
                    <input type={'password'} className={styles['inputData']} placeholder='Nhập mật khẩu.' required ></input>
                </div>
                <div className={styles['footerLogin']}>

                    <span className={styles['fogotPassword']}>Bạn đã quên mật khẩu?</span>

                    <button type='submit' className={styles['submitLogin']}>
                        Đăng nhập
                    </button>

                    <span className={styles['hasAccount']}>
                        Bạn chưa có tài khoản?
                        <a className={styles['hasAccountLink']} href='#'> Đăng ký</a>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login; 