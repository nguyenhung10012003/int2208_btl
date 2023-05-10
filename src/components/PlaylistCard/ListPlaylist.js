import React from "react";
import styles from "./ListPlaylist.module.scss";
import PlaylistCard from "./PlaylistCard";
function ListPlaylist({params}) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['text']}>
                    <h4 className={styles['text-h3']}>Playlists</h4>
            </div>
            <div className={styles['card']}>
            {params?.map((param,index) => {
                return (
                    <PlaylistCard key={index} param={param}/>
                )
            })}
            </div>
        </div>
    );
}
export default ListPlaylist;