import baseURL from '../api/instance'

const baseUrl_Product = 'products'
const baseUrl_Cart = 'cart'
const baseUrl_User = 'authen'
const baseUrl_Address = 'address'
const baseUrl_Post = 'posts'
const baseUrl_payment = 'payment'
const baseURL_Order = 'order'
const baseURL_Session = 'session'


class Manage {

  //Product api
  getProduct() {
    return baseURL.get(baseUrl_Product)
  }
  getProductById(id) {
    return baseURL.get(baseUrl_Product + '/' + id)
  }

  getProductLimited() {
    return baseURL.get(baseUrl_Product + '/getProductLimited')
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

  deleteItem(id) {
    return baseURL.delete(baseUrl_Cart+ '/items/'+ id)
  }

  //user api

  login(form) {
    return baseURL.post(baseUrl_User + '/logIn', form )
  }

  signup(form) {
    return baseURL.post(baseUrl_User + '/signUp', form)
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


  // check quantity

  checkQuantity() {
    return baseURL.get(baseUrl_Cart + '/checkQuantity')
  }

  //getPreOrder
  getPreOrder() {
    return baseURL.get(baseUrl_Cart + '/getOrder')
  }

  // create Order
  createOrder (PaymentMethod) {
    return baseURL.post(baseURL_Order, PaymentMethod )
  }

  //Post api
  getPost() {
    return baseURL.get(baseUrl_Post)
  }
  getPostById(id) {
    return baseURL.get(baseUrl_Post + '/' + id)
  }

  //order api

  getAllOrder() {
    return baseURL.get(baseURL_Order)
  }

  updateOrder(resultDTO) {
    return baseURL.put(baseURL_Order, resultDTO)
  }
  updateStatus(orderId, status) {
    return baseURL.put(baseURL_Order + '/' + orderId, status)
  }

  getMonthlyIncome() {
    return baseURL.get(baseURL_Order + '/monthlyIncome')
  }

  getTodayIncome() {
    return baseURL.get(baseURL_Order + '/getTodayIncome')
  }

  // session api

}

export default new Manage()