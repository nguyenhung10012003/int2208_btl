import styles from './Playbar.module.scss';
import {LikeIcon, UpDownIcon, SpeakerIcon} from "../../components/IconBox";
import {useEffect, useState} from "react";

function ControlRight({songId}) {
    const [isMute, setMute] = useState(false);
    const [soundValue, setSoundValue] = useState(100);
    const [liked, setLiked] = useState();
    const [slideUp, setSlideUp] = useState(false);
    const handleToggleMute = () => {
        if (isMute) setSoundValue(100);
        else setSoundValue(0);
        setMute(!isMute);
    }

    const onChangeValue = (e) => {
        setSoundValue(e.target.value);
    }
    useEffect(() => {
        if (soundValue == 0) setMute(true);
        else setMute(false);
    }, [soundValue])

    return (
        <div className={styles['control-right']}>
            <LikeIcon liked={liked}/>
            <SpeakerIcon isMute={isMute} onClick={handleToggleMute}/>
            <input
                type={'range'}
                min={0}
                max={100}
                step={1}
                onChange={onChangeValue}
                value={soundValue}
            />
            <UpDownIcon isUp={!slideUp}/>
        </div>
    );
}

export default ControlRight;