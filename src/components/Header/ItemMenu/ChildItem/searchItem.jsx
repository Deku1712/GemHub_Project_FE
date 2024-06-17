import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import baseURL from '../../../../api/instance'

const SearchComponent = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearch = async () => {
    try {
      const response = await baseURL.get(`products/search/${keyword}`)
      console.log(response.data);
      navigate('/shop', { state: { products: response.data } }) // Redirect đến /shop và truyền dữ liệu kết quả tìm kiếm
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="w-3/5 flex justify-end align-baseline">
      <input
        type="text"
        placeholder="Search..."
        className="w-2/3 h-6 mt-[12px] p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} className=' p-3 cursor-pointer  ml-2' />
      </button>
    </div>
  )
}

export default SearchComponent