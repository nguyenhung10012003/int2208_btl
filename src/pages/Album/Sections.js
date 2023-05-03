import styles from './Album.module.scss';
import { Link } from "react-router-dom";
import FormAddSong from '../../components/addSong/AddSong';

function Section({data}) {
    if(data.items !== undefined) {
        return ( 
            data.items.map((item, index) => {
                let name = item.title;
                let id = item.encodeId;
                let img = item.thumbnailM;
                let nameArtist = item.artistsNames;
                let duration = item.duration;
                let album = {};
                if(item.hasOwnProperty('album')) {
                    album =  {
                        id: item.album.encodeId === undefined ? '' : item.album.encodeId,
                        name: item.album.title,
                    }
                }
                
                const dataSubmit = {
                    id: id,
                    name: name,
                    img: img,
                    duration: duration,
                    artist: {
                        id: item.artists[0].id,
                        name: item.artists[0].name,
                        img: item.artists[0].thumbnailM
                    },
                    album: album,
                }

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
                            <span> {Math.floor(duration / 60)} phút {Math.floor(duration % 60)} giây </span>
                        </div>
                        <div className={styles['body-addSong']}>
                           <div className={styles['wrapper-form']}>
                                <FormAddSong data={dataSubmit} className={styles['form-add-song']}/>
                           </div>
                        </div>
                    </div>
                )
            })
         );
    }
}

export default Section;

