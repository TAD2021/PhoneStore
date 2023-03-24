import styles from './AdminLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <div className={cx('')}>
            <div>header</div>
            {children}
        </div>
    );
}

export default AdminLayout;
