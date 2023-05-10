import styles from "./ArtistCard.module.scss"
import React from 'react';
function ArtistCard({param, value='normal'}) {
    var imgsrc = param.thumbnail;
    var name = param.name;
  if (value==='top') {
    return (
    <div className={styles['wrapper']}>
        <div className={styles['card']}>
          <img src={imgsrc} className={styles['card-img']}/>
        </div>
        <div className="col-md-8">
          <div className={styles['card-body']}>
            <h2 className={styles['card-body-title']}>{name}</h2>
            <h4 className={styles['card-body-text']}>
              Nghệ sĩ
            </h4>
          </div>
        </div>
    </div>
    );
    } else {
        return (
            <div className={styles['wrapper2']}>
                <img src={imgsrc} className={styles['card-img-2']}/>
                <div className={styles['card-body-2']}>
                    <p>{name}</p>
                </div>
            </div>
        )
    }
}

export default ArtistCard;