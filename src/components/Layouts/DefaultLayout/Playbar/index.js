import ControlLeft from './ControlLeft';
import ControlRight from './ControlRight';
import styles from './Playbar.module.scss'
import Player from './Player';
import { usePlayer } from "../../../../hooks/PlayerContext";
import { useEffect, useState } from "react";
import SongApi from "../../../../api/SongApi";

function Playbar() {

    const { listTrack, nowSong, setNowSong, isShuffle } = usePlayer();
    const [src, setSrc] = useState();
    useEffect(() => {
        //update when change current song
        const fetchSong = async () => {
            try {
                const track = await SongApi.getTrack(listTrack[nowSong]?.encodeId);
                setSrc(track.data['128']);
            } catch (err) {
                console.log(err);
            }
        }
        fetchSong();
    }, [nowSong, listTrack]);

    return (
        <div className={styles['wrapper']}>
            <ControlLeft title={listTrack[nowSong]?.title || ''}
                artistNames={listTrack[nowSong]?.artistsNames || ''}
                thumbnail={listTrack[nowSong]?.thumbnail || ''}
            />
            <Player src={src} duration={listTrack[nowSong]?.duration} />
            <ControlRight songId={listTrack[nowSong]?.encodeId} />
        </div>
    );
}

export default Playbar;