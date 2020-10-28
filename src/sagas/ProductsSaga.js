import { put, call } from 'redux-saga/effects'
import { ProductsService } from '../services/ProductsService';
import ProductActions from '../stores/Products/Actions'

export function* GetAllProducts({page}) {
    const products = yield call(ProductsService.GetAllProducts,page)
    yield put(ProductActions.getAllProductsSuccess(products))
}


export function* SalesProducts() {
    const products = yield call(ProductsService.SalesProducts,null)
    yield put(ProductActions.OnSaleProducts(products))
}
