import { combineReducers } from 'redux';

import infiniteScrollReducer from './Reducer/InfiniteScrollReducer';
import favoriteReducer from './Reducer/FavoriteReducer';

const rootReducer = combineReducers({
    infiniteScrollData: infiniteScrollReducer,
    favoriteData: favoriteReducer
});

export default rootReducer;
