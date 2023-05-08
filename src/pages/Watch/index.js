import styles from './Watch.module.scss';
import {usePlayer} from "../../hooks/PlayerContext";
import Board from "../../components/Board/Board";
import {Navigate} from "react-router-dom";

function Watch() {
    const {listTrack, nowSong} = usePlayer();


    return (
        <>
            {listTrack.length > 0 ? <div className={styles['wrapper']}>
            <div className={styles['image-wrapper']}>
                <img src={listTrack[nowSong].thumbnailM} alt={''} className={styles['thumb']}/>
            </div>
            <div className={styles['board']}>
                <Board/>
            </div>
        </div> : <Navigate to={'/'}/>}
        </>
    )
}

export default Watch;