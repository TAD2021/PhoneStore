import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products({ products, slug }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'product_list')}>
                {products.map((product, index) => (
                    <Link to={'/' + slug + '/' + product.name} key={index}>
                        <ProductItem product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Products;
