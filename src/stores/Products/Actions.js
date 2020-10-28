import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    getAllProducts: ['page'],
    getAllProductsSuccess:['products'],
    getOnSaleProducts:null,
    OnSaleProducts:['on_sale'],
})

export const ProductTypes = Types;
export default Creators;