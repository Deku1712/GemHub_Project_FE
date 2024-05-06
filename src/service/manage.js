import baseURL from '../api/instance'

const baseUrl_Product = 'products'
const baseUrl_Cart = 'cart'

class Manage {

  //Product api
  getProduct() {
    return baseURL.get(baseUrl_Product)
  }
  getProductById(id) {
    return baseURL.get(baseUrl_Product + '/' + id)
  }


  //Cart api
  getCart() {
    return baseURL.get(baseUrl_Cart+ '/user')
  }

  addItem( itemDto) {
   
    return baseURL.post(baseUrl_Cart+'/product/' + itemDto.productId , itemDto)
  }

}

export default new Manage()