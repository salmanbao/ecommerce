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

const GetProductsByCategory = async (id, page = 1, term_id = '') => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products', {
      category: id,
      status: 'publish',
      page,
      attribute_term: term_id.toString()
    })
      .then(data => {
        resolve({ data, id ,page})
      })
      .catch(err => {
        reject(err)
      })
  })
}


const GetReviewsByProduct = async (id, page = 1) => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products/reviews', {
      product: [id],
      status: 'approved',
      page
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetReviewById = async (review_id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`products/reviews${review_id}`)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}


const GetCoupons = async (page = 1, search = '') => {
  return new Promise((resolve, reject) => {
    WCAPI.get('coupons', {
      search: search,
      page
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetCouponsById = async (id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`coupons/${id}`, {
      id
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetAllAttributes = async () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('products/attributes')
      .then(async data => {
        const attributes = data.map(a => { return { id: a['id'], name: a['name'], type: a['type'] } })
        const result = await Promise.all(attributes.map(async a => {
          const terms = await GetProductAttributeTerms(a['id'])
          return {
            ...a,
            terms: terms
          }
        }))
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetProductAttributeTerms = async (attribute_id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`products/attributes/${attribute_id}/terms`)
      .then(data => {
        const terms = data.length ? data.map(t => { return { id: t.id, name: t.name } }) : []
        resolve(terms)
      })
      .catch(err => {
        reject(err)
      })
  })
}


const GetProductVariationsById = async (id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`products/${id}/variations`, {
      id
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetProductVariationById = async (product_id, variation_id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`products/${product_id}/variations/${variation_id}`, {
      id
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetProductAttributes = async (product_id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`products/attributes/${product_id}`, {
      id
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetProductAttributeTerm = async (attribute_id, term_id) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`products/attributes/${attribute_id}/terms/${term_id}`, {
      id
    })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const GetShippingMethods = async () => {
  return new Promise((resolve, reject) => {
    WCAPI.get('shipping_methods')
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const placeOrder = async (order) => {
  return new Promise((resolve, reject) => {
    WCAPI.post('orders', order)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getOrderById = async (orderId) => {
  return new Promise((resolve, reject) => {
    WCAPI.get(`orders/${orderId}`,)
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}


export const ProductsService = {
  GetProductVariationsById,
  GetProductAttributeTerms,
  GetProductAttributeTerm,
  GetProductVariationById,
  GetProductsByCategory,
  GetProductAttributes,
  GetReviewsByProduct,
  GetShippingMethods,
  PopularCategories,
  ParentCategories,
  GetSubCategories,
  GetAllAttributes,
  GetCouponsById,
  GetAllProducts,
  SalesProducts,
  OfferProducts,
  TopCategories,
  GetReviewById,
  getOrderById,
  GetCoupons,
  placeOrder,
}