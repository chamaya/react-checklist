import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./AppReducers.js";

class store{
    
    constructor(){
        this.storeObj = createStore(this.getReducers(), applyMiddleware(thunk));
    }

    getStore(){
        return this.storeObj;
    }

    getReducers(){
        return appReducer;
    }
}

export default store;