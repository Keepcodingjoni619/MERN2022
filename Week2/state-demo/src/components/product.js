import React from 'react'

const Product = (props) => {
    const { product } = props;
    const { name, price, category, image } = product;
    const handleClick = () => {
        
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p>category:{category}</p>
            <button onClick={()=>console.log(product)}>Change Price</button>
        </div>
    )
}

export default Product;