import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import Products from '~/layouts/components/Products';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

const datas = ['iphone', 'samsung', 'oppo'];
const filters = [
    'Sắp xếp: Nổi bật nhất',
    'Thương hiệu',
    'Màu sắc',
    'Nhu cầu',
    'Nguồn hàng',
    'Tình trạng',
    'Khoảng giá',
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
                            <Button info={data} key={index} color="gray" />
                        ))}
                    </div>
                </div>
                <div className={cx('filter')}>
                    <div className={cx('filter_list')}>
                        {filters.map((filter, index) => (
                            <div className={cx('filter_item')} key={index}>
                                <Button info={filter} icon={<FontAwesomeIcon icon={faChevronDown} />} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('product')}>
                    <Products products={products[0].product.slice(0, quantity)} slug={products[0].slug} />
                    <div className={cx('more_product')}>
                        <button onClick={() => handleQuantity()}>Xem thêm</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;
