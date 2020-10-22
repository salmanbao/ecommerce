import { put, call } from 'redux-saga/effects'
import ProductActions,{ProductTypes} from '../stores/Products/Actions';
import { ProductsService } from '../services/ProductsService';


export function* GetAllProducts() {
    console.log('Product Saga')
    const products = yield call(ProductsService.GetAllProducts)
}