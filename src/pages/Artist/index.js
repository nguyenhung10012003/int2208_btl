import styles from './Artist.module.scss';
import { useEffect, useState } from "react";
import HomeApi from "../../api/HomeApi";
import Section from "../../components/Sections/Section";
import { useParams } from 'react-router-dom';
// import { response } from 'express';

function Artist() {

    const [datas, setDatas] = useState([]);
    const params = useParams();
    console.log(params)
    useEffect(() => {
        const fetchHome = async () => {
            try {
                const response = await HomeApi.getArtist(params.name);
                setDatas(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchHome();
    }, [])
    
    let biography = datas?.biography?.replace(/(<br>|[\r\n])/g, '');

    return (
        <div className={styles['artist-page']}>
            <header className={styles['artist-header']}>
                <div className={styles['header__img']}>
                    <img src={datas?.thumbnailM} alt='Img - playlist' />
                </div>
                <div className={styles['header__infor']}>
                    <div className={styles['infor__heading']}>
                        <span className={styles['text-artist']}>Artist</span>
                        <h2 className={styles['heading-text']}>{datas?.name}</h2>
                    </div>
                    <p className={styles['biography-artist']}>
                        {biography}
                    </p>
                </div>
            </header>
            <body className={styles['artist-home-content']}>
                {datas?.sections?.map((data, index) => {
                    return (
                        <Section key={index} sectionType={data.sectionType} title={data.title} items={data.items} />
                    )
                })}
            </body>
        </div>

    );
}

export default Artist;