// import React from 'react'

// function Cart(props) {
//     const { cart } = props;
//     let quantity = 0;
//     for (const product of cart) {
//         quantity = quantity + product.quantity;
//     }
//     return (
//         <div className='cart'>
//             <h4>Order Summary</h4>
//             <p>Selected Items: {quantity}</p>
//         </div>
//     )
// }

// export default Cart;

import React from 'react';

function Cart(props) {
    const { cart } = props;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart}</p>
        </div>
    )
}

export default Cart;

