export const INITIAL_STATE = {
    products: [],
    productsByCategory: {},
    on_sale: [],
    offers: [],
    top: [],
    parent_categories: [],
    sub_categories: {},
    popular_categories: [],
    categoryId: 0,
    reviews: [],
    coupons: [],
    attributes: [],
    cart: [],
    wishlist: [],
    current_route: '',
    shipping_methods: [],
    register_success: { loading: false, email: false, username: false, success: false, message: '' },
    login_success: { loading: false, username: false, password: false, success: false, message: '' },
    auth: { id: null, token: null, displayName: '', email: '' }
} 