import React from 'react'
import './Product.css';
function Product(props) {
    
    if(props.product) {
        const {product, handleAddToCart} = props;
        const { id, name, price, img } = props.product;

        return (

            <div className='product'>
                <div className='product-info'>
                    <div className='product-img'><img src={img} alt="product" /></div>
                    <h3 className='product-name'>{name}</h3>
                    <p className='product-price'>Price: ${price}</p>      
                    <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                        <p className='btn-text'>Add to Cart</p>
                    </button>              
                </div>
            
            </div>
        )
    }

    return <div></div>;
    
    
}

export default Product;
