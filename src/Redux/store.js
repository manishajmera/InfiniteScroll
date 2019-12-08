
// import thunk from 'redux-thunk';
// const middlewares = [thunk];
//
// createStore(rootReducer, initialState, applyMiddleware(...middlewares));
import { createStore,applyMiddleware } from 'redux';
// import rootReducer from './RootReducer';
import rootReducer from './RootReducer';
const thunkMiddleware  = require('redux-thunk').default;


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;
