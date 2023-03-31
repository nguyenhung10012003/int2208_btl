import styles from './Login.module.scss';
import SideLogin from "./SideLogin";
import FormLogin from "./FormLogin";

function Login() {
    return (
            <div className={styles['Login']}>
                <h1 className={styles['headingLogin']}>OneMusic</h1>
                <SideLogin/>
                <span className={styles['spanOr']}>hoặc</span>
                <FormLogin/>
        </div>
    );
}

export default Login; 