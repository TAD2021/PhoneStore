import classNames from 'classnames/bind';
import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ product }) {
    return (
        <div className={cx('grid_item', 'product_item')}>
            <div className={cx('product_image')}>
                <img src={product.img} className={cx('img')} alt="" />
            </div>
            <div className={cx('product_info')}>
                <div className={cx('product_title')}>{product.name}</div>
                <div className={cx('price_wrapper')}>
                    <span className={cx('text')}>Từ</span>
                    <span className={cx('price')}>{product.price}</span>
                    {product.discount && (
                        <div className={cx('discount')}>
                            <span>-{product.discount}%</span>
                        </div>
                    )}
                </div>
                <div className={cx('color_wrapper')}>
                    <span className={cx('text')}>Màu</span>
                    <div className={cx('color')}></div>
                    <div className={cx('color')}></div>
                    <div className={cx('color')}></div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
