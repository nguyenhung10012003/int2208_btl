import styles from "./LikedSong.module.scss";
import React, { useState,useEffect } from 'react';
import UserApi from "../../api/UserApi";
import SongApi from "../../api/SongApi";
import SongCard from "../../components/SongCard/SongCard";
import ListSong from "../../components/SongCard/ListSongCard";
import { useAuth } from "../../hooks/AuthContext";
function LikedSong() {
    const {getUser} = useAuth();
    const user = getUser();
    const [songs,setSongs] = useState([]);
    const [name,setName] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Gọi API để lấy danh sách userIds
            const response = await UserApi.getUserById(user.id);
            setName(response.name);
            const likeSongResponse = response.likeSong;
            // Tạo mảng chứa các promise gọi API lấy dữ liệu bài hát
            const songPromises = likeSongResponse.map(async songId => {
              const songResponse = await SongApi.getInfoSong(songId);
              return songResponse.data;
            });
            
            // Chờ cho tất cả các promise hoàn thành và lấy kết quả
            const songResults = await Promise.all(songPromises);
            console.log(songResults);
            // Cập nhật state với mảng dữ liệu bài hát
            setSongs(songResults);
          } catch (error) {
            console.log(error);
          }
        }
        fetchData();
      }, []);
    const datas = {
        items:songs,
    }
    return (
        <div>
            <div className={styles['wrapper']}>
                <div className={styles['card']}>
                  <img src={process.env.PUBLIC_URL + '/heart.png'} className={styles['card-img']}/>
                </div>
                <div className="text">
                  <div className={styles['card-body']}>
                    <h6 className={styles['card-body-playlist']}>Playlist</h6>
                    <h4 className={styles['card-body-liked']}>
                        Liked Song
                    </h4>
                    <p className={styles['card-body-name']}>{`${name} : ${songs.length} songs`}</p>
                  </div>
                </div>
            </div>
            <div>
                <ListSong data={datas} params={songs} />
            </div>
        </div>
    )
}

export default LikedSong;