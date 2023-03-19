import styles from './Playlist.module.scss';

function Section({data}) {
    return ( 
        data.listSong.map((song, index) => {
            return (                    
                <div className={styles['body-list']}>
                    <div className={styles['body-serial']}>
                        <span>{index+1}</span>
                        {/* <i className="fa-solid fa-play"></i> */}
                    </div>
                    <div className={styles['body-title']}>
                        <div className={styles['image-song']}>
                            <img src={song.img} alt='i'/>
                        </div>
                        <div className={styles['des-title']}>
                            <h3>{song.name}</h3>
                            <span>{song.singer}</span>
                        </div>
                    </div>
                    <div className={styles['body-album']}>
                        <span>{song.album}</span>
                    </div>
                    <div className={styles['body-duration']}>
                        <span>{song.duration}</span>
                    </div>
                </div>
            )
        })
     );
}

export default Section;

