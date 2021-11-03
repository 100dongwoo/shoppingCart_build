import React from 'react';
import './index.css';
import Product from '../../component/Product';

function HomeScreen(props) {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">
                Latest Products
            </h2>
            <div className="homescreen__products">
                <Product
                    name={1}
                    description={'1'}
                    price={'1'}
                    productId={'!1'}
                    imageUrl="https://t1.daumcdn.net/liveboard/tailorcontents/b0b8630dd9ac4e3c9d6bb98a3548946a.jpg"
                />
                <Product
                    name={1}
                    description={'1'}
                    price={'1'}
                    productId={'!1'}
                    imageUrl="https://t1.daumcdn.net/liveboard/tailorcontents/b0b8630dd9ac4e3c9d6bb98a3548946a.jpg"
                />
                {/*{loading ? (*/}
                {/*    <h2>Loading...</h2>*/}
                {/*) : error ? (*/}
                {/*    <h2>{error}</h2>*/}
                {/*) : (*/}
                {/*    products.map((product) => (*/}
                {/*        <Product*/}
                {/*            key={product._id}*/}
                {/*            name={product.name}*/}
                {/*            description={product.description}*/}
                {/*            price={product.price}*/}
                {/*            imageUrl={product.imageUrl}*/}
                {/*            productId={product._id}*/}
                {/*        />*/}
                {/*    ))*/}
                {/*)}*/}
            </div>
        </div>
    );
}

export default HomeScreen;
