import { Config } from '../config/api'
import WooCommerceAPI from 'react-native-woocommerce-api';
import mapCategoryToIcon from './mapCategoryToIcon';

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
    WCAPI.get('products', { featured: true, per_page: 5 })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const OfferProducts = () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products', { on_sale: true, per_page: 3 })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const TopProducts = () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products/categories', { orderby: 'id', per_page: 100, empty: true })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const ParentCategories = () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products/categories',
      {
        orderby: 'id',
        per_page: 100,
        empty: true,
        include: [196, 199, 201, 202, 204, 206, 208, 212, 224, 229, 232, 241, 247, 260, 262, 285, 309, 317]
      })
      .then(data => {
        let categories = data.map(cat => {
          return { ...mapCategoryToIcon(cat.slug), id: cat.id }
        })
        resolve(categories)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const GetSubCategories = (id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products/categories', { parent: id })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}



export const ProductsService = {
  ParentCategories,
  GetSubCategories,
  GetAllProducts,
  SalesProducts,
  OfferProducts,
  TopProducts,
}