import ControlLeft from './ControlLeft';
import ControlRight from './ControlRight';
import styles from './Playbar.module.scss'
import Player from './Player';
import {usePlayer} from "../../../../hooks/PlayerContext";
import {useEffect, useState} from "react";
import SongApi from "../../../../api/SongApi";

function Playbar() {

    const {listTrack, nowSong, setNowSong} = usePlayer();
    const [src, setSrc] = useState('');
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        if (listTrack.length > 0) setShow(true);
        else setShow(false);
    }, [listTrack.length]);

    useEffect(() => {
        //update when change current song
        const fetchSong = async () => {
            try {
                const track = await SongApi.getTrack(listTrack[nowSong].encodeId);
                setSrc(track.data['128']);
            } catch (err) {
                console.log(err);
            }
        }
        fetchSong();
    }, [nowSong, listTrack]);

    const nextSong = (isShuffle = false) => {
        if (isShuffle) {
            setNowSong(Math.round(Math.random() * (listTrack.length - 1)));
        } else {
            if (nowSong + 1 < listTrack.length) {
                setNowSong((prevSong) => prevSong + 1);
            } else {
                setNowSong(0);
            }
        }
    }

    const prevSong = () => {
        if (nowSong > 0) {
            setNowSong((prevSong) => prevSong - 1);
        } else {
            setNowSong(listTrack.length - 1);
        }
    }

    return (
        <>
            {show && <div className={styles['wrapper']}>
                <ControlLeft title={listTrack[nowSong].title || ''}
                             artistNames={listTrack[nowSong].artistsNames || ''}
                             thumbnail={listTrack[nowSong].thumbnail || ''}
                />
                <Player src={src} duration={listTrack[nowSong].duration}
                        nextSong={nextSong}
                        prevSong={prevSong}
                />
                <ControlRight songId={listTrack[nowSong].encodeId}/>
            </div>}
        </>
    );
}

export default Playbar;