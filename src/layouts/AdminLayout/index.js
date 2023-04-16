import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/components/Admin/Sidebar';
import Header from '~/components/Admin/Header';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('main')}>
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
