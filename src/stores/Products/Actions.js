import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    getAllProducts: ['page'],
    allProducts: ['products'],
    getSaleProducts: null,
    OnSaleProducts: ['on_sale'],
    getOfferProducts: null,
    offerProducts: ['offers'],
    getTopCategories: null,
    topCategories: ['top'],
    getParentCategories: null,
    ParentCategories: ['parent_categories'],
    getSubCategories: ['ids'],
    SubCategories: ['sub_categories'],
    getPopularCategories: null,
    PopularCategories: ['popular_categories'],
    categoryId: ['categoryId'],
    getProductsByCategory: ['id', 'page'],
    ProductsByCategory: ['productsByCategory'],
    getReviewsByProduct: ['id'],
    ReviewsByProduct: ['reviewsByProduct'],
    getAllCoupons: null,
    allCoupons: ['coupons'],
})

export const ProductTypes = Types;
export default Creators; 