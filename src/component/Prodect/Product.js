import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import './Product.css';


function Product(props) {
    
    if(props.product) {
        const {product, handleAddToCart} = props;
        const { id, name, price, img } = product;
        
        
        return (

            <div className='product'>
                <div className='product-info'>
                    <div className='product-img'><img src={img} alt="product" /></div>
                    <h3 className='product-name'>{name}</h3>
                    <p className='product-price'>Price: ${price}</p>      
                    <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                        <p className='btn-text'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>              
                </div>            
            </div>
        )
    }

    return <div></div>;
    
    
}

export default Product;
