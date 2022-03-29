import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import Product from '../Prodect/Product';
import Cart from '../Cart/Cart'
import "./Shop.css";

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);
    const [rendom, setRendom] = useState([0]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        if (cart.length < 4) {
            const newCart = [...cart, product];
            setcart(newCart);
        }
        else {
            alert("You have alrady 4 item select.");
        }
    }

    const clearData = () => {
        const clearProduct = [];
        setcart(clearProduct);
    }    

    const selectRandom = () => {
        const random = cart[Math.floor(Math.random() * cart.length)];
        setRendom(random);
    }

    return (
        <div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}
                        />)
                    }

                </div>
                <div className="cart-container">
                    <div className="cart-container-inner">
                        <h4>My Orders..</h4>
                        <Cart cart={cart}></Cart>

                        <button className='btn-cart btn-select-rendom' onClick={() => selectRandom(rendom)}><p className='btn-text'>Select Rendom</p>
                        </button>
                        <button className='btn-cart btn-clear' onClick={() => clearData()}>Clear<FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
