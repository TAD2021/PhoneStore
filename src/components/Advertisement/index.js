import classNames from 'classnames/bind';
import Slider from 'react-slick/lib/slider';
import styles from './Advertisement.module.scss';

const cx = classNames.bind(styles);
const images = [
    'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/oppo-sliding-new-moban.png',
    'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/hotsale-s22-uktrrcuoituan.png',
    'https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/Screenshot_14.png',
];

function Advertisement() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings} className={cx('slider')}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" />
                ))}
            </Slider>
            <div className={cx('ad_list')}>
                <div className={cx('ad_item')}>
                    <h3>Miễn phí vận chuyển</h3>
                    <p>100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.</p>
                </div>

                <div className={cx('ad_item')}>
                    <h3>Bảo hành tận tâm</h3>
                    <p>Bất kể giấy tờ thế nào, ThinkPro luôn cam kết sẽ hỗ trợ khách hàng tới cùng.</p>
                </div>

                <div className={cx('ad_item')}>
                    <h3>Đổi trả 1-1 hoặc hoàn tiền</h3>
                    <p>Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu cầu.</p>
                </div>
            </div>
        </div>
    );
}

export default Advertisement;
