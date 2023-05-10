import React from "react";
import styles from './PlaylistCard.module.scss'
 function PlaylistCard({param}) {
    var imgsrc = param.thumbnail;
    var name = param.title;
    var artistName= param.artistsNames;
    return (
    <div className={styles['wrapper']}>
      <div className={styles['card']}>
        <img src={imgsrc} className={styles['card-img']}/>
      </div>
      <div className={styles['card-body']}>
        <p className={styles['card-body-name']}>{name}</p>
        <p className={styles['card-body-artistName']}>{artistName}</p>
      </div>
  </div>);
 }

 export default PlaylistCard;