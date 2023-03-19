import { Link } from 'react-router-dom';
import styles from './Playlist.module.scss'
import Section from './Sections';

function Playlist() {
    const data = {
        title: 'My playlist',
        img: 'holder.js/100px160',
        listSong: [
            {name: 'Song 1', img: 'holder.js/100px160' , singer: 'Singer1', album: 'album1', duration: '3:46'},
            {name: 'Song 2', img: 'holder.js/100px160' , singer: 'Singer2', album: 'album1', duration: '3:41'}

        ]
    };

    return (
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
                <div className={styles['header__img']}>
                    <img src={data.img} alt='Img - playlist'/>
                </div>
                <div className={styles['header__infor']}>
                    <div className={styles['infor__heading']}>
                        <span className={styles['text-playlist']}>Playlist</span>
                        <h2 className={styles['heading-text']}>{data.title}</h2>
                    </div>
                    <div className={styles['infor__description']}>
                        <Link to='/profile' className={styles['infor_link-profile']}>Create by me</Link>
                        <span className={styles['numberOfSong']}> . {data.listSong.length} songs</span>
                    </div>
                </div>
            </header>
            <div className={styles['content']}>
                <div className={styles['viewport']}>
                    <div className={styles['playAndPause-icon']}>
                        <i className="fa-solid fa-circle-play"></i>
                        {/* <i class="fa-solid fa-circle-pause"></i> */}
                    </div>
                </div>
                <div className={styles['content-spacing']}>
                    <div className={styles['header-content']}>
                        <div className={styles['header-serial']}>
                            <span>#</span>
                        </div>
                        <div className={styles['header-title']}>
                            <span>Title</span>
                        </div>
                        <div className={styles['header-album']}>
                            <span>Album</span>
                        </div>
                        <div className={styles['header-duration']}>
                            <span>Duration</span>
                        </div>
                    </div>
                    <div className={styles['content__list-song']}>
                        <Section data={data}></Section>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Playlist;