import styles from './Playbar.module.scss';
import {RandomIcon, PreviousIcon, PlayIcon, NextIcon, LoopIcon, PauseIcon} from '../../components/IconBox';
import {useEffect, useRef, useState} from "react";
import {usePlayer} from "../../../../hooks/PlayerContext";

function Player({src, duration}) {

    const {soundValue, isPlay, setPlay, loop,
        prevSong, nextSong, autoNext,
        setLoop, isShuffle, setShuffle} = usePlayer();
    const audioRef = useRef(new Audio(src));
    const intervalRef = useRef();
    const [trackProgress, setTrackProgress] = useState(0);
    const trackProgressStyling = `linear-gradient(to right, #ffffff ${trackProgress / duration * 100}%, 
        grey ${trackProgress / duration * 100}%)`;

    const togglePlay = () => {
        setPlay(!isPlay);
    }

    const toggleLoop = () => {
        setLoop(loop === 2 ? 0 : loop + 1);
    }

    const toggleShuffle = () => {
        setShuffle(!isShuffle);
    }
    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setTrackProgress(audioRef.current.currentTime);
        }, 1000);
    };

    useEffect(() => {
        // if a music is already playing then we will stop it and assign currently selected one
        audioRef.current.pause();
        audioRef.current = null;
        // new audio initialize
        audioRef.current = new Audio(src);
        audioRef.current.muted = false;
        //playing initialize audio
        audioRef.current.play();
        // set isPlaying true when music started playing
        setPlay(true);
        setTrackProgress(0);
        // start progress of the audio
        startTimer();

        // Set up event listener for audio end
        audioRef.current.addEventListener('ended', () => {
            autoNext();
        });

        // Clean up the event listener on unmount
        return () => {
            audioRef.current.removeEventListener('ended', () => {
                setPlay(false);
            });
        };

    }, [src]);

    useEffect(() => {
        audioRef.current.volume = soundValue / 100;
    }, [soundValue])

    useEffect(() => {
        audioRef.current.loop = (loop === 2);
    }, [loop])

    useEffect(() => {
        // if user press play button then we will play the currently selected music
        if (isPlay) {
            audioRef.current.play();
            startTimer();
        } else {
            // if user press pause button then we will pause the currently playing music
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, [isPlay]);

    const onChangeTrackProgress = (e) => {
        setTrackProgress(e.target.value);
        audioRef.current.currentTime = e.target.value;
        audioRef.current.play();
        setPlay(true);
    };
    return (
        <div className={styles['player']}>
            <div className={styles['controler']}>
                <RandomIcon active={isShuffle} onClick={toggleShuffle}/>
                <PreviousIcon onClick={prevSong}/>
                {!isPlay ? <PlayIcon onClick={togglePlay}/> : <PauseIcon onClick={togglePlay}/>}
                <NextIcon onClick={nextSong}/>
                <LoopIcon onClick={toggleLoop} type={loop}/>
            </div>
            <div className={styles["audio-player-progress"]}>
                <input
                    type="range"
                    min={"0"}
                    step={"1"}
                    max={duration ? duration : 0}
                    value={trackProgress}
                    onChange={onChangeTrackProgress}
                    style={{background: trackProgressStyling, width: `100%`}}
                />
            </div>
        </div>
    );
}

export default Player;