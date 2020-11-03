import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    getAllProducts: ['page'],
    allProducts: ['products'],
    OnSaleProducts: ['on_sale'],
    offerProducts: ['offers'],
    getTopProducts: null,
    topProducts: ['top'],
    getParentCategories: null,
    ParentCategories: ['parent_categories'],
    getSubCategories: ['id'],
    SubCategories: ['sub_categories']
})

export const ProductTypes = Types;
export default Creators;