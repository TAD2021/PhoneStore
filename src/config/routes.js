const routes = {
    home: '/',
    cart: '/cart',
    adminLogin: '/admin/login',
    admin: '/admin/:slug',
    checkout: '/checkout',
    phone: '/phone',
    forgotPassword: '/users/forgotpassword',
    resetPassword: '/users/resetpassword/:token',
    productDetail: '/:product/:slug',
    profile: '/users/account/:slug',
};

export default routes;
