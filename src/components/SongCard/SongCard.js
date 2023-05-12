import styles from './SongCard.module.scss';
import { Link } from "react-router-dom";
import AddSongInCard from '../AddSong/AddSongInCard';
import LikeSong from '../LikeSong/LikeSong';
import { useEffect, useState } from 'react';
import { usePlayer } from "../../hooks/PlayerContext";

function SongCard({ data, index, id, title, img, artist, duration, album }) {

    const {setIdListTrack, setNowSong, setPlay, setListTrack } = usePlayer();
    const {idListTrack, nowSong, isPlay } = usePlayer();

    const dataSubmit = {
        id: id,
        name: title,
        img: img,
        artistsNames: data?.artistsNames,
        duration: duration,
        artist: artist,
        album: album,
    }

    const [iconPause, setIconPause] = useState(false);

    useEffect(() => {
        const playSong = () => {
            if (!isPlay) {
                setIconPause(false);
            }
            if (nowSong === index && isPlay && idListTrack === data.id) {
                setIconPause(true);
            }
            if (nowSong !== index) {
                setIconPause(false);
            }
        }
        playSong();
    }, [nowSong, isPlay]);

    const handlePlaySong = () => {
        if (idListTrack !== data.id) {
            setListTrack(data.items);
            setNowSong(index);
            setIdListTrack(data.id);
            setPlay(true);
            setIconPause(true);
        } else {
            if (!iconPause) {
                setNowSong(index);
                setPlay(true);
                setIconPause(true);
            } else {
                setPlay(false);
                setIconPause(false);
            }
        }
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['serial']}>
                <span className={styles['serial-index']}>{index + 1}</span>
                <button className={styles['btn-play-music']} onClick={handlePlaySong}>
                    {!iconPause && <i className="fa-solid fa-play"></i>}
                    {iconPause && <i className="fa-solid fa-pause"></i>}
                </button>
            </div>
            <div className={styles['title']}>
                <div className={styles['image-song']}>
                    <img src={img} alt='' />
                </div>
                <div className={styles['des-title']}>
                    <Link to={{
                        pathname: `/infor-song/${id}`
                    }} className={styles['infor-song']}>{title}</Link>
                    <Link to={{
                        pathname: `/artist/${artist?.alias}`
                    }} className={styles['profile-artist']}>{artist?.name}</Link>
                </div>
            </div>
            <div className={styles['album']}>
                <Link to={`/album/${album?.id}`} className={styles['album-link']}>
                    {album?.name}
                </Link>
            </div>
            <div className={styles['like-song']}>
                <div className={styles['form-like-song']}>
                    <LikeSong data={dataSubmit} />
                </div>
            </div>
            <div className={styles['duration']}>
                <span> {Math.floor(duration / 60)}:{Math.floor(duration % 60)}</span>
            </div>
            <div className={styles['add-song']}>
                <div className={styles['wrapper-form-add-song']}>
                    <AddSongInCard data={dataSubmit} />
                </div>
            </div>
        </div>
    )
}

export default SongCard;