import { Link, useParams } from 'react-router-dom';
import styles from './Album.module.scss'
import Section from './Sections';
import {useEffect, useState} from "react";
import albumApi from '../../api/AlbumApi';

function Album() {
    const data = {
        name: 'Album',
        img: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
        artistName: 'unknown',
        items: [],
    };

    const params = useParams();
    const [album, setData] = useState([]);
    // const [artist, setDataArtist] = useState([]);

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
        
    }, [params.albumId]);

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
                        <Link to='/profile-artist' className={styles['infor_link-artist']}>{data.artistName}</Link>
                        <span className={styles['numberOfSong']}> . {data.items.length} songs</span>
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
                        <div className={styles['header-duration']}>
                            <span>Duration</span>
                        </div>
                        <div className={styles['header-addSong']}>
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

export default Album;