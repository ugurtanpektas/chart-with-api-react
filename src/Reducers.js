import {combineReducers} from 'redux';
import chartReducer from './reducers/chartReducer';
import userReducer from './reducers/userReducer';
import generalReducer from './reducers/generalReducer';

const Reducers = combineReducers({
    users:userReducer,
    charts:chartReducer,
    generals:generalReducer
})

export default Reducers;