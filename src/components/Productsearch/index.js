import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Productsearch.module.scss';

const cx = classNames.bind(styles);

function Productsearch({ result }) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <Link to={`/phone/${result._id}`}>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src={result.image} alt="" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{result.nameProduct}</span>
                    </h4>
                    <span className={cx('price')}>{VND.format(result.price - result.discount || result.price)}</span>
                </div>
            </div>
        </Link>
    );
}

export default Productsearch;
