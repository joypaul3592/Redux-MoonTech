import React, { useEffect, useReducer, useState, useContext, createContext } from 'react';
import { actionType } from '../State/ActionType/ActionType';
import { initialState, ProductsReducer } from '../State/ProductsReducer/ProductsReducer';

export const Product_context = createContext()



const ProductProvider = ({ children }) => {


    const [state, dispatch] = useReducer(ProductsReducer, initialState)





    useEffect(() => {
        dispatch({ type: actionType.Fetch_Start })
        fetch('./products.json')
            .then(res => res.json())
            .then(data => dispatch({ type: actionType.Fetch_Success, payload: data }))
            .catch(
                dispatch({ type: actionType.Fetch_Error })
            )
    }, [])

    const value = { state, dispatch }


    return (
        <div>
            <Product_context.Provider value={value} >
                {children}
            </Product_context.Provider>
        </div>
    );
};


export const useProducts = () => {
    const context = useContext(Product_context);
    return context
}

export default ProductProvider;
