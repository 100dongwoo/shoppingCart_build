import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducers } from './reducers/cartReducers';
import {
    getProductDetailsReducer,
    getProductsReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducers,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

/// 이 아래 부분이 localstorage를 사용하여 재접속해도 값 저장
const cartFromLocalStorage = localStorage.getItem(
    'cart'
)
    ? JSON.parse(
          localStorage.getItem('cart')
      )
    : [];
const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage,
    },
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);
export default store;
