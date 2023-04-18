import styles from './FormAddSong.module.scss';
import { useEffect, useState } from 'react';
import postcardApi from '../../api/PostcardApi';
import playlist from "../../api/playlistApi";

function FormAddSong({data}) {

    const [dataLibrary, setData] = useState([]);

    const [showPlaylist, setShowPlaylist] = useState(false);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await postcardApi.getLibrary();
                setData(response);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLibrary();
    }, [])

    const toggleAdd = () => {
        setShowPlaylist(!showPlaylist);
    };

    const handleSubmit = (dataChange, event) => {
        event.preventDefault();

        dataChange.tracks.push({
            id: data.id,
            name: data.name,
            image: data.img,
            artistName: data.artist.name,
        });

        const dataUpdate = {
            user_id: dataChange.user_id,
            name: dataChange.name,
            description: dataChange.description,
            image: dataChange.image,
            tracks: dataChange.tracks,
        }
        playlist.addSong(dataChange._id, dataUpdate);

    }

    return (
        <div className={styles['add-song-to-playlist']}>
            <div className={styles['add-playlist-icon']} onClick={toggleAdd}>
                <i className="fa-sharp fa-solid fa-plus"></i>
            </div>
            {showPlaylist &&
                <div className={styles['wrapper-form']}>
                    <h4>Playlists</h4>
                    {dataLibrary.map((item, index) => {
                        return (
                            <form onSubmit={handleSubmit.bind(this, item)} key={index} className={styles['playlists']}>
                                <button type='submit'>{item.name}</button>
                            </form>    
                        )
                    })}
                </div>
            }
        </div>
    );

}

export default FormAddSong;