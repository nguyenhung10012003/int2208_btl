import styles from './DefaultLayout.module.scss'
import Header from './Header';
import Playbar from './Playbar';
import Sidebar from './Sidebar';
import {useEffect, useState} from "react";
import {usePlayer} from "../../../hooks/PlayerContext";

function DefaultLayout({ children }) {
    const [show, setShow] = useState(false);
    const {listTrack} = usePlayer();

    useEffect(() => {
        if (listTrack.length > 0) setShow(true);
        else setShow(false);
    }, [listTrack.length]);
    return (
        <div className={styles['wrapper']}>
            <Header />
            <div className={styles['container']}>
                <Sidebar />
                <div className={styles['content']}>{children}</div>
            </div>
            {show && <Playbar />}
        </div>
    );
}

export default DefaultLayout;