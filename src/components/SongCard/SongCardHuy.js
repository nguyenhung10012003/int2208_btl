import styles from './SongCard.module.scss';
import { Link } from "react-router-dom";
function SongCardHuy({param}) {
    var img=param.thumbnail;
    var title=param.title;
    var artist=param.artistsNames;
    var duration=`${Math.floor(param.duration / 60)}:${Math.floor(param.duration % 60)}`;
    var id=param.encodeId;
    var album = param.album ? param.album.title : param.title;
    return (
        <div className={styles['wrapper']}>
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
                    }} className={styles['profile-artist']}>{artist}</Link>
                </div>
            </div>
            <div className={styles['album']}>
                <span>{album}</span>
            </div>
            <div className={styles['duration']}>
                <span> {duration}</span>
            </div>
            <div className={styles['add-song']}>
                {/* <div className={styles['wrapper-form']}>
                    <FormAddSong data={dataSubmit} className={styles['form-add-song']} />
                </div> */}
            </div>
        </div>
    )
}

export default SongCardHuy;