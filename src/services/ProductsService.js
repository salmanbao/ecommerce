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

export const GetAllProducts = () => {
  return new Promise((resolve, reject) => {
    console.log('Product Service')
    WCAPI.get('products',{per_page:20})
    .then(data => {
      console.log(data.length);
      resolve(data)
    })
      .catch(err => {
        console.error(err);
        reject(err)
      })
  })
}



export const ProductsService = {
  GetAllProducts,
}