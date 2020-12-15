import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProductTypes } from './Actions';

export const allProducts = (state, action) => {

    if (action.products) {
        const allProducts = state.products.length !== 0 ? state.products.concat(action.products) : action.products
        const unique = [...new Map(allProducts.map(item => [item['id'], item])).values()]
        return ({
            ...state,
            products: unique
        })
    }
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
    const { data, id, page } = action.productsByCategory;
    const ids = Object.keys(state.productsByCategory)
    var { productsByCategory } = state;

    if (page === 1) {
        productsByCategory[id] = data
        return ({
            ...state,
            productsByCategory
        })
    }

    if (ids.includes(id.toString()) && productsByCategory) {
        const allProducts = state.productsByCategory[id].concat(data)
        const unique = [...new Map(allProducts.map(item => [item['id'], item])).values()]
        productsByCategory[id] = unique
        return ({
            ...state,
            productsByCategory
        })
    }
}

export const ReviewsByProduct = (state, action) => {
    if (action.reviewsByProduct)
        return ({
            ...state,
            reviews: action.reviewsByProduct
        })
    return state;
}

export const AllCoupons = (state, action) => {
    if (action.coupons) {
        const allCoupons = state.coupons.length !== 0 ? state.coupons.concat(action.coupons) : action.coupons
        const unique = [...new Map(allCoupons.map(item => [item['id'], item])).values()]
        return ({
            ...state,
            coupons: unique
        })
    }
    return state;
}

export const AllAttributes = (state, action) => {
    if (action.attributes) {
        return ({
            ...state,
            attributes: action.attributes
        })
    }
    return state;
}

export const AddToCart = (state, action) => {

    const allProducts = state.cart.length !== 0 ? state.cart.concat(action.product) : [action.product]
    const unique = [...new Map(allProducts.map(item => [item['id'], item])).values()]
    if (action.product) {
        return ({
            ...state,
            cart: unique
        })
    }
    return state;
}

export const removeFromCart = (state, action) => {
    if (action.products) {
        return ({
            ...state,
            cart: action.products
        })
    }
    return state;
}

export const addWishList = (state, action) => {
    const allWish = state.wishlist !== undefined && state.wishlist.length !== 0 ? state.wishlist.concat(action.wishlist) : [action.wishlist]
    const unique = [...new Map(allWish.map(item => [item['id'], item])).values()]

    if (action.wishlist) {
        return ({
            ...state,
            wishlist: unique
        })
    }
    return state;
}

export const setCurrentRoute = (state, action) => {
    return ({
        ...state,
        current_route: action.route
    })
}

export const setRegisterResponse = (state, action) => {
    return ({
        ...state,
        register_success: action.response
    })
}

export const resetRegisterResponse = (state, action) => {
    return ({
        ...state,
        register_success: {
            loading: false,
            email: false,
            username: false,
            success: true,
            message: state.register_success['message']
        }
    })
}

export const resetAllRegisterResponse = (state, action) => {
    return ({
        ...state,
        register_success: {
            loading: false,
            email: state.register_success['email'],
            username: state.register_success['username'],
            success: false,
            message: state.register_success['message']
        }
    })
}

export const setAuthToken = (state, action) => {
    return ({
        ...state,
        auth: {
            id: action.credentials['id'],
            token: action.credentials['token'],
            displayName: action.credentials['displayName'],
            email: action.credentials['email'],
        }
    })
}

export const setLoginResponse = (state, action) => {
    return ({
        ...state,
        login_success: {
            loading: action.states['loading'],
            success: action.states['success'],
            username: action.states['username'],
            password: action.states['password'],
            message: action.states['message'],
        }
    })
}

export const resetLoginResponse = (state, action) => {
    return ({
        ...state,
        login_success: {
            loading: false,
            success: false,
            username:false,
            password: false,
            message: '',
        }
    })
}


export const logout = (state, action) => {
    return ({
        ...state,
        auth: {
            id:null,
            token: null,
            displayName: '',
            email: '',
        }
    })
}

export const setShippingMethods = (state, action) => {
    return ({
        ...state,
        shipping_methods: action.methods
    })
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
    [ProductTypes.ALL_COUPONS]: AllCoupons,
    [ProductTypes.ALL_ATTRIBUTES]: AllAttributes,
    [ProductTypes.ADD_TO_CART]: AddToCart,
    [ProductTypes.REMOVE_FROM_CART]: removeFromCart,
    [ProductTypes.ADD_TO_WISH_LIST]: addWishList,
    [ProductTypes.CURRENT_ROUTE]: setCurrentRoute,
    [ProductTypes.REGISTER_RESPONSE]: setRegisterResponse,
    [ProductTypes.RESET_REGISTER_RESPONSE]: resetRegisterResponse,
    [ProductTypes.RESET_ALL_REGISTER_RESPONSE]: resetAllRegisterResponse,
    [ProductTypes.SET_AUTH_TOKEN]: setAuthToken,
    [ProductTypes.LOGIN_RESPONSE]: setLoginResponse,
    [ProductTypes.RESET_LOGIN_RESPONSE]: resetLoginResponse,
    [ProductTypes.SET_SHIPPING_METHODS]: setShippingMethods,
    [ProductTypes.LOGOUT]: logout,
})