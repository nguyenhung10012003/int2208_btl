import { Link, useParams } from 'react-router-dom';
import styles from './Playlist.module.scss'
import SongCardPlaylist from '../../components/SongCard/SongCardPlaylist';
import playlistApi from '../../api/PlaylistApi';
import DeletePlaylist from '../../components/EditPlaylist/DeletePlaylist';
import EditDetails from '../../components/EditPlaylist/EditDetails';
import { useState, useEffect } from 'react';
import { usePlayer } from "../../hooks/PlayerContext";


function Playlist() {
    const data = {
        user_id: 'user',
        id: '',
        name: 'My playlist',
        image: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
        description: '',
        tracks: [],
    };

    const params = useParams();
    const [isDisEdit, setIsDisEdit] = useState(false);
    const [isDisDelete, setIsDisDelete] = useState(false);
    const [isDisMenu, setIsDisMenu] = useState(false);

    const { setIdListTrack, setListTrack, setNowSong, setPlay } = usePlayer();
    const { idListTrack, nowSong, isPlay } = usePlayer();

    const [iconPause, setIconPause] = useState(false);

    const handleClick = () => {
        setIsDisEdit(!isDisEdit);
        setIsDisMenu(false);
    };

    const handleClickDelete = () => {
        setIsDisDelete(!isDisDelete);
        setIsDisMenu(false);
    }

    const handlePlay = () => {
        if ((idListTrack !== data.id) || nowSong === -1) {
            setListTrack(data.tracks);
            setNowSong(0);
            setPlay(true);
            setIdListTrack(params.id);
        } else if (idListTrack === params.id) {
            if (!isPlay) {
                setPlay(true);
            } else {
                setPlay(false);
            }
        }
    }

    const handleClickMenu = () => {
        setIsDisMenu(!isDisMenu)
    }

    useEffect(() => {
        if (idListTrack === params.id) {
            if (!isPlay) {
                setIconPause(false);
            } else {
                setIconPause(true);
            }
        }
    }, [isPlay, idListTrack])

    const [playlist, setData] = useState([]);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const response = await playlistApi.getPlaylist(params.id);
                setData(response);
            } catch (err) {
                console.log(err);
            }
        };

        fetchTrack();

        const setBegin = () => {
            if (idListTrack === params.id && isPlay) {
                setIconPause(true);
            }
        }
        setBegin();
    }, [params.id, playlist]);

    data.user_id = playlist.user_id;
    data.id = playlist._id;
    data.name = playlist.name;
    data.image = playlist.image;
    data.description = playlist.description;
    data.tracks = playlist.tracks === undefined ? data.tracks : playlist.tracks;

    return (
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
                <div className={styles['header__img']}>
                    <img src={data.image} alt='Img - playlist' />
                </div>
                <div className={styles['header__infor']}>
                    <div className={styles['infor__heading']}>
                        <span className={styles['text-playlist']}>Playlist</span>
                        <h2 className={styles['heading-text']}>{data.name}</h2>
                    </div>
                    <div className={styles['infor__description']}>
                        <Link to='/profile' className={styles['infor_link-profile']}>By me</Link>
                        <span className={styles['numberOfSong']}> . {data.tracks.length} songs</span>
                    </div>
                </div>
            </header>
            <div className={styles['content']}>
                <div className={styles['viewport']}>
                    <div className={styles['playAndPause-icon']} onClick={handlePlay}>
                        {!iconPause && <i className="fa-solid fa-circle-play"></i>}
                        {iconPause && <i className="fa-solid fa-circle-pause"></i>}
                    </div>
                    <div className={styles['options-playlist']}>
                        <i className={`${styles.iconDots} fa-solid fa-ellipsis`} onClick={handleClickMenu}></i>
                        {
                            isDisMenu &&
                            <div className={styles['options-menu']}>
                                <ul className={styles['options-list']}>
                                    <li className={styles['options']}>
                                        <button className={styles['btn-options']} onClick={handleClick}>Edit details</button>

                                    </li>
                                    <li className={styles['options']}>
                                        <button className={styles['btn-options']} onClick={handleClickDelete}>Delete</button>
                                    </li>
                                </ul>
                            </div>
                        }
                        {isDisEdit &&
                            <div>
                                <div onClick={handleClick} className={styles['hidden_background']}></div>
                                <EditDetails onClick={handleClick} data={data} />
                            </div>
                        }
                        {isDisDelete &&
                            <div>
                                <div onClick={handleClickDelete} className={styles['hidden_background']}></div>
                                <DeletePlaylist onClick={handleClickDelete} data={data} />
                            </div>
                        }
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
                        <div className={styles['header-delete']}>
                        </div>
                    </div>
                    <div className={styles['content__list-song']}>
                        {data.tracks.map((item, index) => {
                            let id = item.encodeId;
                            let img = item.thumbnail;
                            let title = item.title;
                            let artist = item.artist;
                            let album = item.album;
                            let duration = item.duration;
                            return (
                                <SongCardPlaylist data={data} key={index} index={index} id={id}
                                    title={title} img={img}
                                    artist={artist} duration={duration}
                                    album={album} idPlaylist={data.id} tracks={data.tracks} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Playlist;