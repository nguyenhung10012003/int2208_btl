import styles from './Playbar.module.scss';
import { RandomIcon, PreviousIcon, PlayIcon, NextIcon, LoopIcon } from '../../components/IconBox';

function Player() {
    return (
        <div className={styles['player']}>
            <div className={styles['controler']}>
                <RandomIcon />
                <PreviousIcon />
                <PlayIcon />
                <NextIcon />
                <LoopIcon />
            </div>
            <div className={styles['time-bar']}>

            </div>
        </div>
    );
}

export default Player;