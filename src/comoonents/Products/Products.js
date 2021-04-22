import React from 'react';

const Products = (props) => {
    const {product, addToCart} = props;
    // const {name, id} = props.product;
    return (
        <div style={{border: '1px solid tomato'}}>
            <h2>{product.name}</h2>
            <button onClick={()=> {addToCart(product.id, product.name)}}>Add to cart</button>
        </div>
    );
};

export default Products;