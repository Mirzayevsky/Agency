import React, { createContext,useReducer } from "react";
import {reducer} from "./reducer"
import  initialState  from "../data.js";
export const Context = createContext();
export const ContextContainer = ({children}) => {
const [state, dispatch] = useReducer(reducer,initialState)
console.log(state);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default ContextContainer