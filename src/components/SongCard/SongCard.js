import styles from './SongCard.module.scss';
import { Link } from "react-router-dom";
import AddSongInCard from '../AddSong/AddSongInCard';
import { useState } from 'react';

function SongCard({index, id, title, img, artist, duration, album }) {

    const dataSubmit = {
        id: id,
        name: title,
        img: img,
        duration: duration,
        artist: artist,
        album: album,
    }

    const [isPlaying, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(!isPlaying);
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['serial']}>
                <span className={styles['serial-index']}>{index + 1}</span>
                <button className={styles['btn-play-music']} onClick={handlePlay}>
                    {!isPlaying && <i className="fa-solid fa-play"></i>}
                    {isPlaying && <i className="fa-solid fa-pause"></i>}
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
                    }} className={styles['profile-artist']}>{artist.name}</Link>
                </div>
            </div>
            <div className={styles['album']}>
                <span>{album.name}</span>
            </div>
            <div className={styles['duration']}>
                <span> {Math.floor(duration / 60)} phút {Math.floor(duration % 60)} giây </span>
            </div>
            <div className={styles['add-song']}>
                <div className={styles['wrapper-form-add-song']}>
                    <AddSongInCard data={dataSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default SongCard;