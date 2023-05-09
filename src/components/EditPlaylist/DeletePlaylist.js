// import styles from '../../pages/Playlist/Playlist.module.scss';
import styles from './DeletePlaylist.module.scss'
import { useNavigate } from "react-router-dom";
import playlistApi from "../../api/PlaylistApi";

function DeletePlaylist(props) {
    const navigate = useNavigate();

    const data = props.data;

    const handleSubmit = (event) => {
        event.preventDefault();

        playlistApi.deletePlaylist(data.id);

        navigate(`/library`);
    }

    const handleClickClose = () => {
        props.onClick(false);
    }

    return (
        <div className={styles['modal']}>
            <h3 className={styles['title']}>Delete from library?</h3>
            <p className={styles['description']}>
                This will delete
                <b> {data.name} </b>
                 from
                <b> Your Library</b>
            </p>
            <form onSubmit={handleSubmit} className={styles['form-delete']} >
                <button onClick={handleClickClose} className={styles['btn-cancel']}>
                    Cancle
                </button>
                <button type='submit' className={styles['btn-delete']}>
                    Delete
                </button>
            </form>
        </div>
    )
}

export default DeletePlaylist;