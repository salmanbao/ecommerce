import { Config } from '../config/api'
import WooCommerceAPI from 'react-native-woocommerce-api';

var WCAPI = new WooCommerceAPI({
  url: Config.URL, // Your store URL
  ssl: true,
  consumerKey: Config.CONSUMER_KEY, // Your consumer secret
  consumerSecret: Config.CONSUMER_SECRETE, // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: Config.VERSION, // WooCommerce WP REST API version
  queryStringAuth: true
});

export const GetAllProducts = (page) => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products', { page })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const SalesProducts = () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products', { on_sale: true, per_page: 5 })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}



export const ProductsService = {
  GetAllProducts,
  SalesProducts  
}