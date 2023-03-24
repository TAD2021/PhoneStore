import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductDetail() {
    let { slug } = useParams();
    let location = useLocation();
    console.log(slug, location);
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
                    <div className={cx('left')}>
                        <section className={'box-shadow ' + cx('media')}>
                            <div className={cx('media_thumb')}>
                                <div className={'inset-0'}>
                                    <div className={cx('thumb_list')}>
                                        <div className={cx('thumb_item', 'active')}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('media_main')}>
                                <div className={cx('main_image')}>
                                    <img
                                        alt=""
                                        src="https://images.thinkgroup.vn/unsafe/fit-in/1000x1000/https://media-api-beta.thinkpro.vn/media/core/products/2022/9/28/avita-liber-v14-intel-03-thinkpro-1.png"
                                    />
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
                    <div className={cx('right')}></div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetail;
