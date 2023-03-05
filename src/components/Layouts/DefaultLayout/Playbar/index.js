import ControlLeft from './ControlLeft';
import ControlRight from './ControlRight';
import styles from './Playbar.module.scss'
import Player from './Player';

function Playbar({ chilldren }) {
    return (
        <div className={styles['wrapper']}>
            <ControlLeft> {chilldren} </ControlLeft>
            <Player />
            <ControlRight />
        </div>
    );
}

export default Playbar;