import {useEffect, useState} from "react";
import SongApi from "../../api/SongApi";
import styles from './Lyric.module.scss'

function Lyric({SongId}) {
    const [lyric, setLyric] = useState();

    useEffect(() => {
        const fetchLyric = async () => {
            try {
                const data = await SongApi.getLyric(SongId);
                setLyric(data.data.sentences);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLyric();
    }, []);
    return (
        <div className={styles['wrapper']}>
            {lyric ? lyric.map((sentence, index) => {
                return (
                    <p key={index}>{sentence.words.map((word) => {
                        return(word.data + ' ');
                    })}</p>
                )
            }) : <div style={{color: '#fff'}}>Bài hát này chưa có lời bài hát</div>}
        </div>
    )
}

export default Lyric;