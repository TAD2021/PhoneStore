import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { faMinus, faPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeQuantityCart, incrementQuantity, decrementQuantity, removeItem } from '~/redux/cartSlice';
const cx = classNames.bind(styles);

function CartItem({ info }) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const dispatch = useDispatch();

    const handleChangeQuantity = (e) => {
        const regex = /^[0-9]+$/;
        (e.target.value.match(regex) || e.target.value === '') &&
            dispatch(changeQuantityCart({ ...info, quantity: e.target.value }));
    };

    const handleReduce = () => {
        dispatch(decrementQuantity(info));
    };

    const handleIncrease = () => {
        dispatch(incrementQuantity(info));
    };

    const handleDeleteCartItem = () => {
        dispatch(removeItem(info));
    };

    return (
        <div className={cx('cart_wrapper', 'box-shadow')}>
            <div className={cx('cart_item')}>
                <div className={cx('cart_product')}>
                    <Link to="/ban-phim/co-zuoya-gmk67-6128">
                        <img alt={info.nameProduct} src={info.image} />
                    </Link>
                    <div className={cx('cart_product_title')}>
                        <div className={cx('cart_product_info')}>
                            <div className={cx('info')}>
                                <Link to="/ban-phim/co-zuoya-gmk67-6128">{info.nameProduct}</Link>
                                <span>{info.memory + ', ' + info.color}</span>
                            </div>
                            <div className={cx('price')}>
                                {info.discount && <div className={cx('price_product')}>{VND.format(info.price)}</div>}
                                <div className={cx('price_discount')}>
                                    {VND.format(info.price - info.discount || info.price)}
                                </div>
                            </div>
                        </div>
                        <div className={cx('cart_product_quantity')}>
                            <div className={cx('quantity')}>
                                <button disabled={info.quantity === 1} aria-label="Giảm" onClick={handleReduce}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input
                                    max="99"
                                    min="1"
                                    inputMode="decimal"
                                    type="text"
                                    value={info.quantity}
                                    onChange={(e) => handleChangeQuantity(e)}
                                />
                                <button aria-label="Tăng" onClick={handleIncrease}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <button onClick={handleDeleteCartItem}>
                                <span>Xóa</span>
                                <FontAwesomeIcon icon={faXmarkCircle} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
