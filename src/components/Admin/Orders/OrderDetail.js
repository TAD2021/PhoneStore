import styles from './OrderDetail.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import * as orderService from '~/services/orderService';

const cx = classNames.bind(styles);

function OrderDetail(props) {
    const [status, setStatus] = useState(props.data.status);
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    const handleUpdateOrder = () => {
        const updateOrder = async () => {
            await orderService.updateOrder(props.data._id, status);
        };
        updateOrder();
        props.callbackOrderDetailModal(false);
    };
    return (
        <div className={cx('modal')} onClick={() => props.callbackOrderDetailModal(false)}>
            <div className={cx('modal__overlay')}></div>
            <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <h3>Chi tiết đơn hàng</h3>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={cx('close_icon')}
                                onClick={(e) => props.callbackOrderDetailModal(false)}
                            />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Mã đơn hàng</td>
                                    <td>{props.data._id}</td>
                                </tr>
                                <tr>
                                    <td>Tên người mua</td>
                                    <td>{props.data.name}</td>
                                </tr>
                                <tr>
                                    <td>Sản phẩm</td>
                                    <td>
                                        {props.data.products.map(
                                            (productInOrder, index) =>
                                                `${productInOrder.name}x${productInOrder.quantity}${
                                                    (index !== props.data.products.length - 1 && ', ') || ''
                                                }`,
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tổng thanh toán</td>
                                    <td>{VND.format(props.data.totalPrice)}</td>
                                </tr>
                                <tr>
                                    <td>Trạng thái đơn hàng</td>
                                    <td>
                                        {status !== 'Chờ xác nhận' ? (
                                            <input value={status} onChange={(e) => setStatus(e.target.value)} />
                                        ) : (
                                            status
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>{props.data.phone}</td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ nhận hàng</td>
                                    <td>{props.data.address}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        {status !== 'Chờ xác nhận' && (
                                            <button className="button-primary" onClick={handleUpdateOrder}>
                                                Lưu
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
