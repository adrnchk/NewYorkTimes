import {combineReducers} from 'redux'
import userInfo from './userInfo'
import articles from './articles'
import ordersReducer from './ordersReducer'
import freelancerReducer from './freelancerReducer'
export const rootReducer = combineReducers(
    {
        userInfo,
        ordersReducer,
        articles,
        freelancerReducer
    } 
);