import styles from './LikeSong.module.scss';
import { useEffect, useState } from 'react';
import UserApi from "../../api/UserApi";
import { useAuth } from '../../hooks/AuthContext';

function LikeSong({ data }) {
    // get user
    const { getUser } = useAuth();
    const user = getUser();
    
    // const [dataUser, setDataUser] = useState([]);

    const [isLiked, setLiked] = useState(false);

    // const handleLike = () => {
    //     setLiked(!isLiked);
    // }

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const resIsLiked = await UserApi.isLikeSong(user.id, data);
                setLiked(!resIsLiked.err);
            } catch (err) {
                console.log(err);
            }
        };
        fetchTrack();
    }, [])

    const handleLike = (event) => {
        event.preventDefault();

        if(!isLiked) {
            UserApi.addLikeSong(user.id, data);
            setLiked(true);
        } else {
            UserApi.unlikeSong(user.id, data);
            setLiked(false);
        }
    }


    return (
        <form onSubmit={handleLike} className={styles['wrapper']}>
            <button type='submit' className={styles['like-song-icon']}>
                {!isLiked && <i className="fa-regular fa-heart"></i>}
                {isLiked && <i className={`${styles.iconLiked} fa-solid fa-heart`}></i>}
            </button>
        </form>
    );

}

export default LikeSong;