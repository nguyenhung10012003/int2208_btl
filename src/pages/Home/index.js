import Section from "../../components/Sections/Section";
import {useEffect, useState} from "react";
import HomeApi from "../../api/HomeApi";
import styles from './Home.module.scss';

function Home() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        const fetchHome = async () => {
            try {
                const response = await HomeApi.getHome();
                setDatas(response);
            } catch (err) {
                console.log(err);
            }
        }
        fetchHome();
        return () => {};
    }, [])

    return (
        <div className={styles['home']}>
            {datas.map((data, index) => {
                return (
                    <Section key={index} sectionType={data.sectionType} title={data.title} items={data.items}/>
                )
            })}
        </div>
    );
}

export default Home;