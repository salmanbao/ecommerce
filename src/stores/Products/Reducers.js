import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProductTypes } from './Actions';

export const GetAllProducts = (state) => ({
    ...state
})

export const ProductReducer = createReducer(INITIAL_STATE, {
    [ProductTypes.GET_ALL_PRODUCTS]: GetAllProducts
})