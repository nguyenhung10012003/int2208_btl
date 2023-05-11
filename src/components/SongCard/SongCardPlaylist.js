import styles from './SongCardPlaylist.module.scss';
// import styles from '../../pages/Playlist/Playlist.module.scss';
import DeleteSong from '../EditPlaylist/DeleteSong';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { usePlayer } from "../../hooks/PlayerContext";

function SongCardPlaylist({data, index, id, title, img, artist, duration, album, idPlaylist, tracks }) {

    const {setNowSong, setPlay, setListTrack} = usePlayer();
    const {nowSong, isPlay } = usePlayer();

    const [isPlaying, setPlaying] = useState(false);
    const [iconPause, setIconPause] = useState(false);

    useEffect(() => {
        const playSong = () => {
            if(!isPlay) {
                setIconPause(false);
            }
            if(nowSong === index && isPlay) {
                setIconPause(true);
            }
            if(nowSong !== index){
                setIconPause(false);
            }
        }
        playSong();
    }, [nowSong, isPlay]);

    const handlePlaySong = () => {
        if(!isPlay) {
            setListTrack(data.tracks);
            setNowSong(index);
            setPlay(true);
            setIconPause(true);
        } else {
            if(!iconPause) {
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
        <div key={index} className={styles['wrapper']}>
            <div className={styles['serial']}>
                <span className={styles['serial-index']}>{index + 1}</span>
                <button className={styles['btn-play-music']} onClick={handlePlaySong}>
                    {!iconPause && <i className="fa-solid fa-play"></i>}
                    {iconPause && <i className="fa-solid fa-pause"></i>}
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
                        pathname: `/artist/${artist?.alias}`
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
