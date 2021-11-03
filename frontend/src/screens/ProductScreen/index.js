import React from 'react';
import './index.css';
function ProductScreen(props) {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img
                        src={
                            'https://t1.daumcdn.net/liveboard/tailorcontents/b0b8630dd9ac4e3c9d6bb98a3548946a.jpg'
                        }
                        alt={1}
                    />
                </div>
                <div className="left__info">
                    <p className="left__name">
                        1
                    </p>
                    <p>Price: $ 1</p>
                    <p>
                        Description: {1}
                    </p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price:
                        <span>123</span>
                    </p>
                    <p>
                        Status:
                        <span>
                            "In Stock"
                            {/*{product.countInStock > 0 ? "In Stock" : "Out of Stock"}*/}
                        </span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option
                                value={
                                    1
                                }
                            >
                                1
                            </option>
                            <option
                                value={
                                    2
                                }
                            >
                                13
                            </option>
                        </select>
                    </p>
                    <p>
                        <button
                            type="button"
                            // onClick={
                            //     addToCartHandler
                            // }
                        >
                            Add To Cart
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;
