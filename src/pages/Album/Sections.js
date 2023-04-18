import styles from './Album.module.scss';
import { Link } from "react-router-dom";

function Section({data}) {
    if(data.items !== undefined) {
        return ( 
            data.items.map((item, index) => {
                let name = item.name;
                let id = item.id;
                let nameArtist = data.artistName;
                let duration = item.duration_ms;
                return (                    
                    <div key={index} className={styles['body-list']}>
                        <div className={styles['body-serial']}>
                            <span>{index+1}</span>
                            {/* <i className="fa-solid fa-play"></i> */}
                        </div>
                        <div className={styles['body-title']}>
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
                            <span> {Math.floor(duration / 1000 / 60)} phút {Math.floor(duration % 60)} giây </span>
                        </div>
                    </div>
                )
            })
         );
    }
}

export default Section;

