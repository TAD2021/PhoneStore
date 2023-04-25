import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AddressModal from '~/components/AddressModal';
import * as orderService from '~/services/orderService';
import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);

function Checkout() {
    const [showProduct, setShowProduct] = useState(true);
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [specificAddress, setSpecificAddress] = useState('');

    const handleShowProduct = () => setShowProduct(!showProduct);
    const [modal, setModal] = useState(false);
    const [location, setLocation] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.auth.login.currentUser);

    const callbackModal = (childData) => {
        setModal(childData);
    };
    const callbackLocation = (childData) => {
        setLocation(childData);
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const hanleOrder = async () => {
        const userId = user?._id;
        const productItem = cart.map((product) => ({ id: product._id, quantity: product.quantity }));
        const newAddress = location.concat(', ', specificAddress);
        const data = {
            user: userId,
            products: productItem,
            name: username,
            phone,
            address: newAddress,
        };

        await orderService.createOrder(data, dispatch);
    };

    useEffect(() => {
        cart.length === 0 && navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    useEffect(() => {
        if (user) {
            setUsername(user.name);
            setPhone(user?.phone);
            setLocation(user?.address);
            setSpecificAddress(user?.specificAddress);
        }
    }, [user]);

    return (
        <Fragment>
            <main className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h4 className={cx('header')}>Đặt hàng</h4>
                    <div className={cx('body')}>
                        <div className={'box-shadow ' + cx('user_info')}>
                            <div className={cx('user_info-header')}>Thông tin người nhận</div>
                            <div className={cx('user_info-body')}>
                                <label>
                                    <span>
                                        <span>Họ và tên</span>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                        value={username}
                                        className="text-field__wrapper"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span>
                                        <span>Số điện thoại</span>
                                    </span>
                                    <input
                                        className="text-field__wrapper"
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span>
                                        <span>Chọn khu vực</span>
                                    </span>
                                    <div
                                        className={cx('address', 'text-field__wrapper')}
                                        onClick={() => setModal(true)}
                                    >
                                        <input type="text" placeholder="Chọn khu vực" readOnly value={location} />
                                        <span>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                    </div>
                                </label>
                                <label>
                                    <span>
                                        <span>Địa chỉ nhận hàng</span>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Nhập địa chỉ cụ thể"
                                        className="text-field__wrapper"
                                        value={specificAddress}
                                        onChange={(e) => setSpecificAddress(e.target.value)}
                                    />
                                    <div className={cx('message')}>
                                        <span>Có thể là số nhà, tên đường, tòa nhà. VD: Số 53 Thái Hà</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className={cx('product_info')}>
                            <div className={cx('summary_container', 'box-shadow')}>
                                <h5>Tóm tắt đơn hàng</h5>
                                <div className={cx('detail')}>
                                    <div>
                                        <span>Tạm tính</span>
                                        <span>
                                            {VND.format(
                                                cart.reduce(
                                                    (acc, cart) =>
                                                        acc +
                                                        cart.quantity * (cart.price - cart.discount || cart.price),
                                                    0,
                                                ),
                                            )}
                                        </span>
                                    </div>
                                    <div>
                                        <span>Vận chuyển</span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className={cx('total')}>
                                    <span>Tổng cộng</span>
                                    <span className={cx('text-pink')}>
                                        {VND.format(
                                            cart.reduce(
                                                (acc, cart) =>
                                                    acc + cart.quantity * (cart.price - cart.discount || cart.price),
                                                0,
                                            ),
                                        )}
                                    </span>
                                </div>
                                <Link to="/checkout">
                                    <button
                                        className={cx('buy')}
                                        disabled={!username || !phone || !location || !specificAddress}
                                        onClick={hanleOrder}
                                    >
                                        Đặt hàng
                                    </button>
                                </Link>
                            </div>
                            <div className={cx('allproduct', 'box-shadow')}>
                                <div className={cx('allproduct_header')} onClick={handleShowProduct}>
                                    <div>Sản phẩm trong đơn ({cart.length})</div>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                                <div
                                    className={cx('allproduct_body')}
                                    style={showProduct ? { display: 'block' } : { display: 'none' }}
                                >
                                    <div>
                                        {cart.map((cartItem, index) => (
                                            <div className={cx('product_item')} key={index}>
                                                <div className={cx('product_item-img')}>
                                                    <img src={cartItem.image} alt="" />
                                                </div>
                                                <div className={cx('product_item-info')}>
                                                    <div className={cx('product_item-info-name')}>
                                                        {cartItem.nameProduct}
                                                    </div>
                                                    <div className={cx('product_item-info-configuration')}>
                                                        <div>{`${cartItem.memory}, ${cartItem.color}`}</div>
                                                    </div>
                                                    <div className={cx('product_item-info-price')}>
                                                        <span>
                                                            {VND.format(
                                                                cartItem.price - cartItem.discount || cartItem.price,
                                                            )}
                                                        </span>
                                                        <span>x {cartItem.quantity}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {modal && <AddressModal callbackModal={callbackModal} callbackLocation={callbackLocation} />}
        </Fragment>
    );
}

export default Checkout;
