// /* eslint-disable no-undef */
// import {Link, useParams} from 'react-router-dom'
import styles from './InforSong.module.scss'
// import FormAddSong from './FormAddSong';
// import {useEffect, useState} from "react";
// import postcardApi from "../../api/HomeApi";
// import axios from 'axios';

function InforSong() {

    // data default
    // const data = {
    //     id: 'abcxyz',
    //     name: 'Name song',
    //     img: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
    //     artist: {
    //         name: 'Singer name',
    //         img: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
    //     },
    //     duration: 100000,
    //     lyrics: 'lyric...'
    // };
    //
    // const params = useParams();
    //
    // const [track, setData] = useState([]);
    // const [lyrics, setLyric] = useState([]);
    // const [artist, setDataArtist] = useState([]);
    //
    // useEffect(() => {
    //     const fetchTrack = async () => {
    //         try {
    //             const response = await postcardApi.getTrack(params.id);
    //             setData({
    //                 id: response.track.id,
    //                 name: response.track.name,
    //                 image: response.track.album.images[0].url,
    //                 duration: response.track.duration_ms,
    //             });
    //             setDataArtist({
    //                 name: response.artist.name,
    //                 image: response.artist.images[0].url,
    //             });
    //             const resLyric = await axios.get(`https://spotify-lyric-api.herokuapp.com/?url=https://open.spotify.com/track/${response.track.id}?autoplay=true`);
    //             setLyric(resLyric.data.lines);
    //
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //
    //     fetchTrack();
    //
    // }, [params.id]);
    
    // chage data
    // data.id = track.id === undefined ? data.id : track.id;
    // data.name = track.name;
    // data.img = track.image;
    // data.duration = track.duration;
    //
    // data.artist.name = artist.name;
    // data.artist.img = artist.image;
    // //
    // if(lyrics.length === 0) {
    //     lyrics.push({words: "Lyrics not avaiable"});
    // }

    return ( 
        <div className={styles['wrapper']}>
            {/*<header className={styles['header']}>*/}
            {/*    <div className={styles['header__img']}>*/}
            {/*        <img src={data.img} alt='Img - playlist'/>*/}
            {/*    </div>*/}
            {/*    <div className={styles['header__infor']}>*/}
            {/*        <div className={styles['infor__heading']}>*/}
            {/*            <span className={styles['text-playlist']}>Song</span>*/}
            {/*            <h2 className={styles['heading-text']}>{data.name}</h2>*/}
            {/*        </div>*/}
            {/*        <div className={styles['infor__description']}>*/}
            {/*        <img src={data.artist.img} alt=''/>*/}
            {/*            <Link to='/profile-artist' className={styles['infor_link-singer']}>{data.artist.name}</Link>*/}
            {/*            <span className={styles['duration-song']}> . {Math.floor(data.duration / 1000 / 60)} phút {Math.floor(data.duration % 60)} giây</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}
            {/*<div className={styles['content']}>*/}
            {/*    <div className={styles['viewport']}>*/}
            {/*        <div className={styles['playAndPause-icon']}>*/}
            {/*            <i className={"fa-solid fa-circle-play"}></i>*/}
            {/*            /!* <i class="fa-solid fa-circle-pause"></i> *!/*/}
            {/*        </div>*/}
            {/*        <FormAddSong data={data} />*/}
            {/*    </div>*/}
            {/*    <div className={styles['content-spacing']}>*/}
            {/*        <h3>Lyrics</h3>*/}
            {/*        <span className={styles['content__lyrics']}>*/}
            {/*            {lyrics.map((line, index) => {*/}
            {/*                return (*/}
            {/*                    <p key={index}>{line.words}</p>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </span>*/}
            {/*        <div className={styles['content__artist']}>*/}
            {/*            <div className={styles['artist-img']}>*/}
            {/*                <img src={data.artist.img} alt=''/>*/}
            {/*            </div>*/}
            {/*            <div className={styles['artist-descripton']}>*/}
            {/*                <h4>Artist</h4>*/}
            {/*                <Link to='/profile-artist' className={styles['infor_link-singer']}>{data.artist.name}</Link>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
}

export default InforSong;