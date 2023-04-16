import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { createAxios } from '~/createInstance';
import { loginSuccess } from '~/redux/authSlice';
import * as authService from '~/services/authService';

const cx = classNames.bind(styles);

function Header() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const token = useSelector((state) => state.auth.login.currentUser?.accessToken);
    const dispatch = useDispatch();

    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    const handleLogout = () => {
        authService.logout(dispatch, token, axiosJWT);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <h3>Home</h3>
                    <h3>Contact</h3>
                </div>
                <div className={cx('right')}>
                    <button className={cx('logout')} onClick={handleLogout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
