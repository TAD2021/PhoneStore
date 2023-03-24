import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Filter.module.scss';

const cx = classNames.bind(styles);

function FilterItem({ infos, name }) {
    return (
        <div>
            <div className={cx('filter_list')}>
                <span>{name.name}</span>
            </div>
            <div className={cx('filter_item', 'last_item')}>
                {infos.map((info, index) => (
                    <Button key={index} info={info}></Button>
                ))}
            </div>
        </div>
    );
}

export default FilterItem;
