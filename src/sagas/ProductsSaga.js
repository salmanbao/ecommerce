import { put, call } from 'redux-saga/effects'
import { ProductsService } from '../services/ProductsService';
import ProductActions from '../stores/Products/Actions'

export function* GetAllProducts({ page }) {
    const products = yield call(ProductsService.GetAllProducts, page)
    yield put(ProductActions.allProducts(products))
}

export function* GetsOfferProducts() {
    const offers = yield call(ProductsService.OfferProducts)
    yield put(ProductActions.offerProducts(offers))
}

export function* GetsSaleProducts() {
    const on_sale = yield call(ProductsService.SalesProducts)
    yield put(ProductActions.OnSaleProducts(on_sale))
}

export function* GetTopCategories() {
    const top = yield call(ProductsService.TopCategories)
    yield put(ProductActions.topCategories(top))
}

export function* GetParentCategories() {
    const categories = yield call(ProductsService.ParentCategories)
    yield put(ProductActions.ParentCategories(categories))
}

export function* GetSubCategories({ ids }) {
    const sub_categories = yield call(ProductsService.GetSubCategories, ids)
    yield put(ProductActions.SubCategories(sub_categories))
}

export function* GetPopularCategories() {
    const categories = yield call(ProductsService.PopularCategories)
    yield put(ProductActions.PopularCategories(categories))
}

export function* GetProductsByCategory({ id, page }) {
    const products = yield call(ProductsService.GetProductsByCategory, id, page)
    yield put(ProductActions.ProductsByCategory(products))
}

export function* GetReviewsByProduct({ id, page }) {
    const reviews = yield call(ProductsService.GetReviewsByProduct, id, page)
    yield put(ProductActions.ReviewsByProduct(reviews))
}

export function* getAllCoupons() {
    const coupons = yield call(ProductsService.GetCoupons)
    yield put(ProductActions.allCoupons(coupons))
}

export function* getAllAttributes() {
    const attributes = yield call(ProductsService.GetAllAttributes)
    yield put(ProductActions.allAttributes(attributes))
}

export function* filterByAttribute({ term_id, category_id }) {
    const products = yield call(ProductsService.GetProductsByCategory, category_id, 1, term_id)
    yield put(ProductActions.ProductsByCategory(products))
}