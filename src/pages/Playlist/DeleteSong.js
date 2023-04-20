import styles from './Playlist.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import playlistApi from "../../api/PlaylistApi";

function DeleteSong({data}) {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        data.data.tracks.splice(data.index, 1);

        playlistApi.deleteSong(data.data.id, data.data.tracks);

        navigate(`/playlist/${data.data.id}`);
    }

    console.log(data);
    return (
        <form onSubmit={handleSubmit}  className={styles['form-delete']} >
            <button type='submit' className={styles['btn-delete']}>
                <i className={"fa-solid fa-trash"}></i>
            </button>
        </form>
    )
}

export default DeleteSong;
