import classNames from 'classnames/bind';
import styles from './Productsearch.module.scss';

const cx = classNames.bind(styles);

function Productsearch() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/564x/13/47/aa/1347aa0cdab7eb8a50548a0e740988ae.jpg"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Túi xách chống sốc Macbook 13" tomtoc 360° Protection Premium (H13-C02D01)</span>
                </h4>
                <span className={cx('price')}>1.090.000</span>
            </div>
        </div>
    );
}

export default Productsearch;
