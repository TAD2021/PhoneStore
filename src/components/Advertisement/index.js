import classNames from 'classnames/bind';
import Slider from 'react-slick/lib/slider';
import styles from './Advertisement.module.scss';

const cx = classNames.bind(styles);
const images = [
    'https://media-api-beta.thinkpro.vn/media/core/banners/2023/2/21/1920x1080.png',
    'https://media-api-beta.thinkpro.vn/media/core/banners/2023/1/4/nho.png',
    'https://media-api-beta.thinkpro.vn/media/core/banners/2023/2/2/banner-g.png',
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
