import styles from './AddSong.module.scss';
import { useEffect, useState } from 'react';
import playlistApi from "../../api/PlaylistApi";
import { useAuth } from '../../hooks/AuthContext';


function AddSong({ data }) {
    const { getUser } = useAuth();
    const user = getUser();

    const [dataLibrary, setData] = useState([]);

    const [showPlaylist, setShowPlaylist] = useState(false);
    const [confirmAdd, setConfirmAdd] = useState(false);
    const [playlistIndex, setPlaylistIndex] = useState(-1);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await playlistApi.getAllPlaylistByUser(user.email);
                setData(response);
            } catch (err) {
                console.log(err);
            }
        }

        fetchLibrary();
    }, [showPlaylist])

    const toggleAdd = (e) => {
        setShowPlaylist(!showPlaylist);
        e.preventDefault();
    };

    const handleClick = () => {
        setConfirmAdd(false);
    }

    const handleSubmit = (datas, event) => {
        event.preventDefault();

        let dataChange = datas.data;
        const index = datas.index;

        if (dataChange.tracks.findIndex((element) => element.encodeId === data.id) === -1) {

            dataChange.tracks.push({
                encodeId: data.id,
                title: data.name,
                thumbnail: data.img,
                artistsNames: data.artistsNames,
                artist: data.artist,
                album: data.album,
                duration: data.duration,
            });

            playlistApi.addSong(dataChange._id, dataChange.tracks);
        } else {
            if (!confirmAdd) {
                setConfirmAdd(true);
                setPlaylistIndex(index);
            } else {
                dataChange.tracks.push({
                    encodeId: data.id,
                    title: data.name,
                    thumbnail: data.img,
                    artistsNames: data.artistsNames,
                    artist: data.artist,
                    album: data.album,
                    duration: data.duration,
                });

                playlistApi.addSong(dataChange._id, dataChange.tracks);
                setConfirmAdd(false);
            }
        }

        setShowPlaylist(false);
    }

    if (dataLibrary.length === 0) {
        dataLibrary.push({ name: 'NO PLAYLIST ' });
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
                            <form onSubmit={handleSubmit.bind(this, { data: item, index: index })} key={index} className={styles['form-add-song']}>
                                <button type='submit'>{item.name}</button>
                            </form>
                        )
                    })}
                </div>
            }
            {confirmAdd &&
                <div>
                    <div onClick={handleClick} className={styles['hidden_background']}></div>
                    <div className={styles['modal']}>
                        <h3 className={styles['title']}>Already added</h3>
                        <p className={styles['description']}>
                            This is already in your playlist.
                        </p>
                        <form onSubmit={handleSubmit.bind(this, { data: dataLibrary[playlistIndex], index: -1 })} className={styles['form-delete']} >
                            <button onClick={handleClick} className={styles['btn-cancel']}>
                                Cancle
                            </button>
                            <button type='submit' className={styles['btn-delete']}>
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div>
    );

}

export default AddSong;