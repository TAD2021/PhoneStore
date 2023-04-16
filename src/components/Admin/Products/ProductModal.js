import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductModal() {
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
        };
        console.log(data);
        await productService.updateProduct(id, data);
        alert('Cập nhật sản phẩm thành công');
        handleHide();
    };
    return (
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
                                            <input type="text" value={ram} onChange={(e) => setRam(e.target.value)} />
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
                                            <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>
                                            <input type="text" value={os} onChange={(e) => setOS(e.target.value)} />
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
    );
}

export default ProductModal;
