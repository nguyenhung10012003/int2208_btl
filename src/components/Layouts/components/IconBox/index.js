import styles from './IconBox.module.scss';
import {BiSearch, BiLibrary, BiPauseCircle, BiSkipNext, BiSkipPrevious, BiPlayCircle, BiShuffle} from 'react-icons/bi';
import {BsFillPersonFill, BsCaretUp, BsCaretDown, BsRepeat, BsRepeat1, BsSend} from 'react-icons/bs'
import {AiFillHome, AiOutlineHome, AiFillHeart, AiOutlineSetting, AiOutlineHeart} from 'react-icons/ai';
import {MdPlaylistAdd, MdNavigateBefore, MdNavigateNext, MdLoop} from 'react-icons/md';
import {GiMicrophone} from 'react-icons/gi';
import {RiPlayListLine} from 'react-icons/ri';
import {RxSpeakerLoud, RxSpeakerOff} from 'react-icons/rx';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const around = `${styles['wrapper']} ${styles['around']}`;
const aroundButton = `${styles['wrapper']} ${styles['around']} ${styles['list']}`;
const large = `${styles['wrapper']} ${styles['large']}`;
const hover = `${styles['wrapper']} ${styles['hover']}`;
const activeColor = '#c273ed';

function SearchIcon() {
    return (
        <button className={styles['wrapper']}>
            <BiSearch/>
        </button>
    )
}

function UpDownIcon({isUp = true, onClick}) {
    return (
        <button onClick={onClick} className={styles['wrapper']}>
            {isUp ? <BsCaretUp/> : <BsCaretDown/>}
        </button>
    )
}

function SpeakerIcon({isMute = true, onClick}) {
    return (
        <button onClick={onClick} className={styles['wrapper']}>
            {!isMute ? <RxSpeakerLoud/> : <RxSpeakerOff/>}
        </button>
    )
}

function HomeIcon() {
    return (
        <button className={styles['wrapper']}>
            <AiFillHome/>
        </button>
    )
}

function LibraryIcon() {
    return (
        <button className={styles['wrapper']}>
            <BiLibrary/>
        </button>
    );
}

function LikeIcon({liked = false, onClick}) {
    return (
        <button onClick={onClick} className={styles['wrapper']}>
            {liked ? <AiFillHeart/> : <AiOutlineHeart/>}
        </button>
    );
}

function AddIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdPlaylistAdd/>
        </button>
    );
}

function NextIcon({onClick}) {
    return (
        <button onClick={onClick} className={large}>
            <BiSkipNext/>
        </button>
    );
}

function PreviousIcon({onClick}) {
    return (
        <button onClick={onClick} className={large}>
            <BiSkipPrevious/>
        </button>
    );
}

function PlayIcon({onClick}) {
    return (
        <button onClick={onClick} className={large}>
            <BiPlayCircle/>
        </button>
    );
}

function RandomIcon({onClick}) {
    return (
        <button onClick={onClick} className={styles['wrapper']}>
            < BiShuffle/>
        </button>
    );
}

function LoopIcon({onClick, type}) {
    if (type == 0) {
        return (
            <button onClick={onClick} className={styles['wrapper']}>
                <BsRepeat/>
            </button>
        );
    } else if (type == 1) {
        return (
            <button onClick={onClick} className={styles['wrapper']}>
                <BsRepeat color={activeColor}/>
            </button>
        );
    } else {
        return (
            <button onClick={onClick} className={styles['wrapper']}>
                <BsRepeat1 color={activeColor}/>
            </button>
        );
    }

}

function MicroIcon({onClick}) {
    return (
        <button onClick={onClick} className={styles['wrapper']}>
            <GiMicrophone/>
        </button>
    );
}


function SettingIcon() {
    return (
        <button className={around}>
            <AiOutlineSetting/>
        </button>
    );
}

function ProfileIcon() {
    const [showList, setShowList] = useState(false);

    const handleToggleList = () => {
        setShowList(!showList);
    };
    return (
        <button className={aroundButton}>
            <BsFillPersonFill onClick={handleToggleList}/>
            {showList && (
                <div onClick={handleToggleList} className={styles['background-content']}>
                    <ul className={styles['content']}>
                        <li>Tài khoản</li>
                        <li><Link to='/profile' className={styles['content-link']}>Hồ sơ</Link></li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            )}
        </button>
    );
}

function PlaylistIcon() {
    return (
        <button className={styles['wrapper']}>
            <RiPlayListLine/>
        </button>
    );
}

function NextPageIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdNavigateNext/>
        </button>
    );
}

function PrevPageIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdNavigateBefore/>
        </button>
    );
}

function PauseIcon({onClick}) {
    return (
        <button className={large} onClick={onClick}>
            <BiPauseCircle/>
        </button>
    )
}

function SendIcon({onClick}) {
    return (
        <button className={around} onClick={onClick}>
            <BsSend/>
        </button>
    )
}

export {
    SearchIcon, HomeIcon, LibraryIcon, LikeIcon, AddIcon, NextIcon, RandomIcon,
    PreviousIcon, PlaylistIcon, ProfileIcon, PlayIcon, SettingIcon, MicroIcon, LoopIcon,
    NextPageIcon, PrevPageIcon, PauseIcon, UpDownIcon, SpeakerIcon, SendIcon
}