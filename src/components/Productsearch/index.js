import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Productsearch.module.scss';

const cx = classNames.bind(styles);

function Productsearch(props) {
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
    return (
        <Link to={`/phone/${props.result._id}`}>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src={props.result.image} alt="" />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{props.result.nameProduct}</span>
                    </h4>
                    <span className={cx('price')}>
                        {VND.format(props.result.price - props.result.discount || props.result.price)}
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default Productsearch;
