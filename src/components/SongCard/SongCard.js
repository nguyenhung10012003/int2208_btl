import styles from './SongCard.module.scss';

function SongCard({id, title, img}) {
    return (
        <div className={styles['wrapper']}>
            <img src={img} className={styles['thumb']} alt={''}/>
            <div className={styles['song-info']}>
                <h2 className={styles['song-title']}>{title}</h2>
            </div>
        </div>
    )
}

export default SongCard;