import { actionType } from "../ActionType/ActionType";

export const initialState = {
    loading: false,
    products: [],
    error: false
};


export const ProductsReducer = (state, action) => {

    console.log(state)
    switch (action.type) {
        case actionType.Fetch_Start:
            return {
                ...state,
                loading: true,
                error: false
            }

        case actionType.Fetch_Success:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false
            }

        case actionType.Fetch_Error:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state

    }

}