import fetchThings from "./fetchData";
import { combineReducers } from "redux";
import routing from './routing';
//import operation from './operation';

const rootReducer = combineReducers({ 
    fetchThings,
    routing,
  //  operation
});

export default rootReducer;