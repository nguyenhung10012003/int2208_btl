import styles from './SignUp.module.scss';
import SideSignup from "./SideSignup";
import FormSignup from "./FormSignup";

function SignUp() {
    return (
        // <div className={styles['WrapSignUp']}>
            <div className={styles['SignUp']}>
                <SideSignup/>
                <span className={styles['spanOr']}>hoặc</span>
                <FormSignup/>
            </div>
        // </div>
    );
}

export default SignUp; 