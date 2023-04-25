import styles from './Orders.module.scss';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import * as orderService from '~/services/orderService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import OrderDetail from './OrderDetail';

const cx = classNames.bind(styles);

function Orders() {
    const [orders, setOrders] = useState('');
    const [order, setOrder] = useState('');
    const [orderDetailModal, setOrderDetailModal] = useState(false);
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await orderService.getAllOrder();
            setOrders(result);
        };

        fetchData();
    }, []);
    const handleConfirmOrder = (e, products) => {
        const cofirmOrder = async () => {
            await orderService.updateOrder(e.target.value, products, 'ĐÃ XÁC NHẬN');
            const result = await orderService.getAllOrder();
            setOrders(result);
        };

        cofirmOrder();
    };

    const handleShowOrderDetailModal = (e) => {
        setOrder(orders[e.target.value]);
        setOrderDetailModal(true);
    };

    const callbackOrderDetailModal = (childrenData) => {
        setOrderDetailModal(childrenData);
    };

    const handleDelete = (e) => {
        const deleteOrder = async () => {
            await orderService.deleteOrder(e.target.value);
            const result = await orderService.getAllOrder();
            setOrders(result);
        };
        deleteOrder();
    };

    return (
        <Fragment>
            {orderDetailModal && <OrderDetail callbackOrderDetailModal={callbackOrderDetailModal} data={order} />}
            <div className={cx('wrapper')}>
                <div className={cx('new_order')}>
                    <h3>Đơn hàng mới</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Tên người mua</th>
                                <th>Sản phẩm</th>
                                <th>Tổng thanh toán</th>
                                <th>Trạng thái</th>
                            </tr>
                            {orders &&
                                orders.map(
                                    (order, index) =>
                                        order.status === 'CHỜ XÁC NHẬN' && (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{order.name}</td>
                                                <td>
                                                    {order.products.map(
                                                        (productInOrder, index) =>
                                                            `${productInOrder.name}x${productInOrder.quantity}${
                                                                (index !== order.products.length - 1 && ', ') || ''
                                                            }`,
                                                    )}
                                                </td>
                                                <td>{VND.format(order.totalPrice)}</td>
                                                <td>{order.status}</td>
                                                <td className={cx('info')}>
                                                    <button
                                                        className={cx('info_icon')}
                                                        onClick={handleShowOrderDetailModal}
                                                        value={index}
                                                    >
                                                        Chi tiết
                                                    </button>
                                                </td>
                                                <td className={cx('update')}>
                                                    <button
                                                        className={cx('update_icon')}
                                                        value={order._id}
                                                        onClick={(e) => handleConfirmOrder(e, order.products)}
                                                    >
                                                        Xác nhận
                                                    </button>
                                                </td>
                                                <td className={cx('delete')}>
                                                    <button
                                                        className={cx('delete_icon')}
                                                        value={order._id}
                                                        onClick={(e) => handleDelete(e)}
                                                    >
                                                        Hủy bỏ
                                                    </button>
                                                </td>
                                            </tr>
                                        ),
                                )}
                        </tbody>
                    </table>
                </div>
                <div className={cx('searchWrapper')}>
                    <input type="text" className={cx('inputSearch')} placeholder="Tìm đơn theo mã" />
                    <FontAwesomeIcon icon={faSearch} className={cx('searchIcon')} />
                </div>
                <div className={cx('order_list')}>
                    <h3>Danh sách đơn hàng</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Tên người mua</th>
                                <th>Sản phẩm</th>
                                <th>Tổng thanh toán</th>
                                <th>Trạng thái</th>
                            </tr>
                            {orders &&
                                orders.map(
                                    (order, index) =>
                                        order.status !== 'CHỜ XÁC NHẬN' && (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{order.name}</td>
                                                <td>
                                                    {order.products.map(
                                                        (productInOrder, index) =>
                                                            `${productInOrder.name}x${productInOrder.quantity}${
                                                                (index !== order.products.length - 1 && ', ') || ''
                                                            }`,
                                                    )}
                                                </td>
                                                <td>{VND.format(order.totalPrice)}</td>
                                                <td>{order.status}</td>
                                                <td className={cx('update')}>
                                                    <button
                                                        className={cx('update_icon')}
                                                        onClick={handleShowOrderDetailModal}
                                                        value={index}
                                                    >
                                                        Cập nhật
                                                    </button>
                                                </td>
                                                <td className={cx('delete')}>
                                                    <button
                                                        className={cx('delete_icon')}
                                                        value={order._id}
                                                        onClick={(e) => handleDelete(e)}
                                                    >
                                                        Hủy bỏ
                                                    </button>
                                                </td>
                                            </tr>
                                        ),
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default Orders;
