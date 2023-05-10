import SongCardHuy from "./SongCardHuy";
import styles from "./ListSongCard.module.scss";
import React from "react";

function ListSong({params}) {
    return(
        <div className={styles['wrapper']}>
                <div className={styles['text']}>
                        <h4>Songs</h4>
                </div>
                <div className={styles['song']}>
                {params?.map((param,index) => {
                    return (
                        <SongCardHuy key={index} param={param} />
                    )
                })}
                </div>
        </div>
    )
}
export default ListSong;