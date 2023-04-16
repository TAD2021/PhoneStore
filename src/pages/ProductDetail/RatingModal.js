import styles from './RatingModal.module.scss';
import classNames from 'classnames/bind';
import * as ratingService from '~/services/ratingService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function RatingModal(props) {
    const [star, setStar] = useState(0);
    const [comment, setComment] = useState('');
    const user = useSelector((state) => state.auth.login.currentUser);

    const handleSubmit = async () => {
        if (!user) {
            alert('Bạn phải đăng nhập để đánh giá sản phẩm');
            return;
        }
        const data = {
            userId: user._id,
            productId: props.data._id,
            username: user.name,
            comment,
            rating: star,
        };
        await ratingService.createRating(data);
        props.callbackRatingModal(false);
    };
    return (
        <div className={cx('modal')} onClick={() => props.callbackRatingModal(false)}>
            <div className={cx('modal__overlay')}></div>
            <div className={cx('modal__body')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <h3>Đánh giá và nhận xét {props.data.nameProduct}</h3>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={cx('close_icon')}
                                onClick={(e) => props.callbackRatingModal(false)}
                            />
                        </div>
                        <div className={cx('body')}>
                            <textarea
                                placeholder="Xin hãy chia sẻ một số cảm nhận về sản phẩm này"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                            <div className={cx('modal-review-star')}>
                                <p>Bạn thấy sản phẩm này như thế nào ?</p>
                                <div>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                onClick={() => setStar(1)}
                                                style={star >= 1 ? { color: '#f59e0b' } : { color: 'black' }}
                                            />
                                        </div>
                                        <p>Rất tệ</p>
                                    </div>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                onClick={() => setStar(2)}
                                                style={star >= 2 ? { color: '#f59e0b' } : { color: 'black' }}
                                            />
                                        </div>
                                        <p>Tệ</p>
                                    </div>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                onClick={() => setStar(3)}
                                                style={star >= 3 ? { color: '#f59e0b' } : { color: 'black' }}
                                            />
                                        </div>
                                        <p>Bình thường</p>
                                    </div>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                onClick={() => setStar(4)}
                                                style={star >= 4 ? { color: '#f59e0b' } : { color: 'black' }}
                                            />
                                        </div>
                                        <p>Tốt</p>
                                    </div>
                                    <div>
                                        <div>
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                onClick={() => setStar(5)}
                                                style={star === 5 ? { color: '#f59e0b' } : { color: 'black' }}
                                            />
                                        </div>
                                        <p>Rất tốt</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSubmit}>Gửi đánh giá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RatingModal;
