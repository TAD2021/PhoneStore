import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons';
import * as productService from '~/services/productService';

const cx = classNames.bind(styles);

function Products() {
    const [nameProduct, setNameProduct] = useState();
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
    const [discount, setDiscount] = useState();
    const [trademark, setTrademark] = useState('');
    const [screenTech, setScreenTech] = useState('');
    const [frontCamera, setFrontCamera] = useState('');
    const [backCamera, setBackCamera] = useState('');
    const [sim, setSim] = useState('');
    const [screenResolution, setScreenResolution] = useState('');

    const [id, setId] = useState('');

    const [show, setShow] = useState('');
    const [products, setProducts] = useState();
    const [modal, setModal] = useState(false);

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
            setId(product._id);
            setNameProduct(product.nameProduct);
            setDescription(product.description);
            setPrice(product.price);
            setQuantity(product.quantity);
            setRam(product.ram);
            setMemory(product.memory);
            setChipset(product.chipset);
            setPin(product.pin);
            setOS(product.os);
            setScreen(product.screen);
            setImage(product.image);
            setColor(product.color);
            setDiscount(product.discount);
            setTrademark(product.trademark);
            setScreenTech(product.screenTech);
            setFrontCamera(product.frontCamera);
            setBackCamera(product.backCamera);
            setSim(product.sim);
            setScreenResolution(product.screenResolution);

            setModal(true);
        }
    };

    const handleHide = () => {
        setNameProduct('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setRam('');
        setMemory('');
        setChipset('');
        setPin('');
        setOS('');
        setScreen('');
        setImage('');
        setColor('');
        setDiscount('');
        setTrademark('');
        setScreenTech('');
        setFrontCamera('');
        setBackCamera('');
        setSim('');
        setScreenResolution('');
        setModal(false);
    };

    const handleSubmit = async () => {
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
        await productService.updateProduct(id, data);
        alert('Cập nhật sản phẩm thành công');
        handleHide();
    };

    const handleDelete = async (e) => {
        const value = window.confirm('Xác nhận xóa sản phẩm');
        value && (await productService.deleteProduct(e.target.value));
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <Fragment>
            {modal && (
                <div className={cx('modal')} onClick={(e) => handleHide(e)}>
                    <div className={cx('modal__overlay')}></div>
                    <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                        <div className={cx('wrapper')}>
                            <div className={cx('header')}>
                                <div className={cx('header_title')}>Sửa thông tin sản phẩm</div>
                                <button className={cx('close_button')} onClick={(e) => handleHide(e)}>
                                    <FontAwesomeIcon icon={faClose} className={cx('close')} />
                                </button>
                            </div>
                            <div className={cx('body')}>
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Id sản phẩm</td>
                                                <td>{id}</td>
                                            </tr>
                                            <tr>
                                                <td>Tên sản phẩm</td>
                                                <td>
                                                    {products && (
                                                        <input
                                                            type="text"
                                                            value={nameProduct}
                                                            onChange={(e) => setNameProduct(e.target.value)}
                                                        />
                                                    )}
                                                </td>
                                            </tr>
                                            <tr className={cx('text-area')}>
                                                <td>Mô tả</td>
                                                <td>
                                                    <textarea
                                                        rows="4"
                                                        cols="50"
                                                        value={description}
                                                        onChange={(e) => setDescription(e.target.value)}
                                                    ></textarea>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giá</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Số lượng</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={quantity}
                                                        onChange={(e) => setQuantity(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ram</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={ram}
                                                        onChange={(e) => setRam(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Memory</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={memory}
                                                        onChange={(e) => setMemory(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Chipset</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={chipset}
                                                        onChange={(e) => setChipset(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Pin</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={pin}
                                                        onChange={(e) => setPin(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hệ điều hành</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={os}
                                                        onChange={(e) => setOS(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Màn hình</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={screen}
                                                        onChange={(e) => setScreen(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hình ảnh</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={image}
                                                        onChange={(e) => setImage(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Màu</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={color}
                                                        onChange={(e) => setColor(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Giảm giá</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={discount}
                                                        onChange={(e) => setDiscount(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Hãng</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={trademark}
                                                        onChange={(e) => setTrademark(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Công nghệ màn hình</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={screenTech}
                                                        onChange={(e) => setScreenTech(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Camera trước</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={frontCamera}
                                                        onChange={(e) => setFrontCamera(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Camera sau</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={backCamera}
                                                        onChange={(e) => setBackCamera(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Thẻ sim</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={sim}
                                                        onChange={(e) => setSim(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Độ phân giải m.hình</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={screenResolution}
                                                        onChange={(e) => setScreenResolution(e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <button className={'button-primary'} onClick={() => handleSubmit()}>
                                                        Lưu
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
