import styles from './Dashboard.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Dashboard() {
    return <div className={cx('wrapper')}>Welcome to the site for admin</div>;
}

export default Dashboard;
