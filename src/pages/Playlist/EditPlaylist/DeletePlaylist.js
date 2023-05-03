import styles from '../Playlist.module.scss';
import { useNavigate } from "react-router-dom";
import playlistApi from "../../../api/PlaylistApi";

function DeletePlaylist({data}) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        playlistApi.deletePlaylist(data.id);

        navigate(`/library`);
        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}  className={styles['form-delete-playlist']} >
            <button type='submit' className={styles['btn-delete-playlist']}>
                Delete playlist
            </button>
        </form>
    )
}

export default DeletePlaylist;