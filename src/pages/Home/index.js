import { Fragment } from 'react';
import Advertisement from '~/components/Advertisement';
import Trademark from '~/components/Trademark';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faHeadset, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Recommend from '~/components/Recommend';

const cx = classNames.bind(styles);

function Home() {
    return (
        <Fragment>
            <Advertisement />
            <Trademark />

            <div className={cx('container')}>
                <div className={cx('wrapper_body')}>
                    <div className={cx('recommend')}>
                        <h2>Gợi ý cho bạn</h2>
                        <Recommend />
                    </div>
                    <section className={cx('usp')}>
                        <div className={cx('usp_container')}>
                            <h2>
                                <span>ThinkPro</span>
                                <span className={cx('text')}>Là nơi để bạn và người thân tin tưởng lựa chọn</span>
                            </h2>
                            <div className={cx('usp_list')}>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faQuoteLeft} className="greenIcon" />
                                        <div className={cx('item_text')}>
                                            Được <span className="text--green"> trải nghiệm </span> sản phẩm
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faHeadset} className="blueIcon" />
                                        <div className={cx('item_text')}>
                                            Tư vấn viên <span className="text--blue"> tận tâm </span> và có
                                            <span className="text--blue"> chuyên môn </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faEnvelope} className="orangeIcon" />
                                        <div className={cx('item_text')}>
                                            Chúng tôi có Trung tâm{' '}
                                            <span className="text--orange"> bảo vệ quyền lợi </span> khách hàng
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('usp_item')}>
                                    <div className={cx('item')}>
                                        <FontAwesomeIcon icon={faClock} className="purpleIcon" />
                                        <div className={cx('item_text')}>
                                            Thời gian <span className="text--purple"> phục vụ </span> đến{' '}
                                            <span className="text--purple"> 23:59 .</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
