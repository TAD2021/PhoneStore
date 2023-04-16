import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products({ products = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'product_list')}>
                {products.map((product, index) => (
                    <Link to={'/phone/' + product._id} key={index}>
                        <ProductItem product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default memo(Products);
