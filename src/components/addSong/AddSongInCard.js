import styles from './AddSongInCard.module.scss';
import { useEffect, useState } from 'react';
import playlistApi from "../../api/PlaylistApi";
import { useAuth } from '../../hooks/AuthContext';

function AddSong({data}) {
    // get user
    const {getUser} = useAuth();
    const user = JSON.parse(getUser());

    const [dataLibrary, setData] = useState([]);

    const [showPlaylist, setShowPlaylist] = useState(false);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await playlistApi.getAllPlaylistByUser(user.email);
                setData(response);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLibrary();
    }, [showPlaylist])

    const toggleAdd = (e) => {
        setShowPlaylist(!showPlaylist);
        e.preventDefault();
    };


    const handleSubmit = (dataChange, event) => {
        event.preventDefault();

        dataChange.tracks.push({
            id: data.id,
            name: data.name,
            image: data.img,
            artist: data.artist,
            album: data.album,
            duration: data.duration,
        });
        
        playlistApi.addSong(dataChange._id, dataChange.tracks);
        setShowPlaylist(false);
    }

    if(dataLibrary.length === 0) {
        dataLibrary.push({name: 'NO PLAYLIST '});
    }

    return (
        <div className={styles['add-song-to-playlist']}>
            <div className={styles['add-playlist-icon']} onClick={toggleAdd}>
                <i className="fa-sharp fa-solid fa-plus"></i>
            </div>
            {showPlaylist &&
                <div className={styles['wrapper-form-in-card']}>
                    <h4>Playlists</h4>
                    {dataLibrary.map((item, index) => {
                        return (
                            <form onSubmit={handleSubmit.bind(this, item)} key={index} className={styles['form-add-song']}>
                                <button type='submit'>{item.name}</button>
                            </form>    
                        )
                    })}
                </div>
            }
        </div>
    );

}

export default AddSong;