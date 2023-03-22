import styles from './AccountLayout.module.scss'
import Header from './Header';
import Sidebar from './Sidebar';

function AccountLayout({ children }) {
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

export default AccountLayout;