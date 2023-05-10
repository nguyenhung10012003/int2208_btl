import styles from './ListMusic.module.scss';
import { Link } from "react-router-dom";

function ListMusic({data}) {
    return (
        <div className={styles['list']}>
            {
                data.map((item, index) => {
                    if(index < 5)
                    return (
                        <Link to={{
                                pathname: `/playlist/${item._id}`
                            }} className={styles['link-playlist']}>
                                <div key={index} className={styles['list-content']}>
                                    <div>
                                        <div className={styles['list-content_img']}>
                                            <img src={item.image} className={styles['content_img']}></img>
                                            <i className={`${styles.iconPlay} fa-sharp fa-solid fa-circle-play`}></i>
                                        </div>
                                        <h3 className={styles['list-content_text']}>{item.name}</h3>
                                    </div>
                                </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default ListMusic;