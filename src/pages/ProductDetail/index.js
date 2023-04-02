import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faChevronLeft,
    faChevronRight,
    faLocationDot,
    faMinus,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
// import Slider from 'react-slick/lib/slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import { useState } from 'react';
import './Swiper.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
    const [activeThumb, setActiveThumb] = useState();
    let { slug } = useParams();
    let location = useLocation();
    console.log(slug, location);

    // const images = [
    //     'https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-06-thinkpro-2.png',
    //     'https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-06-thinkpro-4.png',
    //     'https://images.thinkgroup.vn/unsafe/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-06-thinkpro-5.png',
    // ];
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

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
                                    <h1>Surface Laptop 3 15</h1>
                                </div>
                                <div className={cx('information_body')}>
                                    <div className={cx('version')}>
                                        <div>
                                            <div>Phiên bản</div>
                                            <div className={cx('version_list')}>
                                                <div className={cx('version_item', 'active')}>
                                                    <span>i7 10510U 8G, 1TB</span>
                                                </div>
                                                <div className={cx('version_item')}>
                                                    <span>i7 10510U 8G, 1TB</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div>Màu</div>
                                            <div className={cx('version_list')}>
                                                <div className={cx('version_item', 'active')}>
                                                    <span>Black</span>
                                                </div>
                                                <div className={cx('version_item')}>
                                                    <span>Platinum</span>
                                                </div>
                                                <div className={cx('version_item')}>
                                                    <span>Sandstone</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>Loại hàng</div>
                                            <div className={cx('version_list')}>
                                                <div className={cx('version_item', 'active')}>
                                                    <span>Outlet, nhập khẩu</span>
                                                </div>
                                                <div className={cx('version_item')}>
                                                    <span>Used, nhập khẩu</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('custom')}>
                                        <label>Số lượng</label>
                                        <div>
                                            <div className={cx('quantity')}>
                                                <button disabled="disabled" aria-label="Giảm">
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <input
                                                    max="99"
                                                    min="1"
                                                    inputMode="decimal"
                                                    type="text"
                                                    defaultValue="1"
                                                />
                                                <button aria-label="Tăng">
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
                                        <span className={'text-primary ' + cx('price_discount')}>13.490.000</span>
                                        <div>
                                            <span>15.990.000</span>
                                            <span className="text-primary ">-16%</span>
                                        </div>
                                    </div>
                                    <div className={cx('buy')}>
                                        <div className={`text-white button-primary ${cx('buy_now')}`}>
                                            <span>Mua ngay</span>
                                        </div>
                                        <div className={`text-white button-primary ${cx('add-to-cart')}`}>
                                            <FontAwesomeIcon icon={faCartPlus} className={cx('icon')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('left')}>
                        <section className={'box-shadow ' + cx('media')}>
                            <div className={cx('media_thumb')}>
                                <div className={'inset-0'}>
                                    {/* <div className={cx('thumb_item', 'active')}>
                                            <img
                                                alt=""
                                                src="https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100):background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                            />
                                        </div>
                                        <div className={cx('thumb_item')}>
                                            <img
                                                alt=""
                                                src="https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100):background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                            />
                                        </div> */}
                                    <Swiper
                                        onSwiper={setActiveThumb}
                                        modules={[Navigation, Thumbs]}
                                        className={'product-images-slider-thumbs ' + cx('thumb_list')}
                                    >
                                        <SwiperSlide>
                                            <div className={cx('thumb_item')}>
                                                <img
                                                    alt=""
                                                    src="https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100):background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={cx('thumb_item')}>
                                                <img
                                                    alt=""
                                                    src="https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100):background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className={cx('thumb_item')}>
                                                <img
                                                    alt=""
                                                    src="https://images.thinkgroup.vn/unsafe/fit-in/200x200/filters:quality(100):background_color(white)/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className={cx('media_main')}>
                                <div className={cx('main_image')}>
                                    {/* <img
                                        alt=""
                                        src="https://images.thinkgroup.vn/unsafe/fit-in/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                    /> */}
                                    {/* <Slider {...settings} className={cx('slider')}>
                                        {images.map((image, index) => (
                                            <img key={index} src={image} alt="" />
                                        ))}
                                    </Slider> */}
                                    <Swiper
                                        loop={true}
                                        modules={[Navigation, Thumbs]}
                                        grabCursor={true}
                                        navigation={true}
                                        thumbs={{ swiper: activeThumb }}
                                        className="product-images-slider"
                                    >
                                        <SwiperSlide>
                                            <img
                                                alt=""
                                                src="https://images.thinkgroup.vn/unsafe/fit-in/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                alt=""
                                                src="https://images.thinkgroup.vn/unsafe/fit-in/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img
                                                alt=""
                                                src="https://images.thinkgroup.vn/unsafe/fit-in/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
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
                        <section className={'box-shadow ' + cx('attribute')}>
                            <h2>Cấu hình đặc điểm</h2>
                            <div className={cx('title')}>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                                <div className={cx('title_item')}>
                                    <span className={cx('name')}>CPU Name</span>
                                    <span className={cx('text')}>Core i7 10510U</span>
                                </div>
                            </div>
                            <div className={cx('more')}>
                                <span className="text--blue">Xem cấu hình chi tiết</span>
                            </div>
                        </section>
                        <section className={'box-shadow ' + cx('transport')}>
                            <div>
                                <h2>Vận chuyển</h2>
                                <span className="text--blue">Miễn phí (HN, TP.HCM)</span>
                            </div>
                        </section>
                        <section className={'box-shadow ' + cx('guarantee')}>
                            <div>
                                <h2>Bảo hành &#38; đổi trả</h2>
                                <span className="text--blue">18 tháng</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;
