import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import './active.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Sidebar() {
    const user = useSelector((state) => state.auth.login.currentUser);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/admin/dashboard" className={cx('logo')}>
                        <div className={cx('logo_img')}>
                            <img
                                src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
                                alt="thinkpro"
                            />
                        </div>
                        <h3>Thinkpro</h3>
                    </Link>
                </div>
                <div className={cx('admin')}>
                    <div>
                        <div className={cx('admin_avatar')}>
                            <img
                                src="https://i.pinimg.com/564x/f2/47/1b/f2471baae58bf1abc5989f92756ab0c0.jpg"
                                alt="Nguyen Van A"
                            />
                        </div>
                        <div className={cx('admin_name')}>
                            <div>
                                <span>{user?.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('navbar')}>
                    <div>
                        <NavLink to="/admin/dashboard" className={cx('navbar_item')}>
                            <div>
                                <span>Trang chủ</span>
                            </div>
                        </NavLink>
                        <NavLink to="/admin/products" className={cx('navbar_item')}>
                            <div>
                                <span>Quản lý sản phẩm</span>
                            </div>
                        </NavLink>
                        <NavLink to="/admin/orders" className={cx('navbar_item')}>
                            <div>
                                <span>Quản lý đơn hàng</span>
                            </div>
                        </NavLink>
                        <NavLink to="/admin/users" className={cx('navbar_item')}>
                            <div>
                                <span>Quản lý người dùng</span>
                            </div>
                        </NavLink>
                        <NavLink to="/admin/profile" className={cx('navbar_item')}>
                            <div>
                                <span>Thông tin cá nhân</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
