import { combineReducers } from 'redux';

import personalDetailReducer from './PersonalDetail/PersonalDetailReducer';
import residenceReducer from './Residence/ResidenceReducer';

const rootReducer = combineReducers({
    personalDetail: personalDetailReducer,
    residence: residenceReducer
});

export default rootReducer;
