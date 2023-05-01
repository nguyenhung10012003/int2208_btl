import styles from './Playbar.module.scss';
import {Link} from "react-router-dom";

function ControlLeft({ title, artistNames, thumbnail }) {
    return (
        <div className={styles['control-left']}>
            <img src={thumbnail} alt={''} height={50} width={50}/>
            <div className={styles['control-left-text']}>
                <Link to={'#'} className={styles['song-title']}>{title}</Link>
                {artistNames}
            </div>
        </div>
    );
}

export default ControlLeft;