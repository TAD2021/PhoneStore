import classNames from 'classnames/bind';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ product }) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
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
            </div>
        </div>
    );
}

export default ProductItem;
