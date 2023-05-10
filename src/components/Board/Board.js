import {usePlayer} from "../../hooks/PlayerContext";
import {useState} from "react";
import styles from './Board.module.scss';
import Lyric from "../Lyric/Lyric";
import CommentBoard from "../Comment/CommentBoard";
import {Navigate} from "react-router-dom";

function Board() {
    const {listTrack, nowSong} = usePlayer();
    const tabs = ["Lyric", 'Comments'];
    const [type, setType] = useState("Lyric");

    if (!listTrack) {
        return (
            <Navigate to={'/'}/>
        )
    }
    
    return (
        <div className={styles['wrapper']}>
            <div className={styles['board-nav']}>
                {tabs.map((tab, index) => {
                    return (
                        <span
                            key={tab}
                            style={type === tab ? {color: '#fff', borderBottom: '2px solid #fff'} : {}}
                            className={styles['title']}
                            onClick={() => setType(tab)}
                        >
                        {tab}
                    </span>
                    )
                })}
            </div>
            <div className={styles['content']}>
                {type === 'Lyric'
                    ? <Lyric SongId={listTrack[nowSong].encodeId}/>
                    : (type === 'Comments' ? <CommentBoard songId={listTrack[nowSong].encodeId}/> : <></>)
                }
            </div>
        </div>
    )
}

export default Board;
