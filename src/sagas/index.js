import { takeLatest, all } from 'redux-saga/effects'
import { ProductTypes } from '../stores/Products/Actions'
import { GetAllProducts } from './ProductsSaga'

export default function* root() {
  yield all([
    takeLatest(ProductTypes.GET_ALL_PRODUCTS, GetAllProducts),
  ])
}