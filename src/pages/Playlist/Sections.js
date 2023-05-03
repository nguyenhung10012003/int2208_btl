import styles from './Playlist.module.scss';
import DeleteSong from './EditPlaylist/DeleteSong';
import { Link } from "react-router-dom";

function Section({data}) {
    if(data.tracks !== undefined) {
        return ( 
            data.tracks.map((item, index) => {
                let id = item.id;
                let img = item.image;
                let name = item.name;
                let artist = item.artist;
                let album = item.album;
                let duration = item.duration;
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
                                }} className={styles['profile-artist']}>{artist.name}</Link>
                            </div>
                        </div>
                        <div className={styles['body-album']}>
                            <Link to={`/album/${album.id}`} className={styles['body-album-link']}>
                                {album.name}
                            </Link>
                        </div>
                        <div className={styles['body-duration']}>
                            <span>{Math.floor(duration / 60)} phút {Math.floor(duration % 60)} giây</span>
                        </div>
                        <div className={styles['body-delete']}>
                            <DeleteSong data={{data: data, index: index}}/>
                        </div>
                    </div>
                )
            })
         );
    }
}

export default Section;
