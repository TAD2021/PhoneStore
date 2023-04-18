import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ product, rating }) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const [star, setStar] = useState(0);

    useEffect(() => {
        let result =
            rating.length > 0
                ? (rating.reduce((acc, current) => acc + current.rating, 0) / rating.length).toFixed(0)
                : 0;
        setStar(parseInt(result));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    return (
        <div className={cx('grid_item', 'product_item')}>
            <div className={cx('product_image')}>
                <img src={product.image} className={cx('img')} alt="" />
            </div>
            <div className={cx('product_info')}>
                <div className={cx('product_title')}>{product.nameProduct}</div>
                <div className={cx('price_wrapper')}>
                    <span className={cx('text')}>Từ</span>
                    <span className={cx('price')}>{VND.format(product.price - product.discount || product.price)}</span>
                    {product.discount && (
                        <div className={cx('discount')}>
                            <span>-{(product.price / product.discount).toFixed(0)}%</span>
                        </div>
                    )}
                </div>
                <div className={cx('star_wrapper')}>
                    <FontAwesomeIcon
                        icon={faStar}
                        className={
                            star >= 1
                                ? cx('star-icon', 'active')
                                : star === 0
                                ? cx('star-icon', 'no-star')
                                : cx('star-icon')
                        }
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={
                            star >= 2
                                ? cx('star-icon', 'active')
                                : star === 0
                                ? cx('star-icon', 'no-star')
                                : cx('star-icon')
                        }
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={
                            star >= 3
                                ? cx('star-icon', 'active')
                                : star === 0
                                ? cx('star-icon', 'no-star')
                                : cx('star-icon')
                        }
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={
                            star >= 4
                                ? cx('star-icon', 'active')
                                : star === 0
                                ? cx('star-icon', 'no-star')
                                : cx('star-icon')
                        }
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={
                            star === 5
                                ? cx('star-icon', 'active')
                                : star === 0
                                ? cx('star-icon', 'no-star')
                                : cx('star-icon')
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
