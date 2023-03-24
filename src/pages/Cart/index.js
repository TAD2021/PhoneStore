import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import CartItem from '~/layouts/components/CartItem';

const cx = classNames.bind(styles);

const carts = [
    {
        img: 'https://images.thinkgroup.vn/unsafe/152x152/filters:background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2023/1/29/A%CC%89nh%20ma%CC%80n%20hi%CC%80nh%202023-01-29%20lu%CC%81c%2012.55.42.png',
        name: 'Bàn phím cơ Zuoya GMK67',
        title: 'Kit Only, Black, Mới, Full box, Nhập khẩu',
        price: 1190000,
        discount: 200000,
    },
    {
        img: 'https://images.thinkgroup.vn/unsafe/152x152/filters:background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/12/21/devialet-mania-blk-01-500x500.jpeg',
        name: 'Loa Devialet Mania (Deep Black)',
        title: 'Deep Black, Deep Black, Mới, Full box, Nhập khẩu',
        price: 22990000,
        discount: 1000000,
    },
    {
        img: 'https://images.thinkgroup.vn/unsafe/152x152/filters:background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png',
        name: 'AVITA Liber V14 Intel (LIBER V14J-FL)',
        title: 'i7 10510U 8GB, 1TB , Fragant Lilac, Mới, Full box, Chính hãng',
        price: 21990000,
        discount: 9000000,
    },
];

function Cart() {
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

                                    <div className={cx('discover')}>
                                        <button>Khám phá ngay</button>
                                    </div>
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
                                <span>{carts.reduce((acc, cart) => acc + cart.discount, 0)}</span>
                            </div>
                            <div className={cx('total')}>
                                <span>Tổng cộng</span>
                                <span className={cx('text-pink')}>
                                    {carts.reduce((acc, cart) => acc + cart.price, 0)}
                                </span>
                            </div>
                            {(carts.length === 0 && <button disabled>Đặt hàng</button>) || (
                                <button className={cx('buy')}>Đặt hàng</button>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;
