import { Link, useParams } from 'react-router-dom';
import styles from './Album.module.scss'
import { useEffect, useState } from "react";
import albumApi from '../../api/AlbumApi';
import { usePlayer } from "../../hooks/PlayerContext";
import SongCard from "../../components/SongCard/SongCard"

function Album() {
    const data = {
        name: 'Album',
        img: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
        artistName: 'unknown',
        items: [],
    };
    const { setListTrack, setNowSong, setPlay } = usePlayer();
    const { isPlay } = usePlayer();

    const params = useParams();

    const [album, setData] = useState([]);
    // const [iconPause, setIconPause] = useState(false);

    const handlePlayAlbum = () => {
        if(!isPlay) {
            setPlay(true);
            setListTrack(data.items);
        } else {
            setPlay(false)
        }
    }

    // useEffect(() => {
    //     if(!isPlay) {
    //         setIconPause(false);
    //     } else {
    //         setIconPause(true);
    //     }
    // }, [isPlay])

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const response = await albumApi.getAlbum(params.albumId);
                setData({
                    name: response.data.title,
                    image: response.data.thumbnailM,
                    artists: response.data.artists,
                    artistsNames: response.data.artistsNames,
                    items: response.data.song.items,
                });

            } catch (err) {
                console.log(err);
            }
        };
        fetchTrack();
        setNowSong(0);
        setPlay(false);
    }, []);

    // changeData
    data.name = album.name;
    data.img = album.image;
    data.artistName = album.artistsNames;
    data.items = album.items === undefined ? data.items : album.items;

    return (
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
                <div className={styles['header__img']}>
                    <img src={data.img} alt='Img - album' width="232" height="232" />
                </div>
                <div className={styles['header__infor']}>
                    <div className={styles['infor__heading']}>
                        <span className={styles['text-album']}>Album</span>
                        <h2 className={styles['heading-text']}>{data.name}</h2>
                    </div>
                    <div className={styles['infor__description']}>
                        <span className={styles['artists']}>{data.artistName}</span>
                        <span className={styles['numberOfSong']}> . {data.items.length} songs</span>
                    </div>
                </div>
            </header>
            <div className={styles['content']}>
                <div className={styles['viewport']}>
                    <div className={styles['playAndPause-icon']} onClick={handlePlayAlbum}>
                        {!isPlay && <i className="fa-solid fa-circle-play"></i>}
                        {isPlay && <i className="fa-solid fa-circle-pause"></i>}
                    </div>
                </div>
                <div className={styles['content-spacing']}>
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
                        <div className={styles['header-addSong']}>
                        </div>
                    </div>
                    <div className={styles['content__list-song']}>
                        {
                            data.items?.map((item, index) => {
                                let title = item.title;
                                let id = item.encodeId;
                                let img = item.thumbnailM;
                                let artist = {
                                    id: item.artists?.[0].id,
                                    name: item.artists?.[0].name,
                                    alias: item.artists?.[0].alias,
                                    img: item.artists?.[0].thumbnailM
                                }
                                let duration = item.duration;
                                let album = {};
                                if (item.hasOwnProperty('album')) {
                                    album = {
                                        id: item.album.encodeId === undefined ? '' : item.album.encodeId,
                                        name: item.album.title,
                                    }
                                }
                                return (
                                    <SongCard data={data} key={index} index={index} id={id}
                                        title={title} img={img}
                                        artist={artist} duration={duration}
                                        album={album}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Album;