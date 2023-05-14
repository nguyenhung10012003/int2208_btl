import styles from "./Search.module.scss"
import SongCard from '../../components/SongCard/SongCard';
import { useEffect, useState } from "react";
import { usePlayer } from "../../hooks/PlayerContext";
function DefaultSearch({ datas }) {

    const idDefaultSearch = 'default-search';

    const { setIdListTrack, setListTrack, setNowSong, setPlay } = usePlayer();
    const { idListTrack, nowSong, isPlay } = usePlayer();
    const [iconPause, setIconPause] = useState(false);

    const handlePlayAlbum = () => {
        if ((idListTrack !== idDefaultSearch) || nowSong === -1) {
            setListTrack(datas.items);
            setNowSong(0);
            setPlay(true);
            setIdListTrack(idDefaultSearch);
        } else if (idListTrack === idDefaultSearch) {
            if (!isPlay) {
                setPlay(true);
            } else {
                setPlay(false);
            }
        }
    }

    useEffect(() => {
        if (idListTrack === idDefaultSearch) {
            if (!isPlay) {
                setIconPause(false);
            } else {
                setIconPause(true);
            }
        }
    }, [isPlay, idListTrack]);

    return (
        <div>
            <div className={styles['search-banner']}>
                <img src={datas.banner} className={styles['search-banner-img']} />
            </div>
            <div className={styles['playAndPause-icon']} onClick={handlePlayAlbum}>
                {!iconPause && <i className="fa-solid fa-circle-play"></i>}
                {iconPause && <i className="fa-solid fa-circle-pause"></i>}
            </div>
            <div className={styles['header-content']}>
                <div className={styles['header-serial']}>
                    <span>#</span>
                </div>
                <div className={styles['header-title']}>
                    <span>Title</span>
                </div>
                <div className={styles['header-album']}>
                    <span>Album</span>
                </div>
                <div className={styles['header-duration']}>
                    <span>Duration</span>
                </div>
            </div>
            {datas.items?.map((item, index) => {
                var alb = {
                    id: index,
                    name: item.album ? item.album.title : item.title,
                }
                var ars = {
                    id: item.artists[0].id,
                    name: item.artists[0].name,
                    img: item.artists[0].thumbnailM
                }
                return (
                    <SongCard data={datas} key={index} index={index} id={item.encodeId} title={item.title} img={item.thumbnail} artist={ars} duration={item.duration} album={alb} />
                )
            })}
        </div>
    );
}

export default DefaultSearch;
