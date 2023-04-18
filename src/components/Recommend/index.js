import { Fragment, useEffect, useState } from 'react';
import Products from '~/components/Products';
import * as productService from '~/services/productService';
import * as ratingService from '~/services/ratingService';

function Recommend() {
    const [products, setProducts] = useState([]);
    const [rating, setRating] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const result = await productService.getAllProduct();
            setProducts(result);
            return result;
        };
        getProduct();
        const getRating = async () => {
            const result = await ratingService.getAllRating();
            setRating(result);
        };
        getRating();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <Products products={products.slice(0, 10)} rating={rating} />
        </Fragment>
    );
}

export default Recommend;
