import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/layouts/components/Popper';
import Productsearch from '~/layouts/components/Productsearch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faCartShopping,
    faTruckFast,
    faBell,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo_search')}>
                    <Link to="/" className={cx('logo')}>
                        <img
                            src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
                            alt="thinkpro"
                        />
                    </Link>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Sản phẩm</h4>
                                    <Productsearch />
                                    <Productsearch />
                                    <Productsearch />
                                    <Productsearch />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Tên sản phẩm, hãng" spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    <Link to="/cart" className={cx('action')}>
                        <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                        <span>0</span>
                    </Link>
                    <FontAwesomeIcon className={cx('action')} icon={faTruckFast} />
                    <FontAwesomeIcon className={cx('action')} icon={faBell} />
                    <FontAwesomeIcon className={cx('action')} icon={faUser} />
                </div>
            </div>
        </header>
    );
}

export default Header;
