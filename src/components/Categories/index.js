import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';

const cx = classNames.bind(styles);

function Categories() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/phone">
                    <div className={cx('item')}>
                        <span>Điện thoại</span>
                    </div>
                </Link>
                <Link to="/bumper">
                    <div className={cx('item')}>
                        <span>Ốp lưng</span>
                    </div>
                </Link>
                <Link to="/charge">
                    <div className={cx('item')}>
                        <span>Sạc &#38; sạc dự phòng</span>
                    </div>
                </Link>
                <Link to="/headphone">
                    <div className={cx('item')}>
                        <span>Tai nghe</span>
                    </div>
                </Link>
                <Link to="/screenProtector">
                    <div className={cx('item')}>
                        <span>Miếng dán màn hình</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Categories;
