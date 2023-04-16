import styles from './Purchase.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import * as orderService from '~/services/orderService';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Purchase() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const [orders, setOrders] = useState('');
    useEffect(() => {
        if (!user) {
            return;
        }
        const fetchData = async () => {
            const result = await orderService.getOrderUser(user?._id);

            setOrders(result);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('active')}>
                    <span>Tất cả</span>
                </div>
                <div>
                    <span>Chờ xác nhận</span>
                </div>
                <div>
                    <span>Đã xác nhận</span>
                </div>
                <div>
                    <span>Vận chuyển</span>
                </div>
                <div>
                    <span>Hoàn thành</span>
                </div>
                <div>
                    <span>Đã Hủy</span>
                </div>
                <div>
                    <span>Trả hàng/hoàn tiền</span>
                </div>
            </div>
            <div className={cx('body')}>
                {orders &&
                    orders.map((order, index) => (
                        <div className={'box-shadow ' + cx('container')} key={index}>
                            <div className={cx('product')}>
                                <div className={cx('status')}>{order.status}</div>
                                {order.products.map((orderDetail, indexx) => (
                                    <div key={indexx}>
                                        <div>
                                            <span>
                                                <div className={cx('product_detail')}>
                                                    <div className={cx('product_detail-img')}>
                                                        <div className={cx('img')}>
                                                            <div className={cx('no-img')}>
                                                                <img src={images.noImage} alt="" />
                                                            </div>

                                                            <div
                                                                className={cx('have-img')}
                                                                style={{ backgroundImage: `url(${orderDetail.image})` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('product_detail-text')}>
                                                        <div className={cx('detail')}>
                                                            <div>
                                                                <span>{orderDetail.name}</span>
                                                            </div>
                                                        </div>
                                                        <div className={cx('quantity')}>
                                                            <div></div>
                                                            <div>x{orderDetail.quantity}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('price')}>
                                                    <div>
                                                        <span>
                                                            {VND.format(orderDetail.price * orderDetail.quantity)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                <div className={cx('br')}></div>
                                <div className={cx('money')}>
                                    <div>
                                        <div>Thành tiền: </div>
                                        <div>{VND.format(order.totalPrice)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Purchase;
