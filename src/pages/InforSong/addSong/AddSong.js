import styles from './AddSong.module.scss';
import { useEffect, useState } from 'react';
import playlist from "../../../api/PlaylistApi";

function FormAddSong({data}) {
    const listPlaylist = [];

    const [dataLibrary, setData] = useState([]);

    const [showPlaylist, setShowPlaylist] = useState(false);

    // useEffect(() => {
    //     const fetchLibrary = async () => {
    //         try {
    //         } catch(err) {
    //             console.log(err);
    //         }
    //     }

    //     fetchLibrary();
    // }, [])

    // if(showPlaylist === true) {
    //     document.body.onclick = () => {
    //         setShowPlaylist(false);
    //     }
    // }

    const toggleAdd = (e) => {
        setShowPlaylist(!showPlaylist);
        e.preventDefault();
    };


    const handleSubmit = (dataChange, event) => {
        event.preventDefault();

        // dataChange.tracks.push({
        //     id: data.id,
        //     name: data.name,
        //     image: data.img,
        //     artistName: data.artist.name,
        // });

        // const dataUpdate = {
        //     user_id: dataChange.user_id,
        //     name: dataChange.name,
        //     description: dataChange.description,
        //     image: dataChange.image,
        //     tracks: dataChange.tracks,
        // }
        // playlist.addSong(dataChange._id, dataUpdate);
        setShowPlaylist(false);
    }

    if(listPlaylist.length === 0) {
        listPlaylist.push({name: 'NO PLAYLIST '});
    }

    console.log(showPlaylist);

    return (
        <div className={styles['add-song-to-playlist']}>
            <div className={styles['add-playlist-icon']} onClick={toggleAdd}>
                <i className="fa-sharp fa-solid fa-plus"></i>
            </div>
            {showPlaylist &&
                <div className={styles['wrapper-form']}>
                    <h4>Playlists</h4>
                    {listPlaylist.map((item, index) => {
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

export default FormAddSong;