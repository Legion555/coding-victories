import {combineReducers} from 'redux';
import userDataReducer from './userData';
import isLoggedInReducer from './isLoggedIn';
import victoriesReducer from './victories';

const rootReducer = combineReducers({
    userData: userDataReducer,
    isLoggedIn: isLoggedInReducer,
    victories: victoriesReducer
})

export default rootReducer