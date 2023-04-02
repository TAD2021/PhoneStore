import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Button({ index, children, primary, handleActive = defaultFn, color, icon }, ref) {
    return (
        <div className={cx('button', primary, color)} onClick={() => handleActive(index)} ref={ref}>
            <span className={cx('info')}>{children}</span>
            {icon && <span className={cx('icon')}>{icon}</span>}
        </div>
    );
}

export default forwardRef(Button);
