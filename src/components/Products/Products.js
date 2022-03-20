import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = (props) => {
    const [products, setProducst] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducst(json));
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {
                    products.map(product => <Product key={product.id} increase={props.increase} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;