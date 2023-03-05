import styles from './DefaultLayout.module.scss'
import Header from './Header';
import Playbar from './Playbar';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className={styles['wrapper']}>
            <Header />
            <div className={styles['container']}>
                <Sidebar />
                <div className={styles['content']}>{children}</div>
            </div>
            <Playbar />
        </div>
    );
}

export default DefaultLayout;