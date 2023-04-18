import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as productService from '~/services/productService';
import ProductModal from './ProductModal';

const cx = classNames.bind(styles);

function Products() {
    const [nameProduct, setNameProduct] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [ram, setRam] = useState('');
    const [memory, setMemory] = useState('');
    const [chipset, setChipset] = useState('');
    const [pin, setPin] = useState('');
    const [os, setOS] = useState('');
    const [screen, setScreen] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState('');
    const [discount, setDiscount] = useState('');
    const [trademark, setTrademark] = useState('');
    const [screenTech, setScreenTech] = useState('');
    const [frontCamera, setFrontCamera] = useState('');
    const [backCamera, setBackCamera] = useState('');
    const [sim, setSim] = useState('');
    const [screenResolution, setScreenResolution] = useState('');

    const [show, setShow] = useState('');
    const [products, setProducts] = useState();
    const [modal, setModal] = useState(false);

    //Updata modal
    const [product, setProduct] = useState('');

    //Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const [indexOfLastNews, setInddexOfLastNews] = useState(10);
    const [indexOfFirstNews, setIndexOfFirstNews] = useState(0);
    const [currentTodos, setCurrentTodos] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.getAllProduct();
            setProducts(result);
            return result;
        };
        getProduct();
    }, []);

    useEffect(() => {
        setInddexOfLastNews(currentPage * 10);
        setIndexOfFirstNews(currentPage * 10 - 10);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    useEffect(() => {
        setCurrentTodos(products?.slice(indexOfFirstNews, indexOfLastNews));
        const pageNumberTemp = [];
        for (let i = 1; i <= Math.ceil(products?.length / 10); i++) {
            pageNumberTemp.push(i);
        }
        setPageNumbers(pageNumberTemp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, indexOfLastNews, indexOfFirstNews]);

    const handleCurrentPage = (e) => {
        setCurrentPage(e.target.value);
    };

    const handleCreateProduct = async () => {
        const data = {
            nameProduct,
            description,
            price,
            quantity,
            ram,
            memory,
            chipset,
            pin,
            os,
            screen,
            image,
            color,
            discount,
            trademark,
            screenTech,
            frontCamera,
            backCamera,
            sim,
            screenResolution,
        };
        await productService.createProduct(data);
        alert('Tạo sản phẩm thành công');
    };

    const handleShowModal = (e) => {
        if (products.find((element) => element._id === e.target.value)) {
            const product = products.find((element) => element._id === e.target.value);
            setProduct(product);
            setModal(true);
        }
    };

    const handleDelete = async (e) => {
        const value = window.confirm('Xác nhận xóa sản phẩm');
        value && (await productService.deleteProduct(e.target.value));
    };

    const callbackModal = (childrenData) => {
        setModal(childrenData);
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <Fragment>
            {modal && <ProductModal callbackModal={callbackModal} data={product} />}
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('add_product')}>
                        <h3 onClick={() => setShow(!show)}>
                            Thêm sản phẩm mới <FontAwesomeIcon icon={faChevronDown} />
                        </h3>
                        <div
                            className={cx('add_product-body')}
                            style={show ? { display: 'grid' } : { display: 'none' }}
                        >
                            <input
                                value={nameProduct}
                                placeholder="Tên sản phẩm"
                                onChange={(e) => setNameProduct(e.target.value)}
                            />
                            <input
                                value={description}
                                placeholder="Mô tả sản phẩm"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input value={price} placeholder="Giá" onChange={(e) => setPrice(e.target.value)} />
                            <input
                                value={quantity}
                                placeholder="Số lượng"
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            <input value={ram} placeholder="Ram" onChange={(e) => setRam(e.target.value)} />
                            <input value={chipset} placeholder="Chipset" onChange={(e) => setChipset(e.target.value)} />
                            <input value={pin} placeholder="Pin" onChange={(e) => setPin(e.target.value)} />
                            <input value={os} placeholder="Hệ điều hành" onChange={(e) => setOS(e.target.value)} />
                            <input value={image} placeholder="Hình ảnh" onChange={(e) => setImage(e.target.value)} />
                            <input
                                value={memory}
                                placeholder="Bộ nhớ trong"
                                onChange={(e) => setMemory(e.target.value)}
                            />
                            <input
                                value={screen}
                                placeholder="Kích thước màn hình"
                                onChange={(e) => setScreen(e.target.value)}
                            />
                            <input value={color} placeholder="Màu" onChange={(e) => setColor(e.target.value)} />
                            <input
                                value={discount}
                                placeholder="Giảm giá"
                                onChange={(e) => setDiscount(e.target.value)}
                            />
                            <input
                                value={trademark}
                                placeholder="Hãng"
                                onChange={(e) => setTrademark(e.target.value)}
                            />
                            <input
                                value={screenTech}
                                placeholder="Công nghệ màn hình"
                                onChange={(e) => setScreenTech(e.target.value)}
                            />
                            <input
                                value={frontCamera}
                                placeholder="Camera trước"
                                onChange={(e) => setFrontCamera(e.target.value)}
                            />
                            <input
                                value={backCamera}
                                placeholder="Camera sau"
                                onChange={(e) => setBackCamera(e.target.value)}
                            />
                            <input value={sim} placeholder="Thẻ sim" onChange={(e) => setSim(e.target.value)} />
                            <input
                                value={screenResolution}
                                placeholder="Độ phân giải màn hình"
                                onChange={(e) => setScreenResolution(e.target.value)}
                            />
                        </div>
                        <button
                            className={cx('save')}
                            disabled={
                                !nameProduct ||
                                !price ||
                                !quantity ||
                                !ram ||
                                !memory ||
                                !chipset ||
                                !pin ||
                                !os ||
                                !screen ||
                                !color ||
                                !trademark
                            }
                            onClick={handleCreateProduct}
                        >
                            Lưu
                        </button>
                    </div>
                    <div className={cx('product_list')}>
                        <h3>Danh sách sản phẩm</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Ram</th>
                                    <th>Bộ nhớ trong</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                </tr>
                                {currentTodos &&
                                    currentTodos.map((product, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{product.nameProduct}</td>
                                            <td>
                                                <img alt="" src={product.image} />
                                            </td>
                                            <td>{product.ram}</td>
                                            <td>{product.memory}</td>
                                            <td>{VND.format(product.price)}</td>
                                            <td>{product.quantity}</td>
                                            <td className={cx('update')}>
                                                <button
                                                    className={cx('update_icon')}
                                                    value={product._id}
                                                    onClick={(e) => handleShowModal(e)}
                                                >
                                                    Sửa
                                                </button>
                                            </td>
                                            <td className={cx('delete')}>
                                                <button
                                                    className={cx('delete_icon')}
                                                    value={product._id}
                                                    onClick={(e) => handleDelete(e)}
                                                >
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <div className={cx('page_number')}>
                            {pageNumbers.map((pagenumber, index) => (
                                <div key={index}>
                                    <button onClick={handleCurrentPage} value={pagenumber}>
                                        {pagenumber}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Products;
