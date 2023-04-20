import Styles from './Section.module.scss';
import Banner from "./Banner";
import {Link} from "react-router-dom";
import PlaylistSection from "./PlaylistSection";

function Section({sectionType, title, items}) {
    const show = !!items;
    if (!show) return (<></>);
    else {
        if (sectionType === 'banner') {
            return (
                <div className={Styles['wrapper']}>
                    <Banner items={items}/>
                </div>
            )
        }
        else if (sectionType === 'playlist') {
            return(
                <div className={Styles['playlist-wrapper']}>
                    <div className={Styles['header']}>
                        <h2>{title}</h2>
                        <Link to={'/'}>Show all</Link>
                    </div>
                    <PlaylistSection items={items} limit={true}/>
                </div>
            )
        }

    }
}

export default Section;