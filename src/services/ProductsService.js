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

const GetAllProducts = async (page) => {
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

const SalesProducts = async () => {
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

const OfferProducts = async () => {
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

const TopCategories = async () => {
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

const ParentCategories = async () => {
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

const GetSubcategory = async (id) => {
  return new Promise((resolve) => {
    WCAPI.get('products/categories', { parent: id })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        resolve([])
      })
  })
}

const GetSubCategories = async (ids) => {
  let sub_categories = {};
  let data = []
  for (const id of ids) {
    data = await GetSubcategory(id)
    sub_categories[`${id}`] = data
  }
  return sub_categories;
}

const PopularCategories = async () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products/categories', { hide_empty: true, orderby: 'count' })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetProductsByCategory = async (id, page = 1) => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products', {
      category: id,
      status: 'publish',
      page
    })
      .then(data => {
        resolve({ data, id })
      })
      .catch(err => {
        reject(err)
      })
  })
}


const GetReviewsByProduct = async (id, page = 1) => {
  return new Promise((resolve, reject) => {
    console.log('Service')
    WCAPI.get('products/reviews', {
      product: [id],
      status: 'approved',
      page
    })
      .then(data => {
        console.log(data)
        resolve({ data, id })
      })
      .catch(err => {
        reject(err)
      })
  })
}



export const ProductsService = {
  GetProductsByCategory,
  PopularCategories,
  ParentCategories,
  GetSubCategories,
  GetAllProducts,
  SalesProducts,
  OfferProducts,
  TopCategories,
  GetReviewsByProduct,
}