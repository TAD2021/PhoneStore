import { Fragment, useEffect, useState } from 'react';
import Products from '~/components/Products';
import * as productService from '~/services/productService';

function Recommend() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.getAllProduct();
            setProducts(result);
            return result;
        };
        getProduct();
    }, []);

    return (
        <Fragment>
            <Products products={products.slice(0, 10)} />
        </Fragment>
    );
}

export default Recommend;
