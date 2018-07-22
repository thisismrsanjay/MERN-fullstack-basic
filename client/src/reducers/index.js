import { combineReducers } from 'redux';
import itemReducer from './itemReducer';


//to send diffrent types of reducers
export default combineReducers({
    item:itemReducer
});
