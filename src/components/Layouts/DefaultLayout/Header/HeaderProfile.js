import styles from './Header.module.scss'
import { SettingIcon, ProfileIcon } from '../../components/IconBox';

function HeaderProfile() {
    return (
        <div className={styles['header-profile']}>
            <button className={styles['btn-vip']}><span>Upgrade Premium</span></button>
            <SettingIcon />
            <ProfileIcon />
        </div>
    );
}

export default HeaderProfile;