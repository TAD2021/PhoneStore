import styles from './Products.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import * as productService from '~/services/productService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductModal(props) {
    const [nameProduct, setNameProduct] = useState(props.data.nameProduct);
    const [description, setDescription] = useState(props.data.description);
    const [price, setPrice] = useState(props.data.price);
    const [quantity, setQuantity] = useState(props.data.quantity);
    const [ram, setRam] = useState(props.data.ram);
    const [memory, setMemory] = useState(props.data.memory);
    const [chipset, setChipset] = useState(props.data.chipset);
    const [pin, setPin] = useState(props.data.pin);
    const [os, setOS] = useState(props.data.os);
    const [screen, setScreen] = useState(props.data.screen);
    const [image, setImage] = useState(props.data.image);
    const [color, setColor] = useState(props.data.color);
    const [discount, setDiscount] = useState(props.data.discount);
    const [trademark, setTrademark] = useState(props.data.trademark);
    const [screenTech, setScreenTech] = useState(props.data.screenTech);
    const [frontCamera, setFrontCamera] = useState(props.data.frontCamera);
    const [backCamera, setBackCamera] = useState(props.data.backCamera);
    const [sim, setSim] = useState(props.data.sim);
    const [screenResolution, setScreenResolution] = useState(props.data.screenResolution);

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
        await productService.updateProduct(props.data._id, data);
        alert('Cập nhật sản phẩm thành công');
        props.callbackModal(false);
    };
    return (
        <div className={cx('modal')} onClick={() => props.callbackModal(false)}>
            <div className={cx('modal__overlay')}></div>
            <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <div className={cx('header_title')}>Sửa thông tin sản phẩm</div>
                        <button className={cx('close_button')} onClick={() => props.callbackModal(false)}>
                            <FontAwesomeIcon icon={faClose} className={cx('close')} />
                        </button>
                    </div>
                    <div className={cx('body')}>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Id sản phẩm</td>
                                        <td>{props.data._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Tên sản phẩm</td>
                                        <td>
                                            <input
                                                type="text"
                                                value={nameProduct}
                                                onChange={(e) => setNameProduct(e.target.value)}
                                            />
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
                                            <input type="text" value={sim} onChange={(e) => setSim(e.target.value)} />
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
    );
}

export default ProductModal;
