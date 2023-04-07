import styles from './IconBox.module.scss';
import { BiSearch, BiLibrary, BiPauseCircle, BiSkipNext, BiSkipPrevious, BiPlayCircle, BiShuffle } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome, AiOutlineHome, AiFillHeart, AiOutlineSetting, AiOutlineHeart } from 'react-icons/ai';
import { MdPlaylistAdd, MdNavigateBefore, MdNavigateNext, MdLoop } from 'react-icons/md';
import { GiMicrophone } from 'react-icons/gi'
import { RiPlayListLine } from 'react-icons/ri'
import React, { useState } from 'react';


const around = `${styles['wrapper']} ${styles['around']}`;
const aroundButton = `${styles['wrapper']} ${styles['around']} ${styles['list']}`;
const large = `${styles['wrapper']} ${styles['large']}`;

function SearchIcon() {
    return (
        <button className={styles['wrapper']}>
            <BiSearch />
        </button>
    )
}

function HomeIcon() {
    return (
        <button className={styles['wrapper']}>
            <AiFillHome />
        </button>
    )
}

function LibraryIcon() {
    return (
        <button className={styles['wrapper']}>
            <BiLibrary />
        </button>
    );
}

function LikeIcon() {
    return (
        <button className={styles['wrapper']}>
            <AiFillHeart />
        </button>
    );
}

function AddIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdPlaylistAdd />
        </button>
    );
}

function NextIcon() {
    return (
        <button className={large}>
            <BiSkipNext />
        </button>
    );
}

function PreviousIcon() {
    return (
        <button className={large}>
            <BiSkipPrevious />
        </button>
    );
}

function PlayIcon() {
    return (
        <button className={large}>
            <BiPlayCircle />
        </button>
    );
}

function RandomIcon() {
    return (
        <button className={styles['wrapper']}>
            < BiShuffle />
        </button>
    );
}

function LoopIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdLoop />
        </button>
    );
}

function MicroIcon() {
    return (
        <button className={styles['wrapper']}>
            <GiMicrophone />
        </button>
    );
}


function SettingIcon() {
    return (
        <button className={around}>
            <AiOutlineSetting />
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
                <ul className={styles['content']}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            )}
        </button>
    );
}

function PlaylistIcon() {
    return (
        <button className={styles['wrapper']}>
            <RiPlayListLine />
        </button>
    );
}

function NextPageIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdNavigateNext />
        </button>
    );
}

function PrevPageIcon() {
    return (
        <button className={styles['wrapper']}>
            <MdNavigateBefore />
        </button>
    );
}

export {
    SearchIcon, HomeIcon, LibraryIcon, LikeIcon, AddIcon, NextIcon, RandomIcon,
    PreviousIcon, PlaylistIcon, ProfileIcon, PlayIcon, SettingIcon, MicroIcon, LoopIcon,
    NextPageIcon, PrevPageIcon
}