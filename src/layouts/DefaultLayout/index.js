import classNames from 'classnames/bind';
import Header from '~/components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            {children}
            <Footer></Footer>
        </div>
    );
}
export default DefaultLayout;
