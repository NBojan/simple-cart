import React, { useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
import useFetch from "./useFetch";

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const initialState = {
    amount: 0,
    total: 0,
    cart: []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {data, loading, err} = useFetch(url);

    const clearCart = () => dispatch({type: "CLEAR"});
    const removeOne = id => dispatch({type: "REMOVE_ONE", payload: id});
    const toggleAmount = (id, math) => dispatch({type: "TOGGLE_AMOUNT", payload: {id, math}});
    const refreshCart = () => dispatch({type: "GET_DATA", payload: data});

    useEffect(() => {
        if(data){
           dispatch({type: "GET_DATA", payload: data});
        }
    }, [data])
    
    useEffect(() => {
        if(state.cart){
            dispatch({type: "GET_VALUES"});
        }
    }, [state.cart]);

    return (
        <AppContext.Provider value={{...state, clearCart, removeOne, toggleAmount, refreshCart, loading, err, data}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export {AppProvider, useGlobalContext}