import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import FilterItem from './FilterItem';

const cx = classNames.bind(styles);

const demands = [
    {
        name: 'Nhu cầu',
    },
    ['Chơi game / cấu hình cao', 'Chụp ảnh, quay phim', 'Mỏng nhẹ', 'Nhỏ gọn, dễ cầm'],
];
const prices = [
    {
        name: 'Giá',
    },
    ['Dưới 2 triệu', 'Từ 2 - 4 triệu', 'Từ 4 - 7 triệu', 'Từ 7 - 13 triệu', 'Từ 13 - 20 triệu', 'Trên 20 triệu'],
];
const types = [
    {
        name: 'Loại điện thoại',
    },
    ['Android', 'iPhone(IOS)'],
];
const rams = [
    {
        name: 'RAM',
    },
    ['2 GB', '3 GB', '4 GB', '6 GB', '8 GB', '12 GB'],
];
const storageCapacities = [{ name: 'Dung lượng lưu trữ' }, ['32 GB', '64 GB', '128 GB', '256 GB', '512 GB', '1 TB']];
const pins = [
    { name: 'Pin & Sạc' },
    ['Pin khủng trên 5000 mAh', 'Sạc nhanh( từ 18W )', 'Sạc siêu nhanh (từ 33W)', 'Sạc không dây'],
];
const specials = [
    { name: 'Tính năng đặc biệt' },
    ['Kháng nước, bụi', 'Hỗ trợ 5G', 'Bảo mật khuôn mặt 3D', 'Chống rung quang học'],
];

function Filter() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <div className={cx('filter_row')}>
                    <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
                    <span>Bộ lọc</span>
                </div>
                <FilterItem infos={demands[1]} name={demands[0]} />
                <FilterItem infos={prices[1]} name={prices[0]} />
                <FilterItem infos={types[1]} name={types[0]} />
                <FilterItem infos={rams[1]} name={rams[0]} />
                <FilterItem infos={storageCapacities[1]} name={storageCapacities[0]} />
                <FilterItem infos={pins[1]} name={pins[0]} />
                <FilterItem infos={specials[1]} name={specials[0]} />
            </div>
        </div>
    );
}

export default Filter;
