import React, { createContext, useState } from 'react'

export const SearchContext = createContext()

// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  return (
    <SearchContext.Provider value={{ products, setProducts }}>
      {children}
    </SearchContext.Provider>
  )
}