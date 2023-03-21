import styles from './ProfileLayout.module.scss'
import Header from './Header';
import Sidebar from './Sidebar';

function ProfileLayout({ children }) {
    return ( 
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default ProfileLayout;