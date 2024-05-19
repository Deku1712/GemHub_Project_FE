import baseURL from '../api/instance'

const baseUrl_Product = 'products'
const baseUrl_Cart = 'cart'
const baseUrl_Post = 'posts'

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

  //Post api
  getPost() {
    return baseURL.get(baseUrl_Post)
  }
  getPostById(id) {
    return baseURL.get(baseUrl_Post + '/' + id)
  }

}

export default new Manage()