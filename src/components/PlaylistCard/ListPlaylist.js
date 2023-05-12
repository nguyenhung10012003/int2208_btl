import React from "react";
import styles from "./ListPlaylist.module.scss";
import Postcard from "../Postcards/Postcard";
function ListPlaylist({params}) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['text']}>
                    <h4 className={styles['text-h3']}>Playlists</h4>
            </div>
            <div className={styles['card']}>
            {params?.map((param,index) => {
                return (
                    <div className={styles['postcard']}>
                    <Postcard key={param.encodeId} id={param.encodeId} img={param.thumbnail} description={param.title}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default ListPlaylist;