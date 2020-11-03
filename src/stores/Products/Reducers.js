import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProductTypes } from './Actions';

export const allProducts = (state, action) => {
    if (state.products) {
        return ({
            ...state,
            products: [
                ...state.products,
                ...action.products
            ]
        })
    }
    else {
        return {
            ...state,
            products: [
                ...action.products
            ]
        }
    }
}

export const SalesProducts = (state, action) => {
    return ({
        ...state,
        on_sale: action.on_sale
    })
}

export const OfferProducts = (state, action) => {
    return ({
        ...state,
        offers: action.offers
    })
}

export const topProducts = (state, action) => {
    return ({
        ...state,
        top: action.top
    })
}

export const ParentCategories = (state, action) => {
    return ({
        ...state,
        parent_categories: action.parent_categories
    })
}

export const SubCategories = (state, action) => {
    return ({
        ...state,
        sub_categories: {
            [action.sub_categories.id.toString()]: action.sub_categories['categories']
        }
    })
}


export const ProductReducer = createReducer(INITIAL_STATE, {
    [ProductTypes.ALL_PRODUCTS]: allProducts,
    [ProductTypes.ON_SALE_PRODUCTS]: SalesProducts,
    [ProductTypes.OFFER_PRODUCTS]: OfferProducts,
    [ProductTypes.TOP_PRODUCTS]: topProducts,
    [ProductTypes.PARENT_CATEGORIES]: ParentCategories,
    [ProductTypes.SUB_CATEGORIES]: SubCategories,
})