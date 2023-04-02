import config from '~/config';

import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Admin from '~/pages/Admin';
import Product from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import Information from '~/pages/Information';

import AdminLayout from '~/layouts/AdminLayout';

const publishRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.admin, component: Admin, layout: AdminLayout },
    { path: config.routes.product, component: Product },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.profile, component: Information },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
