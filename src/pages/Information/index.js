import styles from './Information.module.scss';
import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Profile from '~/components/Profile';
import Password from '~/components/Password';
import Purchase from '~/components/Purchase';

const cx = classNames.bind(styles);

function Information() {
    const [dropdown, setDropdown] = useState(true);
    const [str, setStr] = useState('');

    useEffect(() => (dropdown ? setStr('dropdown--open') : setStr('')), [dropdown]);

    let { slug } = useParams();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('category')}>
                    <div className={cx('category_header')}>
                        <Link to="/users/account/profile">
                            <div className={cx('avatar')}>
                                <img
                                    src="https://i.pinimg.com/564x/f2/47/1b/f2471baae58bf1abc5989f92756ab0c0.jpg"
                                    alt=""
                                />
                            </div>
                        </Link>
                        <div className={cx('edit_profile')}>
                            <div className={cx('name')}>Thongle</div>
                            <div className={cx('edit')}>
                                <FontAwesomeIcon icon={faPen} className={cx('icon')} />
                                <span>Sửa hồ sơ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('category_body')}>
                        <div className={cx('header')}>
                            <div className={cx('dropdown__item-header')} onClick={() => setDropdown(!dropdown)}>
                                <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                                <span>Tài khoản của tôi</span>
                            </div>
                            <div className={cx('dropdown__item-body', str)}>
                                <div className={cx('dropdown__item-body-container')}>
                                    <Link to="/users/account/profile">
                                        <span className={slug === 'profile' ? cx('active') : ''}>Hồ sơ</span>
                                    </Link>
                                    <Link to="/users/account/password">
                                        <span className={slug === 'password' ? cx('active') : ''}>Đổi mật khẩu</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('header')}>
                            <div className={cx('dropdown__item-header', slug === 'purchase' ? cx('active') : '')}>
                                <Link to="/users/account/purchase">
                                    <FontAwesomeIcon icon={faClipboardList} className={cx('icon')} />
                                    <span>Đơn mua</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {slug === 'purchase' ? (
                    <Purchase />
                ) : (
                    <div className={'box-shadow ' + cx('detail')}>
                        <div className={cx('detail_container')}>
                            {slug === 'profile' && <Profile />}
                            {slug === 'password' && <Password />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Information;
