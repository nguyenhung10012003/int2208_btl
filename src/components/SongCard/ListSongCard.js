
import styles from "./ListSongCard.module.scss";
import React from "react";
import SongCard from "./SongCard";

function ListSong({params,data}) {
    return(
        <div className={styles['wrapper']}>
                <div className={styles['text']}>
                        <h4>Songs</h4>
                </div>
                <div className={styles['song']}>
                {params?.map((param,index) => {
                    var alb={
                        id: index,
                        name: param.album ? param.album.title : param.title,
                    }
                    var ars= Array.isArray(param.artists) ? param.artists[0] : param.artists;
                    return (
                        <SongCard data={data} key={index} index={index} id={param.encodeId} title={param.title} img={param.thumbnail} artist={ars} duration={param.duration} album={alb}/>
                    )
                })}
                </div>
        </div>
    )
}
export default ListSong;
