'use strict'

import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import logger from 'redux-logger';

import React from 'react';
import { render } from 'react-dom';
import BooksList from './components/pages/booksList';
import { Provider } from 'react-redux';

/*
// STEP 3 define reducers
const reducer = function (state={}, action) {
    switch (action.type) {
        case "POST_BOOK":
            return state = action.payload;
            break;
    }
    return state;
};

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
    console.log('current state is: ', store.getState());
    console.log('current price: ', store.getState().price);
});

// STEP 2 create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: {
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 33.33
    }
});
*/

/*
// STEP 3 define reducers
const reducer = function (state=0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
    return state;
};

// STEP 1 Create a store and subscribe for any changes
const store = createStore(reducer);
store.subscribe(function () {
    console.log('current state is: ' + store.getState());
});

// STEP 2 create and dispatch actions
store.dispatch({type: "INCREMENT", payload: 1});
store.dispatch({type: "INCREMENT", payload: 1});
store.dispatch({type: "DECREMENT"});
store.dispatch({type: "DECREMENT"});
*/

const middleware = applyMiddleware(logger);

// STEP 1 create the store
const store = createStore(reducers, middleware);

render(<Provider store={store}>
            <BooksList/>
        </Provider>
    , document.getElementById('app'));

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
    [{
        id: 1,
        title:'this is the book title',
        description: 'this is the book',
        price: 33.33
    },
    {
        id: 2,
        title:'this is the second book title',
        description: 'this is the second book',
        price: 50
    }]
));
/*
// DISPATCH an other book
store.dispatch({
    type:"POST_BOOK",
    payload: [{
        id: 3,
        title:'this is the third book title',
        description: 'this is the third book',
        price: 40
    }]
});
    */

/*
// DELETE book
store.dispatch(deleteBooks({id: 1}));

// UPDATE a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'Learn React in 24h'
    }
));

//-->> CART ACTIONS <<--
// ADD TO CART
store.dispatch(addToCart(
    {id: 1}
))
*/