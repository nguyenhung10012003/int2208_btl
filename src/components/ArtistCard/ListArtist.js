import styles from "./ListArtist.module.scss";
import React from "react";
import ArtistCard from "./ArtistCard";
function ListArtist({params}) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['text']}>
                    <h4 className={styles['text-h3']}>Artists</h4>
            </div>
            <div className={styles['card']}>
            {params?.map((param,index) => {
                return (
                    <ArtistCard key={index} param={param}/>
                )
            })}
            </div>
        </div>
    )   
}
export default ListArtist;