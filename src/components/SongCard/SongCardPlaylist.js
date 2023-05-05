import styles from './SongCardPlaylist.module.scss';
// import styles from '../../pages/Playlist/Playlist.module.scss';
import DeleteSong from '../EditPlaylist/DeleteSong';
import { Link } from "react-router-dom";
import { useState } from 'react';

function SongCardPlaylist({ index, id, title, img, artist, duration, album, idPlaylist, tracks }) {

    const [isPlaying, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(!isPlaying);
    }

    return (
        <div key={index} className={styles['wrapper']}>
            <div className={styles['serial']}>
                <span className={styles['serial-index']}>{index + 1}</span>
                <button className={styles['btn-play-music']} onClick={handlePlay}>
                    {!isPlaying && <i className="fa-solid fa-play"></i>}
                    {isPlaying && <i className="fa-solid fa-pause"></i>}
                </button>
            </div>
            <div className={styles['title']}>
                <div className={styles['image-song']}>
                    <img src={img} alt='i' />
                </div>
                <div className={styles['des-title']}>
                    <Link to={{
                        pathname: `/infor-song/${id}`
                    }} className={styles['infor-song']}>{title}</Link>
                    <Link to={{
                        pathname: "/profile-artist"
                    }} className={styles['profile-artist']}>{artist.name}</Link>
                </div>
            </div>
            <div className={styles['album']}>
                <Link to={`/album/${album?.id}`} className={styles['album-link']}>
                    {album?.name}
                </Link>
            </div>
            <div className={styles['duration']}>
                <span>{Math.floor(duration / 60)} phút {Math.floor(duration % 60)} giây</span>
            </div>
            <div className={styles['delete']}>
                <DeleteSong index={index} id={idPlaylist} tracks={tracks} />
            </div>
        </div>
    )
}

export default SongCardPlaylist;
