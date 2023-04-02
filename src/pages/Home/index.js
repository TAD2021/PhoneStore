import { Fragment, useState } from 'react';
import Advertisement from '~/components/Advertisement';
import Trademark from '~/components/Trademark';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button1';
import Products from '~/components/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faHeadset, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const products = [
    {
        category: 'Điện thoại',
        slug: 'phone',
        product: [
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
                discount: 25,
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
            {
                name: 'Surface Laptop 3 15',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/10/1/avita-liber-v14-intel-05-thinkpro-1.png',
            },
        ],
    },
    {
        category: 'Ốp lưng',
        slug: 'bumper',
        product: [
            {
                name: 'Ôp lung',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/26/hp-victus-gaming-16-intel-thinkpro-1.png',
            },
        ],
    },
    {
        category: 'Sạc & Sạc dự phòng',
        slug: 'charge',
        product: [
            {
                name: 'Sạc',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/26/hp-victus-gaming-16-intel-thinkpro-1.png',
            },
        ],
    },
    {
        category: 'Tai nghe',
        slug: 'headphone',
        product: [
            {
                name: 'Tai nghe',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/26/hp-victus-gaming-16-intel-thinkpro-1.png',
            },
        ],
    },
    {
        category: 'Miếng dán màn hình',
        slug: 'screenProtector',
        product: [
            {
                name: 'Miếng dán màn hình',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/26/hp-victus-gaming-16-intel-thinkpro-1.png',
            },
        ],
    },
];

function Home() {
    const [active, setActive] = useState(0);
    const handleActive = (index) => setActive(index);
    return (
        <Fragment>
            <Advertisement />
            <Trademark />

            <div className={cx('container')}>
                <div className={cx('wrapper_body')}>
                    <div className={cx('recommend')}>
                        <h2>Gợi ý cho bạn</h2>
                        <div className={cx('category')}>
                            {products.map((product, index) => (
                                <Button
                                    key={index}
                                    handleActive={handleActive}
                                    index={index}
                                    primary={index === active && 'active'}
                                >
                                    {product.category}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <Products products={products[active].product} category={products[active].slug} />
                    <section className={cx('usp')}>
                        <div className={cx('usp_container')}>
                            <h2>
                                <span>ThinkPro</span>
                                <span className={cx('text')}>Là nơi để bạn và người thân tin tưởng lựa chọn</span>
                            </h2>
                            <div className={cx('usp_list')}>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="greenIcon" />
                                        <div className={cx('item_text')}>
                                            Được <span className="text--green"> trải nghiệm </span> sản phẩm
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faHeadset} className="blueIcon" />
                                        <div className={cx('item_text')}>
                                            Tư vấn viên <span className="text--blue"> tận tâm </span> và có{' '}
                                            <span className="text--blue"> chuyên môn </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faEnvelope} className="orangeIcon" />
                                        <div className={cx('item_text')}>
                                            Chúng tôi có Trung tâm{' '}
                                            <span className="text--orange"> bảo vệ quyền lợi </span> khách hàng
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faClock} className="purpleIcon" />
                                        <div className={cx('item_text')}>
                                            Thời gian <span className="text--purple"> phục vụ </span> đến{' '}
                                            <span className="text--purple"> 23:59 .</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
