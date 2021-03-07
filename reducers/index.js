import {combineReducers} from 'redux';
import userDataReducer from './userData';
import isLoggedInReducer from './isLoggedIn';

const rootReducer = combineReducers({
    userData: userDataReducer,
    isLoggedIn: isLoggedInReducer
})

export default rootReducer