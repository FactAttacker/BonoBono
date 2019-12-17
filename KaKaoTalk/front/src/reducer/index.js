import { combineReducers } from 'redux';
import ReducerTest from './reducer_test';
import * as types from '../actions/actionType';

const rootReducer = {
    test : ReducerTest,
}

const reduxTest = (state = rootReducer, action) => {
    switch (action.type) {
        case types.TEST:
            return {};
        default:
            return state;
    }
} 

export default combineReducers({reduxTest});