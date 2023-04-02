import classNames from 'classnames/bind';
import styles from './Trademark.module.scss';

const cx = classNames.bind(styles);

function Trademark() {
    return (
        <div className={cx('wrapper')}>
            <h2>Thương hiệu nổi bật</h2>
            <div className={cx('trademark_list')}>
                <div className={cx('trademark_item')}>
                    <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/samsungnew-220x48-1.png" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/vivo-logo-220-220x48-3.png" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/Realme42-b_37.png" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/tcl-logo-lon-220x48.jpg" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/Mobell42-b_19.jpg" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/Itel42-b_54.jpg" alt="" />
                </div>
                <div className={cx('trademark_item')}>
                    <img src="//cdn.tgdd.vn/Brand/1/Masstel42-b_0.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Trademark;
