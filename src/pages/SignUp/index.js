import styles from './SignUp.module.scss';


const root = document.getElementById('root');
root.style.display = 'block';

function SignUp() {
    return (
        // <div className={styles['WrapSignUp']}>
            <div className={styles['SignUp']}>
                <h1 className={styles['headingSignUp']}>
                    OneMusic
                </h1>
                <div className={styles['buttons']}>
                    <button type='button' className={styles['btnSignUpFacebook']}>
                        <i className={`${styles.iconFacebookSignUp} fa-brands fa-facebook`}></i>
                        Đăng ký bằng Facebook
                    </button>

                    <button type='button' className={styles['btnSignUpGoogle']}>
                        <i className={`${styles.iconGoogleSignUp} fa-brands fa-google`}></i>
                        Đăng ký bằng Google
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
                            <span className={styles['headInput']}>Xác nhận lại email</span>
                            <input type={'email'} className={styles['inputData']} placeholder='Nhập lại email của bạn.' required ></input>
                    </div>
                    <div className={styles['formInput']}>
                        <span className={styles['headInput']}>Tạo mật khẩu</span>
                        <input type={'password'} className={styles['inputData']} placeholder='Tạo mật khẩu.' required ></input>
                    </div>
                    <div className={styles['formInput']}>
                        <span className={styles['headInput']}>Xác nhận lại mật khẩu</span>
                        <input type={'password'} className={styles['inputData']} placeholder='Nhập lại mật khẩu.' required ></input>
                    </div>
                    <div className={styles['formInput']}>
                        <span className={styles['headInput']}>Họ tên của bạn</span>
                        <input type={'text'} className={styles['inputData']} placeholder='Nhập họ tên của bạn .' required ></input>
                    </div>
                    <div className={styles['inputGender']}>
                        <span className={styles['headInputGender']}>Giới tính của bạn:</span>
                        <div className={styles["radioInputGender"]}>
                            <input className={styles.radioInput} id="radioInputMale" name="radio" type="radio"></input>
                            <label className={styles["radio-label"]}>Nam</label>
                        </div>
                        <div className={styles["radioInputGender"]}>
                            <input className={styles.radioInput} id="radioInputFemale" name="radio" type="radio"></input>
                            <label className={styles["radio-label"]}>Nữ</label>
                        </div>
                        <div className={styles["radioInputGender"]}>
                            <input className={styles.radioInput} id="radioInputDiff" name="radio" type="radio"></input>
                            <label className={styles["radio-label"]}>Khác</label>
                        </div>
                    </div>
                    <div className={styles['footerSignUp']}>
                        <span className={styles['rulesSignUp']}>
                            Bằng việc nhấp vào nút Đăng ký, bạn đồng ý với
                            <a href='#' className={styles['rulesSignUpLink']}> Điều khoản và điều kiện sử dụng </a>
                            của OneMusic.
                        </span>

                        <span className={styles['rulesSignUp']}>
                            Để tìm hiểu thêm về cách thức OneMusic thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân của bạn, vui lòng xem
                            <a href='#' className={styles['rulesSignUpLink']}> Chính sách quyền riêng tư của OneMusic.</a>
                        </span>

                        <button type='submit' className={styles['submitSignUp']}>
                            Đăng ký
                        </button>

                        <span className={styles['hasAccount']}>
                            Bạn có tài khoản?
                            <a className={styles['hasAccountLink']} href='#'> Đăng nhập</a>
                        </span>
                    </div>
                </form>
            </div>
        // </div>
    );
}

export default SignUp; 