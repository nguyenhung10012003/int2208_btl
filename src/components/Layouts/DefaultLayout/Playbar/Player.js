import styles from './Playbar.module.scss';
import {RandomIcon, PreviousIcon, PlayIcon, NextIcon, LoopIcon, PauseIcon} from '../../components/IconBox';
import {useEffect, useRef, useState} from "react";

function Player({src, duration, nextSong, prevSong}) {

    const [isPlay, setPlay] = useState(true);
    const [loop, setLoop] = useState(0);
    const [isShuffle, setShuffle] = useState(false);
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

    }, [src]);

    useEffect(() => {
        // Set up event listener for audio end
        audioRef.current.addEventListener('ended', () => {
            if (loop == 2) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            } else if (loop == 1) {
                nextSong();
            } else {
                setPlay(false);
            }
        });

        // Clean up the event listener on unmount
        return () => {
            audioRef.current.removeEventListener('ended', () => {
                setPlay(false);
            });
        };
    }, [audioRef]);

    useEffect(() => {
        // if user press play button then we will play the currently selected music
        if (isPlay) {
            audioRef.current.play();
            startTimer();
        } else {
            // if user press pause button then we will pause the currently playing music
            console.log("pause");
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, [isPlay]);

    const onChangeTrackProgress = (e) => {
        setTrackProgress(e.target.value);
        audioRef.current.currentTime = e.target.value;
        setPlay(true);
    };
    return (
        <div className={styles['player']}>
            <div className={styles['controler']}>
                <RandomIcon onClick={toggleShuffle}/>
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