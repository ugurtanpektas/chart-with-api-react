import {combineReducers} from 'redux';

import userReducer from './reducers/userReducer';

const Reducers = combineReducers({
    users:userReducer
})

export default Reducers;