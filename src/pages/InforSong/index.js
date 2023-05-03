/* eslint-disable no-undef */
import {Link, useParams} from 'react-router-dom'
import styles from './InforSong.module.scss'
import AddSong from '../../components/addSong/AddSong';
import songApi from '../../api/SongApi';
import {useEffect, useState} from "react";

function InforSong() {

    // data default
    const data = {
        id: '',
        name: 'Name song',
        img: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
        artist: {
            id: '',
            name: 'singer name',
            img: 'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
        },
        album: {
            id: '',
            name: '',
        },
        duration: 0,
        lyrics: [],
    };

    const params = useParams();

    const [song, setData] = useState([]);

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const resInfor = await songApi.getInfoSong(params.id);
                const resLyric = await songApi.getLyric(params.id);
                setData({
                    id: resInfor.data.encodeId,
                    name: resInfor.data.title,
                    image: resInfor.data.thumbnailM,
                    duration: resInfor.data.duration,
                    lyrics: resLyric.data.sentences,
                    artist: {
                        id: resInfor.data.artists[0].id,
                        name: resInfor.data.artists[0].name,
                        img: resInfor.data.artists[0].thumbnailM,
                    },
                    album: {
                        id: resInfor.data.album.encodeId,
                        name: resInfor.data.album.title,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        };
        fetchTrack();
    
    }, [params.id]);

    // chage data
    data.id = song.id === undefined ? data.id : song.id;
    data.name = song.name;
    data.img = song.image;
    data.duration = song.duration;
    data.artist = song.artist === undefined ? data.artist : song.artist;
    data.album = song.album === undefined ? data.album : song.album;
    data.lyrics = song.lyrics === undefined ? data.lyrics : song.lyrics;
    if(data.lyrics.length === 0) {
        data.lyrics.push({words: "Lyrics not available"});
    } else {
        let lyric = [];
        song.lyrics.forEach((item, index) => {
            const words = item.words.map((word) => word.data).join(' ');
            lyric.push({words});
        });
        data.lyrics = lyric;
    }


    return ( 
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
               <div className={styles['header__img']}>
                   <img src={data.img} alt='Img - playlist'/>
               </div>
               <div className={styles['header__infor']}>
                   <div className={styles['infor__heading']}>
                       <span className={styles['text-playlist']}>Song</span>
                       <h2 className={styles['heading-text']}>{data.name}</h2>
                   </div>
                   <div className={styles['infor__description']}>
                        <img src={data.artist.img} alt='' />
                       <Link to='/profile-artist' className={styles['infor_link-singer']}>{data.artist.name}</Link>
                       <span className={styles['duration-song']}> . {Math.floor(data.duration / 60)} phút {Math.floor(data.duration % 60)} giây</span>
                   </div>
               </div>
            </header>
            <div className={styles['content']}>
               <div className={styles['viewport']}>
                   <div className={styles['playAndPause-icon']}>
                       <i className={"fa-solid fa-circle-play"}></i>
                       {/* <i class="fa-solid fa-circle-pause"></i>  */}
                   </div>
                   <AddSong data={data} />
               </div>
               <div className={styles['content-spacing']}>
                   <h3>Lyrics</h3>
                   <span className={styles['content__lyrics']}>
                       {data.lyrics.map((lyric, index) => {
                           return (
                               <p key={index}>{lyric.words}</p>
                           )
                       })}
                   </span>
                   <div className={styles['content__artist']}>
                       <div className={styles['artist-img']}>
                           <img src={data.artist.img} alt=''/>
                       </div>
                       <div className={styles['artist-descripton']}>
                           <h4>Artist</h4>
                           <Link to='/profile-artist' className={styles['infor_link-singer']}>{data.artist.name}</Link>
                       </div>
                   </div>
               </div>
            </div>
        </div>

    );
}

export default InforSong;