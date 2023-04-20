import { Link, useParams } from 'react-router-dom';
import styles from './Playlist.module.scss'
import Section from './Sections';
import playlistApi from '../../api/PlaylistApi';
import { useState, useEffect } from 'react';

function Playlist() {
    const data = {
        id: '',
        name: 'My playlist',
        image: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
        description: '',
        tracks: [],
    };

    const params = useParams();

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
        
    }, [params.id]);

    data.id = playlist._id;
    data.name = playlist.name;
    data.image = playlist.image;
    data.description = playlist.description;
    data.tracks = playlist.tracks === undefined ? data.tracks : playlist.tracks;

    return (
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
                <div className={styles['header__img']}>
                    <img src={data.image} alt='Img - playlist'/>
                </div>
                <div className={styles['header__infor']}>
                    <div className={styles['infor__heading']}>
                        <span className={styles['text-playlist']}>Playlist</span>
                        <h2 className={styles['heading-text']}>{data.name}</h2>
                    </div>
                    <div className={styles['infor__description']}>
                        <Link to='/profile' className={styles['infor_link-profile']}>Create by me</Link>
                        <span className={styles['numberOfSong']}> . {data.tracks.length} songs</span>
                    </div>
                </div>
            </header>
            <div className={styles['content']}>
                <div className={styles['viewport']}>
                    <div className={styles['playAndPause-icon']}>
                        <i className="fa-solid fa-circle-play"></i>
                        {/* <i class="fa-solid fa-circle-pause"></i> */}
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
                        <Section data={data}></Section>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Playlist;