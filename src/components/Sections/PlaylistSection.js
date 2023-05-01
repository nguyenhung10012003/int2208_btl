import styles from './PlaylistSection.module.scss';
import Postcard from "../Postcards/Postcard";
import {Row, Col} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useWindow} from "../../hooks/WindowContext";

function PlaylistSection({items, limit = false}) {

    // Number slide to display
    const [num, setNum] = useState(3);

    const {windowWidth} = useWindow();
    useEffect(() => {
        console.log()
        if (windowWidth < 700) {
            setNum(1);
        } else if (windowWidth < 1200) {
            setNum(3);
        } else {
            setNum(4);
        }
    }, [windowWidth]);
    if (limit) items = items.slice(0, num);
    return (
        <div className={styles['sec-wrapper']}>
            {items.map((item, index) => {
                return (
                    <Postcard key={index} id={item.encodeId} img={item.thumbnail} description={item.title}/>
                )
            })}
        </div>
    );
}

export default PlaylistSection;