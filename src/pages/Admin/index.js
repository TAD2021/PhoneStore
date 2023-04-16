import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from '~/components/Admin/Dashboard';
import Products from '~/components/Admin/Products';
import Orders from '~/components/Admin/Orders';
import Users from '~/components/Admin/Users';
import Profile from '~/components/Admin/Profile';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Admin() {
    let { slug } = useParams();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser);

    useEffect(
        () => {
            if (user === null || user.admin !== true) {
                navigate('/admin/login');
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
    );

    return (
        <main className={cx('wrapper')}>
            {(slug === 'dashboard' && <Dashboard />) ||
                (slug === 'products' && <Products />) ||
                (slug === 'orders' && <Orders />) ||
                (slug === 'users' && <Users />) ||
                (slug === 'profile' && <Profile />)}
        </main>
    );
}

export default Admin;
