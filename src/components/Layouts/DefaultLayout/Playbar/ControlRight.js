import styles from './Playbar.module.scss';
import {LikeIcon, UpDownIcon, SpeakerIcon} from "../../components/IconBox";
import {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../../../../hooks/AuthContext";
import UserApi from "../../../../api/UserApi";
import {usePlayer} from "../../../../hooks/PlayerContext";

function ControlRight({songId}) {
    const {getUser} = useAuth();
    const {isMute, setMute, soundValue, setSoundValue} =  usePlayer();
    const [liked, setLiked] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const navigation = useNavigate();
    const location = useLocation();
    const handleToggleMute = () => {
        if (isMute) setSoundValue(100);
        else setSoundValue(0);
        setMute(!isMute);
    }

    const handleToggleSlide = () => {
        if (slideUp) {
            navigation(-1);
        } else navigation("/watch");

        setSlideUp(!slideUp);
    }

    const onChangeValue = (e) => {
        setSoundValue(e.target.value);
    }

    const handleToggleLiked = async () => {
        if (!liked) {
            if (getUser()) {
                await UserApi.addLikeSong(getUser()._id, {id: songId});
                setLiked(true);
            } else {

            }
        } else {
            if (getUser()) {
                await UserApi.unlikeSong(getUser()._id, {id: songId});
                setLiked(false);
            }
        }
    }

    useEffect(() => {
        const fetchLiked = async () => {
            if(!getUser()) {
                return;
            }
            try {
                const like = await UserApi.isLikeSong(getUser()._id, {id: songId});
                setLiked(!like.err);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLiked();
        return(() => {});
    }, [songId])

    useEffect(() => {
        if (soundValue == 0) setMute(true);
        else setMute(false);
    }, [soundValue]);

    useEffect(() => {
        if (location.pathname !== '/watch') setSlideUp(false);
    }, [location])

    return (
        <div className={styles['control-right']}>
            <LikeIcon liked={liked} onClick={handleToggleLiked}/>
            <SpeakerIcon isMute={isMute} onClick={handleToggleMute}/>
            <input
                type={'range'}
                min={0}
                max={100}
                step={1}
                onChange={onChangeValue}
                value={soundValue}
            />
            <UpDownIcon isUp={!slideUp} onClick={handleToggleSlide}/>
        </div>
    );
}

export default ControlRight;