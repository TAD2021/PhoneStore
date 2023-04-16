import styles from './AdminLoginLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminLoginLayout({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default AdminLoginLayout;
