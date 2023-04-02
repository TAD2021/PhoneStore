import styles from './Purchase.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Purchase() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('active')}>
                    <span>Tất cả</span>
                </div>
                <div>
                    <span>Chờ thanh toán</span>
                </div>
                <div>
                    <span>Vận chuyển</span>
                </div>
                <div>
                    <span>Hoàn thành</span>
                </div>
                <div>
                    <span>Đã hủy</span>
                </div>
                <div>
                    <span>Trả hàng/hoàn tiền</span>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={'box-shadow ' + cx('container')}>
                    <div className={cx('product')}>
                        <div className={cx('status')}>ĐÃ HỦY</div>
                        <Link to="/phone/Surface%20Laptop%203%2015">
                            <div>
                                <div>
                                    <span>
                                        <div className={cx('product_detail')}>
                                            <div className={cx('product_detail-img')}>
                                                <div className={cx('img')}>
                                                    <div className={cx('no-img')}>
                                                        <img src={images.noImage} alt="" />
                                                    </div>

                                                    <div className={cx('have-img')}></div>
                                                </div>
                                            </div>
                                            <div className={cx('product_detail-text')}>
                                                <div className={cx('detail')}>
                                                    <div>
                                                        <span>
                                                            Điện thoại di động Galaxy S23 Ultra hoàn toàn mới chính hãng
                                                            Điện thoại trò chơi thể thao điện tử Android 5G hỗ trợ COD
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={cx('quantity')}>
                                                    <div></div>
                                                    <div>x1</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('price')}>
                                            <div>
                                                <span>11.200.000</span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <div className={cx('br')}></div>
                        <div className={cx('money')}>
                            <div>
                                <div>Thành tiền: </div>
                                <div>11.230.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchase;
