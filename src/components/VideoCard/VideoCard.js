import styles from "./VideoCard.module.scss"
import React from 'react';

function VideoCard({param}) {
    var imgVideo = param.thumbnailM;
    const tmp=Math.floor(param.duration/60);
    var duration = `${tmp}:${param.duration-tmp*60}`;
    var artistName=param.artistsNames;
    var videoName = param.title;
    var imgArtist;
    if(param.artists) {
        if (Array.isArray(param.artists)) imgArtist=param.artists[0].thumbnail
        else imgArtist=param.artists.thumbnail;
    }
    return(
    <div className={styles['wrapper']} >
        <div className={styles["video-cover"]}>
            <img className={styles["video-img"]} src={imgVideo} alt="Video Image"/>
            <span className={styles["video-duration"]}>{duration}</span>
        </div>
        <div className={styles['wrapper-bot']}>
            <div className={styles['card']}>
            <img src={imgArtist} className={styles['card-img']}/>
            </div>
            <div className={styles['card-body']}>
                <h6 className={styles['card-body-title']}>{videoName}</h6>
                <p className={styles['card-body-text']}>{artistName}</p>
            </div>
        </div>
    </div>
    )
}

export default VideoCard;