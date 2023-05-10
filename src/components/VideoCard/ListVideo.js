import VideoCard from "./VideoCard";
import React from "react";
import styles from "./ListVideo.module.scss"
function ListVideo({params}) {
    return (
    <div className={styles['wrapper']}>
        <h4 className={styles['search-text-video']}>Videos</h4>
              <div className={styles['search-video-wrapper']}>
              {
                params?.map((param,index) => {
                    return (
                      <VideoCard key={index} param={param}/>
                    )
                })
              }
        </div>
    </div>
    );
}
export default ListVideo;