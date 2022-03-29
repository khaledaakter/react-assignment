import React from 'react';
import './Cart.css';

function Cart(props) {
    const { cart } = props;
   

    return (
        <div className='cart'>
            {
                cart.map((product, id) => 
                    <div className='singleCartItem' key={id}>
                        <div className='singleCartImg'><img src={product.img} /></div>
                        <p>{product.name}</p>
                    </div>
                )
            }
            
        </div>
    )
}

export default Cart;

