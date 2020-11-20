import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProductTypes } from './Actions';

export const allProducts = (state, action) => {
    if (state.products)
        return ({
            ...state,
            products: [
                ...state.products,
                ...action.products
            ]
        })
    return state;
}

export const SalesProducts = (state, action) => {
    if (action.on_sale)
        return ({
            ...state,
            on_sale: action.on_sale
        })
    return state;
}

export const OfferProducts = (state, action) => {
    return ({
        ...state,
        offers: action.offers
    })
}

export const topCategories = (state, action) => {
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
    if (action.sub_categories)
        return ({
            ...state,
            sub_categories: action.sub_categories
        })
    return state;
}

export const PopularCategories = (state, action) => {
    if (action.popular_categories)
        return ({
            ...state,
            popular_categories: action.popular_categories
        })
    return state;
}

export const CategoryId = (state, action) => {
    if (action.categoryId)
        return ({
            ...state,
            categoryId: action.categoryId
        })
    return state;
}

export const ProductsByCategory = (state, action) => {
    const { data, id } = action.productsByCategory;
    const ids = Object.keys(state.productsByCategory)
    var { productsByCategory } = state;
    if (ids.includes(id.toString()) && productsByCategory) {
        const allProducts = state.productsByCategory[id].concat(data)
        const unique = [...new Map(allProducts.map(item => [item['id'], item])).values()]
        productsByCategory[id] = unique
        return ({
            ...state,
            productsByCategory
        })
    }
    else {
        productsByCategory[id] = data
        return ({
            ...state,
            productsByCategory
        })
    }
}

export const ReviewsByProduct = (state, action) => {
    console.log('Reducer')
    if (action.reviewsByProduct)
        return ({
            ...state,
            reviewsByProduct: action.reviewsByProduct
        })
    return state;
}


export const ProductReducer = createReducer(INITIAL_STATE, {
    [ProductTypes.ALL_PRODUCTS]: allProducts,
    [ProductTypes.ON_SALE_PRODUCTS]: SalesProducts,
    [ProductTypes.OFFER_PRODUCTS]: OfferProducts,
    [ProductTypes.TOP_CATEGORIES]: topCategories,
    [ProductTypes.PARENT_CATEGORIES]: ParentCategories,
    [ProductTypes.SUB_CATEGORIES]: SubCategories,
    [ProductTypes.POPULAR_CATEGORIES]: PopularCategories,
    [ProductTypes.CATEGORY_ID]: CategoryId,
    [ProductTypes.PRODUCTS_BY_CATEGORY]: ProductsByCategory,
    [ProductTypes.REVIEWS_BY_PRODUCT]: ReviewsByProduct,
})