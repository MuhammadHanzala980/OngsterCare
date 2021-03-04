import { combineReducers } from "redux";
import getDataReducer from './reducers/dataReducer'

const allReducers = {
    getDataReducer
};

export default combineReducers(allReducers);
