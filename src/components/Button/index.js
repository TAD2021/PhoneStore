import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ index, info, primary, handleActive = () => null, color, icon }) {
    return (
        <div className={cx('button', primary, color)} onClick={() => handleActive(index)}>
            <span className={cx('info')}>{info}</span>
            {icon && <span className={cx('icon')}>{icon}</span>}
        </div>
    );
}

export default Button;
