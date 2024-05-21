import baseURL from '../api/instance'

const baseUrl_Product = 'products'
const baseUrl_Cart = 'cart'
const baseUrl_User = 'authen'
const baseUrl_Address = 'address'
const baseUrl_payment = 'payment'

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

    return baseURL.post(baseUrl_Cart+'/product/' + itemDto.productId, itemDto)
  }

  updateItemInCart( itemDto) {
    return baseURL.put(baseUrl_Cart + '/product', itemDto)
  }

  //user api

  login(form) {
    return baseURL.post(baseUrl_User + '/logIn', form )
  }

  //address api
  getAddress() {
    return baseURL.get(baseUrl_Address)
  }
  getAddressDefault() {
    return baseURL.get(baseUrl_Address + '/default')
  }
  addAddress(address) {
    return baseURL.post(baseUrl_Address, address)
  }
  makeDefault(id) {
    return baseURL.put(baseUrl_Address + '/updateDefault/' + id)
  }

  //payment api
  payment(info) {
    return baseURL.post(baseUrl_payment + '/submitOrder', info)
  }

}

export default new Manage()