import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProductTypes } from './Actions';

export const GetAllProducts = (state) => {
    console.log(`GetAllProducts : ${state.products.length}`)
    return ({
        ...state
    })
}

export const getAllProductsSuccess = (state, action) => {
    return ({
        products: [
            ...state.products,
            ...action.products
        ]
    })
}

export const SalesProducts = (state, action) => {
    return ({
        on_sale: [
            ...state.on_sale,
            ...action.on_sale
        ]
    })
}


export const ProductReducer = createReducer(INITIAL_STATE, {
    // [ProductTypes.GET_ALL_PRODUCTS]: GetAllProducts,
    [ProductTypes.GET_ALL_PRODUCTS_SUCCESS]: getAllProductsSuccess,
    [ProductTypes.ON_SALE_PRODUCTS]: SalesProducts,
})