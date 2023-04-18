import Sections from "./Sections";
import Styles from './Library.module.scss';
import {useEffect, useState} from "react";
import postcardApi from "../../api/PostcardApi";


function Library() {
    let dataLibrary = [
        {
            title: 'playlist',
            cards: [
                { id: '', name: 'My Playlist', image: 'holder.js/100px160' },
                { id: '', name: 'My Playlist', image: 'holder.js/100px160' },
            ]
        }
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchLibrary = async () => {
            try {
                const response = await postcardApi.getLibrary();
                setData(response);
            } catch(err) {
                console.log(err);
            }
        }

        fetchLibrary();
    }, [])

    dataLibrary.cards = data === undefined ? dataLibrary.cards : data;
    console.log(data);
    return (
        <div className={Styles['wrapper']}>
            <div className={Styles['section-title']}>
                <h2>Playlist</h2>
            </div>
            <Sections data={data} />
        </div>
    );
}

export default Library;