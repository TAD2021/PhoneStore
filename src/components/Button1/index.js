import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(props, ref) {
    const handleOnClick = () => {
        if (props.handleActive) props.handleActive(props.index);
    };

    return (
        <div className={cx('button', props.primary, props.color)} onClick={() => handleOnClick()} ref={ref}>
            <span className={cx('info')}>{props.children}</span>
            {props.icon && <span className={cx('icon')}>{props.icon}</span>}
        </div>
    );
}

export default forwardRef(Button);
