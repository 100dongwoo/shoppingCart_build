import React from 'react';
import './index.css';
import CartItem from '../../component/CartItem';
function CartScreen(props) {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                <CartItem item={1} />
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal 1</p>
                    <p>1</p>
                    {/*<p>Subtotal ({getCartCount()}) items</p>*/}
                    {/*<p>${getCartSubTotal()}</p>*/}
                </div>
                <div>
                    <button>
                        Proceed To
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
