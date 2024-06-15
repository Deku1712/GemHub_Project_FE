import axios from 'axios'
import { getToken } from '../redux/userSlice'
import { useSelector } from 'react-redux'
import { getTokenFromLocalStorage } from './localStorage'

// Tạo một instance với các đối số truyền vào riêng biệt

const baseURL = axios.create({
  // Đường dẫn API dùng chung cho toàn bộ dự án
  baseURL: 'https://gemhubprojectbe-production-8a78.up.railway.app/',
    // baseURL: 'http://localhost:8080/',

  // Chỉ định dữ liệu truyền đi và từ máy chủ là dạng JSON.
  headers: {
    'Content-Type': 'application/json'

  }
})

baseURL.interceptors.request.use(
  config => {
    const token = getTokenFromLocalStorage()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default baseURL