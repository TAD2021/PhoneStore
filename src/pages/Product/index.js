import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '~/components/Button1';
import Products from '~/components/Products';
import styles from './Product.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

const datas = ['iphone', 'samsung', 'oppo'];
const arranges = ['Nổi bật nhất', 'Giá thấp → cao', 'Giá cao → thấp'];
const filters = [
    { name: 'Thương hiệu', value: ['iphone', 'samsung', 'oppo'] },
    { name: 'Màu sắc', value: ['Trắng', 'Đen', 'Đỏ '] },
    { name: 'Nhu cầu', value: ['Chơi game', 'Học tập'] },
    { name: 'Nguồn hàng', value: ['Chính hãng', 'Nhập khẩu'] },
    { name: 'Tình trạng', value: ['Outlet', 'Used'] },
    { name: 'Khoảng giá', value: ['Dưới 10tr', 'Từ 10tr đến 20tr', 'Từ 20tr đến 30tr', 'Từ 30tr đến 40tr'] },
];

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
                slug: 'lo',
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
        slug: 'oplung',
        product: [
            {
                name: 'Ôp lung',
                price: '10.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/26/hp-victus-gaming-16-intel-thinkpro-1.png',
            },
        ],
    },
    {
        category: 'Sạc & Sạc dự phòng',
        slug: 'sale',
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
        slug: 'accessorry',
        product: [
            {
                name: 'Miếng dán màn hình',
                price: '12.990.000',
                img: 'https://images.thinkgroup.vn/unsafe/460x460/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/26/hp-victus-gaming-16-intel-thinkpro-1.png',
            },
        ],
    },
];

function Product() {
    // let { slug } = useParams();
    // console.log(slug);
    // const [page, setPage] = useState(0);
    // useEffect(() => {
    //     setPage(() => products.findIndex((product) => product.slug === slug));
    // }, [slug]);

    const [quantity, setQuantity] = useState(10);
    const handleQuantity = () => {
        return setQuantity((prev) => prev + 10);
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('category')}>
                    <h1>Điện thoại</h1>
                    <p>
                        Điện thoại là thiết bị viễn thông dùng Điện thoại biến tiếng nói thành tín hiệu điện và truyền
                        trong mạng điện thoại phức tạp thông qua kết nối để đến người sử dụng khác.
                    </p>
                    <hr />
                    <div className={cx('category_item')}>
                        {datas.map((data, index) => (
                            <Button key={index} color="gray">
                                {data}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={cx('filter')}>
                    <div className={cx('filter_list')}>
                        <div className={cx('filter_item')}>
                            <HeadlessTippy
                                interactive
                                delay={[0, 500]}
                                placement="bottom"
                                render={(attrs) => (
                                    <div style={{ width: '200px' }} tabIndex="-1" {...attrs}>
                                        <PopperWrapper>
                                            {arranges.map((arrange, index) => (
                                                <div className={cx('arrange_item')} key={index}>
                                                    <input
                                                        type="radio"
                                                        id={index}
                                                        name="arrange"
                                                        value={arrange}
                                                        defaultChecked={index === 0}
                                                    />
                                                    <label htmlFor={index}>{arrange}</label>
                                                </div>
                                            ))}
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <Button icon={<FontAwesomeIcon icon={faChevronDown} />}>Sắp xếp: {arranges[0]}</Button>
                            </HeadlessTippy>
                        </div>
                        {filters.map((filter, index) => (
                            <div className={cx('filter_item')} key={index}>
                                <HeadlessTippy
                                    interactive
                                    delay={[0, 200]}
                                    offset={[12, 8]}
                                    placement="bottom"
                                    render={(attrs) => (
                                        <div tabIndex="-1" {...attrs}>
                                            <PopperWrapper>
                                                <div className={cx('arrange_item')}>
                                                    <input
                                                        type="radio"
                                                        id={'all' + index}
                                                        name={filter.name}
                                                        value="all"
                                                        defaultChecked
                                                    />
                                                    <label htmlFor={'all' + index}>Tất cả</label>
                                                </div>
                                                <div className={cx('filter_wrapper')}>
                                                {filter.value.map((newvalue, index) => (
                                                        <div className={cx('filter_itemm')} key={index}>
                                                        <input
                                                            type="checkbox"
                                                            id={index}
                                                            name="arrange"
                                                            value={newvalue}
                                                        />
                                                        <label htmlFor={index}>{newvalue}</label>
                                                    </div>
                                                ))}
                                                </div>
                                            </PopperWrapper>
                                        </div>
                                    )}
                                >
                                    <Button icon={<FontAwesomeIcon icon={faChevronDown} />}>{filter.name}</Button>
                                </HeadlessTippy>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('product')}>
                    <Products products={products[0].product.slice(0, quantity)} category={products[0].slug} />
                    <div className={cx('more_product')}>
                        <button onClick={() => handleQuantity()}>Xem thêm</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;
