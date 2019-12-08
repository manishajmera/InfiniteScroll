
// import thunk from 'redux-thunk';
// const middlewares = [thunk];
//
// createStore(rootReducer, initialState, applyMiddleware(...middlewares));
import { createStore,applyMiddleware } from 'redux';
// import rootReducer from './RootReducer';
import InfiniteScrollReducer from './Reducer/InfiniteScrollReducer';
const thunkMiddleware  = require('redux-thunk').default;


const store = createStore(InfiniteScrollReducer,applyMiddleware(thunkMiddleware));

export default store;
