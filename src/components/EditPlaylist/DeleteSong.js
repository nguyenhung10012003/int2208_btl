import styles from '../SongCard/SongCardPlaylist.module.scss';
import { useNavigate } from "react-router-dom";
import playlistApi from "../../api/PlaylistApi";

function DeleteSong({index, id, tracks}) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        tracks.splice(index, 1);

        playlistApi.deleteSong(id, tracks);

        navigate(`/playlist/${id}`);
    }

    return (
        <form onSubmit={handleSubmit}  className={styles['form-delete']} >
            <button type='submit' className={styles['btn-delete']}>
                <i className={"fa-solid fa-trash"}></i>
            </button>
        </form>
    )
}

export default DeleteSong;
