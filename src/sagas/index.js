import { takeLatest, all } from 'redux-saga/effects'
import { ProductTypes } from '../stores/Products/Actions'
import { GetAllProducts, GetTopProducts, GetParentCategories,GetSubCategories } from './ProductsSaga'

export default function* root() {
  yield all([
    takeLatest(ProductTypes.GET_ALL_PRODUCTS, GetAllProducts),
    takeLatest(ProductTypes.GET_TOP_PRODUCTS, GetTopProducts),
    takeLatest(ProductTypes.GET_PARENT_CATEGORIES, GetParentCategories),
    takeLatest(ProductTypes.GET_SUB_CATEGORIES, GetSubCategories),
  ])
}