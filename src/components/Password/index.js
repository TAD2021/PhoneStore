import styles from './Password.module.scss';
import classNames from 'classnames/bind';
import { Fragment } from 'react';
const cx = classNames.bind(styles);

function Password() {
    return (
        <Fragment>
            <div className={cx('header')}>
                <h2>Địa chỉ của tôi</h2>
                <div>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</div>
            </div>
            <div className={cx('body')}>
                <div className={cx('inner')}>
                    <form>
                        <div className={cx('currentPassword')}>
                            <div>
                                <div>
                                    <div>
                                        <label>Mật khẩu hiện tại</label>
                                    </div>
                                    <div className={cx('input')}>
                                        <input type="text" />
                                    </div>
                                    <button>Quên mật khẩu ?</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <label>Mật khẩu mới</label>
                                    </div>
                                    <div className={cx('input')}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <label>Xác nhận mật khẩu</label>
                                    </div>
                                    <div className={cx('input')}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div></div>
                                    <div className={cx('input')}>
                                        <button>Xác nhận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Password;
