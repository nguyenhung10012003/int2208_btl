import styles from "./Search.module.scss";
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import ListArtist from '../../components/ArtistCard/ListArtist';
import ListVideo from '../../components/VideoCard/ListVideo';
import ListSong from '../../components/SongCard/ListSongCard';
import ListPlaylist from '../../components/PlaylistCard/ListPlaylist';
import SongCard from '../../components/SongCard/SongCard';
import { useState,useEffect } from "react";

function ResultSearch({datas})  {
  var dataSong = {
    items : datas.songs,
    }
    var itemsTop =[datas.top,datas.top];
    var dataTopSong = {
      items : itemsTop,
    }
  var isArtist=true;
  var ars;
  if(datas.top) {
    isArtist = (datas.top.objectType ==='artist');
    if (!isArtist) {
      ars = Array.isArray(datas.top.artists) ? datas.top.artists[0] : datas.top.artists;
    }
  }
  const [activeButton, setActiveButton] = useState('all');
    const handleButtonClick = (index) => {
      setActiveButton(index);
  }
    return (
        <div>
        <div className={styles['search-header']}>
          <h3 className={styles['search-header-text']}>Search Result</h3> 
          <div className={styles['search-header-button']}>
            <button className={styles[activeButton === 'all' ? 'active' : ""]} onClick={() =>handleButtonClick('all')}>All</button>
            <button className={styles[activeButton === 'artists' ? 'active' : ""]} onClick={() =>handleButtonClick('artists')}>Artists</button>
            <button className={styles[activeButton === 'songs' ? 'active' : ""]} onClick={() =>handleButtonClick('songs')}>Songs</button>
            <button className={styles[activeButton === 'playlists' ? 'active' : ""]} onClick={() =>handleButtonClick('playlists')}>Playlists</button>
            <button className={styles[activeButton === 'videos' ? 'active' : ""]} onClick={() =>handleButtonClick('videos')}>Videos</button>
          </div>
        </div>
      {datas.top &&  (activeButton==='all') && <h4 className={styles['search-text1']}>Top Result</h4>}
      {datas.top &&  (activeButton==='all') && isArtist && <ArtistCard param={datas.top} value='top'/>}
      {datas.top &&  !isArtist &&  (activeButton==='all') &&
      <div className={styles['topsong']}>
      <SongCard data={dataTopSong} index={null} id={datas.top.encodeId} title={datas.top.title} img={datas.top.thumbnail} artist={ars} duration={datas.top.duration} album={''}/>
      </div>} 

      
      {!datas.artists && !datas.videos && !datas.songs && !datas.playlists && (activeButton==='all') &&
      <div className={styles['img-div']}>
      <img src={process.env.PUBLIC_URL + '/noresult.png'} alt="Nors" className={styles['img']} />
      </div>}
      {datas.songs &&  (activeButton==='all' || activeButton==='songs') && <ListSong params={datas.songs} data={dataSong}/>}
      {datas.playlists &&  (activeButton==='all' || activeButton==='playlists') && <ListPlaylist params={datas.playlists}/>}
      {datas.videos &&  (activeButton==='all' || activeButton==='videos') && <ListVideo params={datas.videos} />}
      {datas.artists && (activeButton==='all' || activeButton==='artists') && <ListArtist params={datas.artists} />}
      {!datas.artists && (activeButton==='artists') && 
      <div className={styles['img-div']}>
        <img src={process.env.PUBLIC_URL + '/noresult.png'} alt="Nors" className={styles['img']} />
      </div>}
      {!datas.artists && (activeButton==='videos') && 
      <div className={styles['img-div']}>
        <img src={process.env.PUBLIC_URL + '/noresult.png'} alt="Nors" className={styles['img']} />
      </div>}
      {!datas.artists && (activeButton==='playlists') && 
      <div className={styles['img-div']}>
        <img src={process.env.PUBLIC_URL + '/noresult.png'} alt="Nors" className={styles['img']} />
      </div>}
      {!datas.artists && (activeButton==='songs') && 
      <div className={styles['img-div']}>
        <img src={process.env.PUBLIC_URL + '/noresult.png'} alt="Nors" className={styles['img']} />
      </div>}
    </div>
    )
}

export default ResultSearch;