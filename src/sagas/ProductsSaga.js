import { put, call } from 'redux-saga/effects'
import { ProductsService } from '../services/ProductsService';
import ProductActions from '../stores/Products/Actions'

export function* GetAllProducts({ page }) {
    console.log('GetAllProducts-Saga', page)
    const products = yield call(ProductsService.GetAllProducts, page)
    yield put(ProductActions.allProducts(products))
    const on_sale = yield call(ProductsService.SalesProducts)
    yield put(ProductActions.OnSaleProducts(on_sale))
    const offers = yield call(ProductsService.OfferProducts)
    yield put(ProductActions.offerProducts(offers))
    const top = yield call(ProductsService.TopProducts)
    yield put(ProductActions.topProducts(top))
}

export function* GetTopProducts() {
    const top = yield call(ProductsService.TopProducts)
    yield put(ProductActions.topProducts(top))
}

export function* GetParentCategories() {
    const categories = yield call(ProductsService.ParentCategories)
    yield put(ProductActions.ParentCategories(categories))
}

export function* GetSubCategories({ id }) {
    const categories = yield call(ProductsService.GetSubCategories, id)
    yield put(ProductActions.SubCategories({ id, categories }))
}

