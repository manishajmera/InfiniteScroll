
// import thunk from 'redux-thunk';
// const middlewares = [thunk];
//
// createStore(rootReducer, initialState, applyMiddleware(...middlewares));
import { createStore,applyMiddleware } from 'redux';
// import rootReducer from './RootReducer';
import InfiniteScrollReducer from './Reducer/InfiniteScrollReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(InfiniteScrollReducer,composeWithDevTools(applyMiddleware(logger)));

export default store;
