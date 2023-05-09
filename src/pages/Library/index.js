import Sections from "./Sections";
import Styles from './Library.module.scss';
import { useEffect, useState} from "react";
import { useAuth } from "../../hooks/AuthContext";
import playlistApi from "../../api/PlaylistApi"

function Library() {
    const {getUser} = useAuth();
    const user = getUser();

    const [data, setData] = useState([]);

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
    }, [data])

    
    
    return (
        <div className={Styles['wrapper']}>
            <div className={Styles['section-title']}>
                <h2>Playlist</h2>
            </div>
            <Sections data={data} />
        </div>
    );
}

export default Library;