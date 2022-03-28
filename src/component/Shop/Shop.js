import React, {useEffect, useState} from 'react'
import Product from '../Prodect/Product';

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('Products.json')
            .then(res=> res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product}
                    />)
                }

                </div>
                <div className="cart-container">
                    <div className="cart-container-inner">
                        <h4>Order Summary</h4>
                        <p>Selected Items:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
