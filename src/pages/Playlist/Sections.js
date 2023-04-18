import styles from './Playlist.module.scss';
import { Link } from "react-router-dom";

function Section({data}) {
    if(data.tracks !== undefined) {
        return ( 
            data.tracks.map((item, index) => {
                let img = 'https://i.scdn.co/image/ab67616d0000b2731744248a6fd87af0769d7073';
                let name = item.name;
                let id = item.id;
                let nameArtist = data.artistName;
                return (                    
                    <div key={index} className={styles['body-list']}>
                        <div className={styles['body-serial']}>
                            <span>{index+1}</span>
                            {/* <i className="fa-solid fa-play"></i> */}
                        </div>
                        <div className={styles['body-title']}>
                            <div className={styles['image-song']}>
                                <img src={img} alt='i'/>
                            </div>
                            <div className={styles['des-title']}>
                                <Link to={{
                                    pathname: `/infor-song/${id}`
                                }} className={styles['infor-song']}>{name}</Link>
                                <Link to={{
                                    pathname: "/profile-artist"
                                }} className={styles['profile-artist']}>{nameArtist}</Link>
                            </div>
                        </div>
                        <div className={styles['body-album']}>
                            <span>{}</span>
                        </div>
                        <div className={styles['body-duration']}>
                            <span>{}</span>
                        </div>
                    </div>
                )
            })
         );
    }
}

export default Section;

