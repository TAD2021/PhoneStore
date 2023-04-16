import config from '~/config';

import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Admin from '~/pages/Admin';
import Product from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import Information from '~/pages/Information';
import Checkout from '~/pages/Checkout';
import AdminLogin from '~/pages/AdminLogin';
import ResetPassword from '~/pages/ResetPassword';

import AdminLayout from '~/layouts/AdminLayout';
import AdminLoginLayout from '~/layouts/AdminLoginLayout';

const publishRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.adminLogin, component: AdminLogin, layout: AdminLoginLayout },
    { path: config.routes.admin, component: Admin, layout: AdminLayout },
    { path: config.routes.phone, component: Product },
    { path: config.routes.resetPassword, component: ResetPassword },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.profile, component: Information },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
