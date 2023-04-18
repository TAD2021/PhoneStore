import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '~/components/Button1';
import Products from '~/components/Products';
import styles from './Product.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useEffect, useState } from 'react';

import * as productService from '~/services/productService';
import {
    addColor,
    addMemory,
    addPrice,
    addRam,
    addTrademark,
    filterProduct,
    removeColor,
    removeMemory,
    removePrice,
    removeRam,
    removeTrademark,
} from '~/redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const datas = ['apple', 'samsung', 'oppo', 'xiaomi', 'realme'];
const arranges = ['Mới nhất', 'Giá thấp → cao', 'Giá cao → thấp'];
const filters = [
    { name: 'Thương hiệu', value: [...datas] },
    { name: 'Màu sắc', value: ['Trắng', 'Đen', 'Đỏ', 'Tím', 'Vàng', 'Bạc'] },
    { name: 'Bộ nhớ trong', value: ['128 GB', '256 GB', '512 GB', '1 TB'] },
    { name: 'Dung lượng ram', value: ['4 GB', '6 GB', '8 GB', '12 GB', '16 GB'] },
];

function Product() {
    const [quantity, setQuantity] = useState(10);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const trademark = useSelector((state) => state.product.filter.trademark);
    const color = useSelector((state) => state.product.filter.color);
    const memory = useSelector((state) => state.product.filter.memory);
    const ram = useSelector((state) => state.product.filter.ram);
    const price = useSelector((state) => state.product.filter.price);
    const productfil = useSelector((state) => state.product.product);

    const [sort, setSort] = useState(0);

    const handleQuantity = () => {
        setQuantity((prev) => prev + 10);
    };

    const handleChangeSort = (e) => {
        setSort(parseInt(e.target.id));
    };

    useEffect(() => {
        dispatch(filterProduct(products));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trademark, color, memory, ram, price, products]);

    const handleChangeFilter = (e) => {
        if (filters[0].value.includes(e.target.value)) {
            const value = e.target.value;
            if (e.target.checked) {
                dispatch(addTrademark(value));
            } else {
                dispatch(removeTrademark(value));
            }
        } else if (filters[1].value.includes(e.target.value)) {
            const value = e.target.value;
            if (e.target.checked) {
                dispatch(addColor(value));
            } else {
                dispatch(removeColor(value));
            }
        } else if (filters[2].value.includes(e.target.value)) {
            const value = e.target.value;
            if (e.target.checked) {
                dispatch(addMemory(value));
            } else {
                dispatch(removeMemory(value));
            }
        } else if (filters[3].value.includes(e.target.value)) {
            const value = e.target.value;
            if (e.target.checked) {
                dispatch(addRam(value));
            } else {
                dispatch(removeRam(value));
            }
        } else if (filters[4].value.includes(e.target.value)) {
            const value = e.target.value;
            if (e.target.checked) {
                dispatch(addPrice(value));
            } else {
                dispatch(removePrice(value));
            }
        }
    };

    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.getAllProduct();
            setProducts(result);
            return result;
        };
        getProduct();
    }, []);

    useEffect(() => {
        const temp = products.slice();
        if (sort === 2) temp.sort((a, b) => (b.price - b.discount || b.price) - (a.price - a.discount || a.price));
        else if (sort === 1) temp.sort((a, b) => (a.price - a.discount || a.price) - (b.price - b.discount || b.price));
        setProducts(temp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort]);

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
                                                        onChange={handleChangeSort}
                                                    />
                                                    <label htmlFor={index}>{arrange}</label>
                                                </div>
                                            ))}
                                        </PopperWrapper>
                                    </div>
                                )}
                            >
                                <Button icon={<FontAwesomeIcon icon={faChevronDown} />}>
                                    Sắp xếp: {arranges[sort]}
                                </Button>
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
                                                <div className={cx('filter_wrapper')}>
                                                    {filter.value.map((newvalue, index) => (
                                                        <div className={cx('filter_itemm')} key={index}>
                                                            <input
                                                                type="checkbox"
                                                                id={index}
                                                                name={'arrange' + index}
                                                                value={newvalue}
                                                                checked={
                                                                    trademark.includes(newvalue) ||
                                                                    color.includes(newvalue) ||
                                                                    memory.includes(newvalue) ||
                                                                    ram.includes(newvalue)
                                                                }
                                                                onChange={handleChangeFilter}
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

                {(trademark?.length > 0 ||
                    color?.length > 0 ||
                    memory?.length > 0 ||
                    ram?.length > 0 ||
                    price?.length > 0 ||
                    price?.length > 0) &&
                productfil?.length === 0 ? (
                    <div className={cx('non-product')}>
                        <img src={images.nonProduct} alt="" />
                        <div>
                            <span>Không có kết quả</span>
                            <p>Đừng lo, ThinkPro luôn sẵn sàng tư vấn miễn phí nếu bạn cần hỗ trợ thêm</p>
                            <Link to="/">
                                <button>Tư vấn miễn phí</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className={cx('product')}>
                        <Products products={productfil.length !== 0 ? productfil : products.slice(0, quantity)} />
                        <div className={cx('more_product')}>
                            <button onClick={handleQuantity}>Xem thêm</button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Product;
