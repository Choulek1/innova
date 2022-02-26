import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
 
 import { signInReducer } from './sigInReducer'
 import { registerReducer } from "./registerReducer"



  //all reducers
const Reducers = combineReducers({
 

  // Sign In Reducer
  signInStore : signInReducer,

 // Register Reducer

 registerStore : registerReducer,

 


});
//store
const store = createStore(Reducers, applyMiddleware(thunk));
export default store;