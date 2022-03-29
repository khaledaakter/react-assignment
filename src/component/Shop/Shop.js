import React, {useEffect, useState} from 'react'
import Product from '../Prodect/Product';
import "./Shop.css";

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect( () => {
        fetch('Products.json')
            .then(res=> res.json())
            .then(data => setProducts(data))
    }, []);


    
        const handleAddToCart = (product) => {
            console.log(product);
            if(cart.length < 4) {
                const newCart = [...cart, product];
                setcart(newCart);
            }
            else {
                alert("You have alrady 4 item select.");
            }
        }
    
    // const handleAddToCart = (product) => {
    //     console.log(product);
    //     const newCart = [...cart, product];
    //     setcart(newCart);
    // }



    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}
                    />)
                }

                </div>
                <div className="cart-container">
                    <div className="cart-container-inner">
                        <h4>Order Summary</h4>
                        <p>Selected Items: {cart.length}</p>
                        <div className='addToProduct'></div>

                        <button className='btn-cart btn-select-rendom'><p className='btn-text'>Select Rendom</p></button>   
                        <button className='btn-cart btn-clear'><p className='btn-text'>Clear</p></button>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
