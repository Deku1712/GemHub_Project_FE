import baseURL from '../api/instance'

const baseUrl_Product = 'products'
const baseUrl_Cart = 'cart'

class Manage {

  //Product api
  getProduct() {
    return baseURL.get(baseUrl_Product)
  }


  //Cart api
  getCart() {
    return baseURL.get(baseUrl_Cart+ '/user')
  }

  addItem(id) {
    return baseURL.post(baseUrl_Cart+'/product/' + id )
  }

}

export default new Manage()