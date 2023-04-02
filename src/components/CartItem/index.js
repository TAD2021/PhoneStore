import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { faMinus, faPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CartItem({ info }) {
    return (
        <div className={cx('cart_wrapper', 'box-shadow')}>
            <div className={cx('cart_item')}>
                <div className={cx('cart_product')}>
                    <Link to="/ban-phim/co-zuoya-gmk67-6128">
                        <img alt="Bàn phím cơ Zuoya GMK67" src={info.img} />
                    </Link>
                    <div className={cx('cart_product_title')}>
                        <div className={cx('cart_product_info')}>
                            <div className={cx('info')}>
                                <Link to="/ban-phim/co-zuoya-gmk67-6128">{info.name}</Link>
                                <span>{info.title}</span>
                            </div>
                            <div className={cx('price')}>
                                <div className={cx('price_product')}>{info.price}</div>
                                <div className={cx('price_discount')}>{info.price - info.discount}</div>
                            </div>
                        </div>
                        <div className={cx('cart_product_quantity')}>
                            <div className={cx('quantity')}>
                                <button disabled="disabled" aria-label="Giảm">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input max="99" min="1" inputMode="decimal" type="text" defaultValue="1" />
                                <button aria-label="Tăng">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <button>
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
