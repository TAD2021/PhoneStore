import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faChevronLeft,
    faChevronRight,
    faLocationDot,
    faMinus,
    faPlus,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import * as productService from '~/services/productService';
import * as ratingService from '~/services/ratingService';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/cartSlice';
import images from '~/assets/images';
import RatingModal from './RatingModal';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [detail, setDetail] = useState(['']);
    const [rating, setRating] = useState(['']);
    const [star, setStar] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [modal, setModal] = useState(false);
    let { slug } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => window.scrollTo(0, 0), []);

    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.getAProduct(slug);
            result ? setDetail(result) : navigate('/');
        };
        getProduct();
        const getRating = async () => {
            const result = await ratingService.getRatingByProduct(slug);
            setRating(result);
        };
        getRating();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    useEffect(() => {
        const result = (rating.reduce((acc, current) => acc + current.rating, 0) / rating.length).toFixed(0);
        setStar(parseInt(result));
    }, [rating]);

    const handleQuantity = (e) => {
        const regex = /^[0-9]+$/;
        (e.target.value.match(regex) || e.target.value === '') && setQuantity(e.target.value);
    };

    const handleReduceQuantity = () => {
        setQuantity((prev) => prev - 1);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleAddToCart = () => {
        detail.quantity > 0 && dispatch(addToCart({ ...detail, quantity }));
    };

    const callbackRatingModal = (childrenData) => {
        setModal(childrenData);
    };

    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <ul className={cx('nav')}>
                    <li className={cx('nav_item')}>
                        <Link to="/">
                            <span>Trang chủ</span>
                        </Link>
                    </li>
                    <li className={cx('nav_item')}>
                        <span className={cx('m-lr-4')}>/</span>
                        <Link to="/phone">
                            <span>Điện thoại</span>
                        </Link>
                    </li>
                </ul>
                <div className={cx('body')}>
                    <div className={cx('right')}>
                        <div className={cx('right_container')}>
                            <div className={'box-shadow ' + cx('information')}>
                                <div className={cx('information_header')}>
                                    <h1>{detail.nameProduct}</h1>
                                    {detail.quantity <= 0 && (
                                        <div>
                                            <span>Hết hàng</span>
                                        </div>
                                    )}
                                </div>
                                <div className={cx('information_body')}>
                                    <div className={cx('version')}>
                                        <div>
                                            <div>Bộ nhớ</div>
                                            <div className={cx('version_list')}>
                                                <div
                                                    className={
                                                        detail.quantity <= 0
                                                            ? cx('version_item', 'outofstock')
                                                            : cx('version_item', 'active')
                                                    }
                                                >
                                                    <span>{detail.memory}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div>Màu</div>
                                            <div className={cx('version_list')}>
                                                <div
                                                    className={
                                                        detail.quantity <= 0
                                                            ? cx('version_item', 'outofstock')
                                                            : cx('version_item', 'active')
                                                    }
                                                >
                                                    <span>{detail.color}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('custom')}>
                                        <label>Số lượng</label>
                                        <div>
                                            <div className={cx('quantity')}>
                                                <button disabled={quantity === 1} onClick={handleReduceQuantity}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <input
                                                    max="99"
                                                    min="1"
                                                    inputMode="decimal"
                                                    value={quantity}
                                                    onChange={(e) => handleQuantity(e)}
                                                />
                                                <button onClick={handleIncreaseQuantity}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                            <div className={cx('location')}>
                                                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                                <span>Xem chi nhánh còn hàng</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('information_footer')}>
                                    <div className={cx('price')}>
                                        <span className={'text-primary ' + cx('price_discount')}>
                                            {VND.format(detail.price - detail.discount || detail.price)}
                                        </span>
                                        <div>
                                            {detail.discount && (
                                                <>
                                                    <span>{VND.format(detail.price)}</span>
                                                    <span className="text-primary ">
                                                        -{(detail.price / detail.discount).toFixed(0)}%
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('buy')}>
                                        <div
                                            className={`text-white button-primary ${
                                                detail.quantity <= 0 ? cx('buy_now', 'not-active') : cx('buy_now')
                                            }`}
                                            onClick={handleAddToCart}
                                        >
                                            <span>Mua ngay</span>
                                        </div>
                                        <div
                                            className={`text-white button-primary ${
                                                detail.quantity <= 0
                                                    ? cx('add-to-cart', 'not-active')
                                                    : cx('add-to-cart')
                                            }`}
                                            onClick={handleAddToCart}
                                        >
                                            <FontAwesomeIcon icon={faCartPlus} className={cx('icon')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'box-shadow ' + cx('attribute')}>
                                <h2>Thông số kỹ thuật</h2>
                                <div>
                                    <span style={{ fontWeight: '600', color: 'red' }}>{detail.nameProduct} </span>
                                    {detail.description}
                                </div>
                                <div className={cx('title')}>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Kích thước màn hình</span>
                                        <span className={cx('text')}>{detail.screen}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Công nghệ màn hình</span>
                                        <span className={cx('text')}>{detail.screenTech}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Camera sau</span>
                                        <span className={cx('text')}>{detail.backCamera}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Camera trước</span>
                                        <span className={cx('text')}>{detail.frontCamera}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Chipset</span>
                                        <span className={cx('text')}>{detail.chipset}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Dung lượng Ram</span>
                                        <span className={cx('text')}>{detail.ram}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Pin</span>
                                        <span className={cx('text')}>{detail.pin}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Thẻ Sim</span>
                                        <span className={cx('text')}>{detail.sim}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Hệ điều hành</span>
                                        <span className={cx('text')}>{detail.os}</span>
                                    </div>
                                    <div className={cx('title_item')}>
                                        <span className={cx('name')}>Độ phân giải màn hình</span>
                                        <span className={cx('text')}>{detail.screenResolution}</span>
                                    </div>
                                </div>
                                <div className={cx('more')}>
                                    <span className="text--blue">Xem cấu hình chi tiết</span>
                                </div>
                            </div>
                            <div className={'box-shadow ' + cx('transport')}>
                                <div>
                                    <h2>Vận chuyển</h2>
                                    <span className="text--blue">Miễn phí (HN, TP.HCM)</span>
                                </div>
                            </div>
                            <div className={'box-shadow ' + cx('guarantee')}>
                                <div>
                                    <h2>Bảo hành &#38; đổi trả</h2>
                                    <span className="text--blue">18 tháng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('left')}>
                        <section className={'box-shadow ' + cx('media')}>
                            <div className={cx('media_thumb')}>
                                <div className={'inset-0'}>
                                    <div className={cx('thumb_item')}>
                                        <img alt="" src={detail.image} />
                                    </div>
                                </div>
                            </div>
                            <div className={cx('media_main')}>
                                <div className={cx('main_image')}>
                                    <div className="product-images-slider">
                                        <img alt="" src={detail.image} />
                                    </div>
                                    <div className={cx('change_image')}>
                                        <div className={cx('left_icon')}>
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>
                                        <div className={cx('right_icon')}>
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={'box-shadow ' + cx('rating')}>
                            <h3>Đánh giá và nhận xét {detail.nameProduct}</h3>
                            <div className={cx('box-review')}>
                                <div className={cx('box-review-score')}>
                                    <p>
                                        {rating.length > 0
                                            ? (
                                                  rating.reduce((acc, current) => acc + current.rating, 0) /
                                                  rating.length
                                              ).toFixed(1)
                                            : 0}
                                        /5
                                    </p>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={star >= 1 ? cx('star-icon', 'active') : cx('star-icon')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={star >= 2 ? cx('star-icon', 'active') : cx('star-icon')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={star >= 3 ? cx('star-icon', 'active') : cx('star-icon')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={star >= 4 ? cx('star-icon', 'active') : cx('star-icon')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={star === 5 ? cx('star-icon', 'active') : cx('star-icon')}
                                        />
                                    </div>
                                    <p>
                                        <strong>{rating.length}</strong> đánh giá và nhận xét
                                    </p>
                                </div>
                                <div className={cx('box-review-star')}>
                                    <div className={cx('rating-level')}>
                                        <div className={cx('star-count')}>
                                            <span>5</span>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className={cx('star-icon')} />
                                            </div>
                                        </div>
                                        <progress
                                            max={rating.length}
                                            value={rating.reduce(
                                                (acc, current) => (current.rating === 5 ? acc + 1 : acc),
                                                0,
                                            )}
                                        ></progress>
                                        <span>
                                            {rating.reduce((acc, current) => (current.rating === 5 ? acc + 1 : acc), 0)}{' '}
                                            đánh giá
                                        </span>
                                    </div>
                                    <div className={cx('rating-level')}>
                                        <div className={cx('star-count')}>
                                            <span>4</span>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className={cx('star-icon')} />
                                            </div>
                                        </div>
                                        <progress
                                            max={rating.length}
                                            value={rating.reduce(
                                                (acc, current) => (current.rating === 4 ? acc + 1 : acc),
                                                0,
                                            )}
                                        ></progress>
                                        <span>
                                            {rating.reduce((acc, current) => (current.rating === 4 ? acc + 1 : acc), 0)}{' '}
                                            đánh giá
                                        </span>
                                    </div>
                                    <div className={cx('rating-level')}>
                                        <div className={cx('star-count')}>
                                            <span>3</span>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className={cx('star-icon')} />
                                            </div>
                                        </div>
                                        <progress
                                            max={rating.length}
                                            value={rating.reduce(
                                                (acc, current) => (current.rating === 3 ? acc + 1 : acc),
                                                0,
                                            )}
                                        ></progress>
                                        <span>
                                            {rating.reduce((acc, current) => (current.rating === 3 ? acc + 1 : acc), 0)}{' '}
                                            đánh giá
                                        </span>
                                    </div>
                                    <div className={cx('rating-level')}>
                                        <div className={cx('star-count')}>
                                            <span>2</span>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className={cx('star-icon')} />
                                            </div>
                                        </div>
                                        <progress
                                            max={rating.length}
                                            value={rating.reduce(
                                                (acc, current) => (current.rating === 2 ? acc + 1 : acc),
                                                0,
                                            )}
                                        ></progress>
                                        <span>
                                            {rating.reduce((acc, current) => (current.rating === 2 ? acc + 1 : acc), 0)}{' '}
                                            đánh giá
                                        </span>
                                    </div>
                                    <div className={cx('rating-level')}>
                                        <div className={cx('star-count')}>
                                            <span>1</span>
                                            <div>
                                                <FontAwesomeIcon icon={faStar} className={cx('star-icon')} />
                                            </div>
                                        </div>
                                        <progress
                                            max={rating.length}
                                            value={rating.reduce(
                                                (acc, current) => (current.rating === 1 ? acc + 1 : acc),
                                                0,
                                            )}
                                        ></progress>
                                        <span>
                                            {rating.reduce((acc, current) => (current.rating === 1 ? acc + 1 : acc), 0)}{' '}
                                            đánh giá
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p>Bạn đánh giá sao về sản phẩm này</p>
                            <div className={cx('rating-now')}>
                                <button onClick={() => setModal(true)}>Đánh giá ngay</button>
                            </div>
                            {modal && <RatingModal callbackRatingModal={callbackRatingModal} data={detail} />}
                            <div className={cx('box-review-comment')}>
                                {rating.map((ratingg, index) => (
                                    <div className={cx('box-review-comment-item')} key={index}>
                                        <div className={cx('box-review-comment-item-title')}>
                                            <div className={cx('user')}>
                                                <div className={cx('user-img')}>
                                                    <img alt="" src={images.noImage} />
                                                </div>
                                                <span>{ratingg.username}</span>
                                            </div>
                                            <div className={cx('date-time')}>
                                                {ratingg.date} {ratingg.time}
                                            </div>
                                        </div>
                                        <div className={cx('box-review-comment-item-review')}>
                                            <div className={cx('item-review-rating')}>
                                                <strong>Đánh giá: </strong>
                                                <div>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className={cx('star-icon', 'active')}
                                                        />
                                                    </div>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className={
                                                                ratingg.rating >= 2
                                                                    ? cx('star-icon', 'active')
                                                                    : cx('star-icon')
                                                            }
                                                        />
                                                    </div>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className={
                                                                ratingg.rating >= 3
                                                                    ? cx('star-icon', 'active')
                                                                    : cx('star-icon')
                                                            }
                                                        />
                                                    </div>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className={
                                                                ratingg.rating >= 4
                                                                    ? cx('star-icon', 'active')
                                                                    : cx('star-icon')
                                                            }
                                                        />
                                                    </div>
                                                    <div className={cx('icon')}>
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            className={
                                                                ratingg.rating === 5
                                                                    ? cx('star-icon', 'active')
                                                                    : cx('star-icon')
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('item-review-comment')}>
                                                <div className={cx('comment-content')}>
                                                    <p>
                                                        <strong>Nhận xét: </strong>
                                                        {ratingg.comment}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;
