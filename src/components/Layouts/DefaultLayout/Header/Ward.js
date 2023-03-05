import { NextPageIcon, PrevPageIcon } from "../../components/IconBox";
import styles from './Header.module.scss';

function Ward() {
    return (
        <div className={styles['ward']}>
            <PrevPageIcon />
            <NextPageIcon />
        </div>
    );
}

export default Ward;