import { takeLatest, all } from 'redux-saga/effects'
import { ProductTypes } from '../stores/Products/Actions'
import {
  GetAllProducts,
  GetsSaleProducts,
  GetsOfferProducts,
  GetTopCategories,
  GetParentCategories,
  GetSubCategories,
  GetPopularCategories,
  GetProductsByCategory,
  GetReviewsByProduct
} from './ProductsSaga'

export default function* root() {
  yield all([
    takeLatest(ProductTypes.GET_ALL_PRODUCTS, GetAllProducts),
    takeLatest(ProductTypes.GET_SALE_PRODUCTS, GetsSaleProducts),
    takeLatest(ProductTypes.GET_OFFER_PRODUCTS, GetsOfferProducts),
    takeLatest(ProductTypes.GET_TOP_CATEGORIES, GetTopCategories),
    takeLatest(ProductTypes.GET_PARENT_CATEGORIES, GetParentCategories),
    takeLatest(ProductTypes.GET_SUB_CATEGORIES, GetSubCategories),
    takeLatest(ProductTypes.GET_POPULAR_CATEGORIES, GetPopularCategories),
    takeLatest(ProductTypes.GET_PRODUCTS_BY_CATEGORY, GetProductsByCategory),
    takeLatest(ProductTypes.GET_REVIEWS_BY_PRODUCT, GetReviewsByProduct),
  ])
}