import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    getAllProducts: null,
})

export const ProductTypes = Types;
export default Creators;