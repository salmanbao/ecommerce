import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'
import { ProductReducer } from './Products/Reducers'

export default () => {
  const rootReducer = combineReducers({
    products: ProductReducer,
  })

  return configureStore(rootReducer, rootSaga)
}