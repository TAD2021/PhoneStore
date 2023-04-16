import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import CartItem from '~/components/CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Cart() {
    const carts = useSelector((state) => state.cart.cart);
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    console.log(carts);
    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4 className={cx('header')}>Giỏ hàng ({carts.length})</h4>
                <div className={cx('cart')}>
                    {(carts.length === 0 && (
                        <div className={cx('cart_list_empty')}>
                            <section className={cx('cart_empty')}>
                                <img src={images.emptyCart} alt="" />
                                <div className={cx('title')}>
                                    <span>Giỏ hàng trống</span>
                                    <p>Hãy thoải mái lựa sản phẩm của bạn nhé</p>

                                    <Link to="/phone">
                                        <div className={cx('discover')}>
                                            <button>Khám phá ngay</button>
                                        </div>
                                    </Link>
                                </div>
                            </section>
                        </div>
                    )) || (
                        <div className={cx('cart_list')}>
                            {carts.map((cart, index) => (
                                <CartItem info={cart} key={index} />
                            ))}
                        </div>
                    )}
                    <div className={cx('summary')}>
                        <section className={cx('summary_container', 'box-shadow')}>
                            <h5>Tóm tắt đơn hàng</h5>
                            <div className={cx('discount')}>
                                <span>Giảm giá</span>
                                <span>
                                    {VND.format(
                                        carts.reduce(
                                            (acc, cart) =>
                                                acc +
                                                (cart.discount
                                                    ? cart.quantity * cart.price -
                                                      cart.quantity * (cart.price - cart.discount)
                                                    : 0),
                                            0,
                                        ),
                                    )}
                                </span>
                            </div>
                            <div className={cx('total')}>
                                <span>Tổng cộng</span>
                                <span className={cx('text-pink')}>
                                    {VND.format(
                                        carts.reduce(
                                            (acc, cart) =>
                                                acc + cart.quantity * (cart.price - cart.discount || cart.price),
                                            0,
                                        ),
                                    )}
                                </span>
                            </div>
                            {(carts.length === 0 && <button disabled>Đặt hàng</button>) || (
                                <Link to="/checkout">
                                    <button className={cx('buy')}>Đặt hàng</button>
                                </Link>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;
