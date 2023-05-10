import styles from "./Search.module.scss"
import SongCard from '../../components/SongCard/SongCard';
function DefaultSearch({datas}) {
    return (
        <div>
        <div className={styles['search-banner']}>
            <img src={datas.banner} className={styles['search-banner-img']}/>
        </div>
            <div className={styles['playAndPause-icon']}>
                        <i className="fa-solid fa-circle-play"></i>
            </div>
        <div className={styles['header-content']}>
              <div className={styles['header-serial']}>
                  <span>#</span>
              </div>
              <div className={styles['header-title']}>
                 <span>Title</span>
              </div>
              <div className={styles['header-duration']}>
                  <span>Duration</span>
               </div>
         </div>
         {datas.items?.map((item,index) => {
            var alb={
                id: index,
                name: item.title,
            }
            var ars={
                id: item.artists[0].id,
                name: item.artists[0].name,
                img: item.artists[0].thumbnailM
            }
            return (
            <SongCard key={index} index={index} id={item.encodeId} title={item.title} img={item.thumbnail} artist={ars} duration={item.duration} album={alb}/>
            )
        })}
    </div>
    );
}

export default DefaultSearch;
