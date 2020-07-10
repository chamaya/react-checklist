import { createStore } from "redux";
import appReducer from "./AppReducers.js";

class store{
    
    constructor(){
        this.storeObj = createStore(this.getReducers());
    }

    getStore(){
        return this.storeObj;
    }

    getReducers(){
        //add reducers here as they are created
        return appReducer;
    }
}

export default store;