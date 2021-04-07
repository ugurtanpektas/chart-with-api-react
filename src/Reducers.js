import {combineReducers} from 'redux';
import chartReducer from './reducers/chartReducer';
import userReducer from './reducers/userReducer';

const Reducers = combineReducers({
    users:userReducer,
    charts:chartReducer
})

export default Reducers;