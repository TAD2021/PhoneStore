import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img
                    src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
                    alt=""
                />

                <section className={cx('support')}>
                    <h2 className="text-h3">Cần hỗ trợ thêm</h2>
                    <div className="mt-2">
                        <p className="text-md">Nhận tư vấn miễn phí từ chuyên gia</p>
                    </div>
                    <div className={cx('contact')}>
                        <Link to="google.com" className={cx('phone')}>
                            <svg
                                fill="none"
                                height="32"
                                viewBox="0 0 24 24"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white"
                            >
                                <path
                                    d="M21.1365 12H18.1365C17.7387 12 17.3571 12.158 17.0758 12.4393C16.7945 12.7207 16.6365 13.1022 16.6365 13.5V17.25C16.6365 17.6478 16.7945 18.0294 17.0758 18.3107C17.3571 18.592 17.7387 18.75 18.1365 18.75H19.6365C20.0343 18.75 20.4158 18.592 20.6971 18.3107C20.9784 18.0294 21.1365 17.6478 21.1365 17.25V12ZM21.1365 12C21.1365 10.8124 20.9014 9.63647 20.4449 8.5401C19.9883 7.44373 19.3192 6.44856 18.4763 5.61196C17.6333 4.77536 16.6331 4.11388 15.5333 3.66564C14.4335 3.21739 13.2558 2.99125 12.0682 3.00026C10.8806 2.99125 9.70299 3.21739 8.60319 3.66564C7.50339 4.11388 6.50318 4.77536 5.66021 5.61196C4.81725 6.44856 4.1482 7.44373 3.69163 8.5401C3.23506 9.63647 3 10.8124 3 12V17.25C3 17.6478 3.15804 18.0294 3.43934 18.3107C3.72064 18.592 4.10218 18.75 4.5 18.75H6C6.39782 18.75 6.77936 18.592 7.06066 18.3107C7.34196 18.0294 7.5 17.6478 7.5 17.25V13.5C7.5 13.1022 7.34196 12.7207 7.06066 12.4393C6.77936 12.158 6.39782 12 6 12H3"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>{' '}
                                <path
                                    d="M21.1365 17.25V19.5C21.1365 20.2956 20.8204 21.0587 20.2578 21.6213C19.6952 22.1839 18.9321 22.5 18.1365 22.5H12.75"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                            </svg>
                        </Link>
                        <Link to="google.com" className={cx('zalo')}>
                            <img src={images.zalo} alt="" />
                        </Link>
                        <Link to="google.com" className={cx('messenger')}>
                            <img src={images.messenger} alt="" />
                        </Link>
                        <Link to="google.com" className={cx('telegram')}>
                            <img src={images.telegram} alt="" />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Footer;
