import {Link} from 'react-router-dom'
import styles from './InforSong.module.scss'

function InforSong() {
    const data = {
        name: 'Name song',
        img: 'holder.js/100px160',
        singer: {
            name: 'Singer name',
            img: "https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
        },
        duration: '3:00',
        // eslint-disable-next-line no-useless-concat
        lyric: `They go crazy
        Yeah
        
        They comin' in and out, in and out, in and out
        
        Trap spot boomin'
        
        Got the money comin' in, it ain't no issues
        
        I just a fucked a rapper bitch, I should diss you
        
        Got the Mac 11 cocked, it got the kick too
        
        Servin' niggas like Doughbeezy in my house shoes
        
        Ya baby mama fuck me better when the rent's due
        
        I just a fucked a rapper bitch, I should diss you
        
        She sucked my dick, she came home, I bet she kissed you
        
        Treat me like I'm Al Capone, nigga, fuck you
        
        John Gotti, Illuminati, nigga, fuck you
        
        I put a middle finger up, because, fuck you
        
        This money got me geekin' up, nigga, fuck you
        
        Red bottoms with the fur like Frank Luc
        
        I bought some VVS and she caught the chain flu
        
        I fucked this R&B bitch, I should thank you
        
        Yah, I was sippin' my codeine from the beginnin'
        
        She jocked my whole team, she seen who's winnin'
        
        We light Liv up on a Sunday, come see us livin'
        
        This for my dogs on the one way in penitentiaries
        
        Send a direct hit, you gotta pay attention
        
        I just lit my wrist up, I need some more attention
        
        She didn't wanna play fair, I put her on suspension
        
        I put a key on Greyhound now I'm in a new dimension
        
        Offered her 25, keep tryin' to take some of my percentage
        
        I was petrified you know my right wrist authentic
        
        I get glorified, that Richard Mille cost 250`
    };

    return ( 
        <div className={styles['wrapper']}>
            <header className={styles['header']}>
                <div className={styles['header__img']}>
                    <img src={data.img} alt='Img - playlist'/>
                </div>
                <div className={styles['header__infor']}>
                    <div className={styles['infor__heading']}>
                        <span className={styles['text-playlist']}>Song</span>
                        <h2 className={styles['heading-text']}>{data.singer.name}</h2>
                    </div>
                    <div className={styles['infor__description']}>
                    <img src={data.singer.img} alt=''/>
                        <Link to='/profile' className={styles['infor_link-singer']}>{data.singer.name}</Link>
                        <span className={styles['duration-song']}> . {data.duration}</span>
                    </div>
                </div>
            </header>
            <div className={styles['content']}>
                <div className={styles['viewport']}>
                    <div className={styles['playAndPause-icon']}>
                        <i className={"fa-solid fa-circle-play"}></i>
                        {/* <i class="fa-solid fa-circle-pause"></i> */}
                    </div>
                </div>
                <div className={styles['content-spacing']}>
                    <h3>Lyrics</h3>
                    <span className={styles['content__lyrics']}>
                        {data.lyric}
                    </span>
                    <div className={styles['content__artist']}>
                        <div className={styles['artist-img']}>
                            <img src={data.singer.img} alt=''/>
                        </div>
                        <div className={styles['artist-descripton']}>
                            <span>Artist</span>
                            <a href='/profile-artist'>{data.singer.name}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default InforSong;