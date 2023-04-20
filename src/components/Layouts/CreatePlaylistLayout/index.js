import styles from './CreatePlaylistLayout.module.scss'
import Header from '../DefaultLayout/Header';
import Playbar from '../DefaultLayout/Playbar';
import Sidebar from '../DefaultLayout/Sidebar';

function CreatePlaylistLayout({ children }) {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['wrapper-content']}>
                <Header />
                <div className={styles['container']}>
                    <Sidebar />
                    <div className={styles['content']}></div>
                </div>
                <Playbar />
            </div>
            <div className={styles['wrapper-form']}>
                <div className={styles['form-create']}>{children}</div>
            </div>
        </div>
    );
}

export default CreatePlaylistLayout;