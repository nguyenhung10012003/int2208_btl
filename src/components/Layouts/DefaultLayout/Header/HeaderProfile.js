import styles from './Header.module.scss'
import { SettingIcon, ProfileIcon } from '../../components/IconBox';

function HeaderProfile() {
    return (
        <div className={styles['header-profile']}>
            <SettingIcon />
            <ProfileIcon />
        </div>
    );
}

export default HeaderProfile;