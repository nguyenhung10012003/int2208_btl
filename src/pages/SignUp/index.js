import './SignUp.pages.css';

function SignUp() {
    return (
        <div className='WrapSignUp'>
            <div className='SignUp'>
                <h1 className='headingSignUp'>
                    OneMusic
                </h1>
                <div className='buttons'>
                    <button type='button' className='btnSignUpFacebook'>
                        <i class="iconSignUp fa-brands fa-facebook"></i>
                        Đăng ký bằng Facebook
                    </button>

                    <button type='button' className='btnSignUpGoogle '>
                        <i class="iconGoogleSignUp fa-brands fa-google"></i>
                        Đăng ký bằng Google
                    </button>
                </div>
                <span className='spanOr'>
                    hoặc
                </span>
                <div className='formGroup'>
                    <div className='formInput'>
                        <span className='headInput'>Email của bạn là gì?</span>
                        <input type={'email'} className='inputData' placeholder='Nhập email của bạn.' required ></input>
                    </div>
                    <div className='formInput'>
                        <span className='headInput'>Xác nhận lại email</span>
                        <input type={'email'} className='inputData' placeholder='Nhập lại email của bạn.' required ></input>
                    </div>
                    <div className='formInput'>
                        <span className='headInput'>Tạo mật khẩu</span>
                        <input type={'password'} className='inputData' placeholder='Tạo mật khẩu.' required ></input>
                    </div>
                    <div className='formInput'>
                        <span className='headInput'>Xác nhận lại mật khẩu</span>
                        <input type={'password'} className='inputData' placeholder='Nhập lại mật khẩu.' required ></input>
                    </div>
                    <div className='formInput'>
                        <span className='headInput'>Họ tên của bạn</span>
                        <input type={'text'} className='inputData' placeholder='Nhập họ tên của bạn .' required ></input>
                    </div>
                    <div className='inputGender'>
                        <span className='headInputGender'>Giới tính của bạn:</span>
                        <div class="radioInputGender">
                            <input id="radioInput" name="radio" type="radio" checked></input>
                            <label for="radioInput" class="radio-label">Nam</label>
                        </div>
                        <div class="radioInputGender">
                            <input id="radioInput" name="radio" type="radio" checked></input>
                            <label for="radioInput" class="radio-label">Nữ</label>
                        </div>
                        <div class="radioInputGender">
                            <input id="radioInput" name="radio" type="radio" checked></input>
                            <label for="radioInput" class="radio-label">Khác</label>
                        </div>
                    </div>
                    <div className='footerSignUp'>
                        <span className='rulesSignUp'>
                            Bằng việc nhấp vào nút Đăng ký, bạn đồng ý với
                            <a href='#' className='rulesSignUpLink'> Điều khoản và điều kiện sử dụng </a>
                            của OneMusic.
                        </span>

                        <span className='rulesSignUp'>
                            Để tìm hiểu thêm về cách thức OneMusic thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân của bạn, vui lòng xem
                            <a href='#' className='rulesSignUpLink'> Chính sách quyền riêng tư của OneMusic.</a>
                        </span>

                        <button type='submit' className='submitSignUp'>
                            Đăng ký
                        </button>

                        <span className='hasAccount'>
                            Bạn có tài khoản?
                            <a className='hasAccountLink' href='#'> Đăng nhập</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp; 