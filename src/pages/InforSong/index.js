/* eslint-disable no-undef */
import {Link, useParams} from 'react-router-dom'
import styles from './InforSong.module.scss'
import AddSong from '../../components/AddSong/AddSong';
import LikeSong from '../../components/LikeSong/LikeSong';
import songApi from '../../api/SongApi';
import {useEffect, useState} from "react";
import { usePlayer } from "../../hooks/PlayerContext";


function InforSong() {

    // data default
    const data = {
        id: '',
        name: 'Name song',
        img: 'https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg',
        artistsNames: '',
        artist: {
            id: '',
            name: 'singer name',
            alias: '',
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
    const [dataSong, setDataSong] = useState([]);
    const [isIconPause, setIconPause] = useState(false);

    const { setListTrack, setNowSong, setPlay } = usePlayer();
    const {listTrack, nowSong, isPlay} = usePlayer();

    const handlePlay = () => {
        if(listTrack[nowSong]?.encodeId !== dataSong?.encodeId || nowSong === -1) {
            setListTrack([dataSong]);
            setNowSong(0);
            setPlay(true);
            setIconPause(true);
        } else {
            if(!isPlay) {
                setPlay(true);
                setIconPause(true);
            } else {
                setPlay(false)
                setIconPause(false);
            }
        }
    }

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const resInfor = await songApi.getInfoSong(params.id);
                const resLyric = await songApi.getLyric(params.id);
                setDataSong(resInfor.data);
                setData({
                    id: resInfor.data.encodeId,
                    title: resInfor.data.title,
                    img: resInfor.data.thumbnailM,
                    artistsNames: resInfor.data.artistsNames,
                    duration: resInfor.data.duration,
                    lyrics: resLyric.data.sentences,
                    artist: {
                        id: resInfor.data.artists[0].id,
                        name: resInfor.data.artists[0].name,
                        alias: resInfor.data.artists[0].alias,
                        img: resInfor.data.artists[0].thumbnailM,
                    },
                    album: {
                        id: resInfor.data.album?.encodeId,
                        name: resInfor.data.album?.title,
                    },
                });
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchTrack();
    }, [params.id]);

    useEffect(() => {
        const playSong = () => {
            if(!isPlay) {
                setIconPause(false);
            }
            if(listTrack[nowSong]?.encodeId === dataSong.encodeId && isPlay) {
                setIconPause(true);
            }
            if(nowSong === -1) {
                setIconPause(false);
            }
        }
        
        playSong();
    }, [isPlay]);

    // chage data
    data.id = song.id === undefined ? data.id : song.id;
    data.name = song.title;
    data.img = song.img;
    data.artistsNames = song.artistsNames;
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
                       <Link to={`/artist/${data.artist?.alias}`} className={styles['infor_link-singer']}>{data.artist.name}</Link>
                       <span className={styles['duration-song']}> . {Math.floor(data.duration / 60)} phút {Math.floor(data.duration % 60)} giây</span>
                   </div>
               </div>
            </header>
            <div className={styles['content']}>
               <div className={styles['viewport']}>
                    <div className={styles['playAndPause-icon']} onClick={handlePlay}>
                        {!isIconPause && <i className="fa-solid fa-circle-play"></i>}
                        {isIconPause && <i className="fa-solid fa-circle-pause"></i>}
                    </div>
                    <div className={styles['like-song']}>
                        <LikeSong data={data} />
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
                           <Link to={`/artist/${data.artist?.alias}`} className={styles['infor_link-singer']}>{data.artist.name}</Link>
                       </div>
                   </div>
               </div>
            </div>
        </div>

    );
}

export default InforSong;