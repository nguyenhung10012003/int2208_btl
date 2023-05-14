import styles from './IconBox.module.scss';
import {BiLibrary, BiPauseCircle, BiSkipNext, BiSkipPrevious, BiPlayCircle, BiShuffle} from 'react-icons/bi';
import {BsFillPersonFill, BsCaretUp, BsCaretDown, BsRepeat, BsRepeat1, BsSend} from 'react-icons/bs'
import {AiFillHome, AiOutlineHome, AiFillHeart, AiOutlineSetting, AiOutlineHeart} from 'react-icons/ai';
import {MdPlaylistAdd, MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
import {GiMicrophone} from 'react-icons/gi';
import {RiPlayListLine, RiSearchLine, RiSearchFill} from 'react-icons/ri';
import {RxSpeakerLoud, RxSpeakerOff} from 'react-icons/rx';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from "../../../../hooks/AuthContext";


const around = `${styles['wrapper']} ${styles['around']}`;
const aroundButton = `${styles['wrapper']} ${styles['around']} ${styles['list']}`;
const large = `${styles['wrapper']} ${styles['large']}`;
const hover = `${styles['wrapper']} ${styles['hover']}`;
const activeColor = '#c273ed';

function SearchIcon({active}) {
    return (
        <button className={styles['wrapper']}>
            {active ? <RiSearchFill/> :<RiSearchLine/>}
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

function HomeIcon({active}) {
    return (
        <button className={styles['wrapper']}>
            {active ? <AiFillHome/> : <AiOutlineHome/>}
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

function RandomIcon({onClick, active}) {
    return (
        <button onClick={onClick} className={styles['wrapper']}>
            < BiShuffle style={active && {color: activeColor}}/>
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
    const { handleLogout } = useAuth(); 
    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

            handleLogout();
            navigate('/');
    }

    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div>
            <Button className={aroundButton} ref={target} onClick={() => setShow(!show)}>
                <BsFillPersonFill/>
                <Overlay target={target.current} show={show} placement="bottom">
                    {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                    }) => (
                        <div className={styles['main-content']}
                        {...props}
                        style={{
                            position: 'absolute',
                            padding: '2px 10px',
                            color: 'blue',
                            borderRadius: 3,
                            ...props.style,
                        }}
                        >
                            <ul className={styles['content']}>
                                <li><Link to='/profile' className={styles['content-link']}>Tài khoản</Link></li>
                                {isLoggedIn && (
                                <li><Link to='/' onClick={handleSubmit} className={styles['content-link']}>Đăng xuất</Link></li>
                                )}
                            </ul>
                        </div>
                        )}
                    </Overlay>
            </Button>
        </div>
        
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