import axios from 'axios'
// Tạo một instance với các đối số truyền vào riêng biệt
const baseURL = axios.create({
  // Đường dẫn API dùng chung cho toàn bộ dự án
  baseURL: 'http://localhost:8080/',

  // Chỉ định dữ liệu truyền đi và từ máy chủ là dạng JSON.
  headers: {
    'Content-Type': 'application/json'

  }
})

export default baseURL