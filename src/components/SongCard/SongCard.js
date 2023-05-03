import styles from './SongCard.module.scss';
import { Link } from "react-router-dom";
import FormAddSong from '../../components/addSong/AddSong';

function SongCard({index, id, title, img, artist, duration, album }) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['serial']}>
                <span>{index + 1}</span>
                {/* <i className="fa-solid fa-play"></i> */}
            </div>
            <div className={styles['title']}>
                <div className={styles['image-song']}>
                    <img src={img} alt='' />
                </div>
                <div className={styles['des-title']}>
                    <Link to={{
                        pathname: `/infor-song/${id}`
                    }} className={styles['infor-song']}>{title}</Link>
                    <Link to={{
                        pathname: "/profile-artist"
                    }} className={styles['profile-artist']}>{artist.name}</Link>
                </div>
            </div>
            <div className={styles['album']}>
                <span>{ }</span>
            </div>
            <div className={styles['duration']}>
                <span> {Math.floor(duration / 60)} phút {Math.floor(duration % 60)} giây </span>
            </div>
            <div className={styles['add-song']}>
                {/* <div className={styles['wrapper-form']}>
                    <FormAddSong data={dataSubmit} className={styles['form-add-song']} />
                </div> */}
            </div>
        </div>
    )
}

export default SongCard;