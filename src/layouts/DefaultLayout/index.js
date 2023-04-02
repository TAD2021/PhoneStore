import classNames from 'classnames/bind';
import Header from '~/components/Header';
import Categories from '~/components/Categories';
import styles from './DefaultLayout.module.scss';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Categories />
            {children}
            <Footer></Footer>
        </div>
    );
}
export default DefaultLayout;
