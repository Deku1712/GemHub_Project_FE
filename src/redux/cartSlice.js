
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import manage from '../service/manage'

const initialState = {
  items: [],
  status: 'idle',
  error: null
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await manage.getCart()
  return response.data
})

export const addItemToCart = createAsyncThunk('cart/addItem' , async(id) => {
  const response = await manage.addItem(id)
  return response.data
})


const cartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.items
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'falied'
        state.error = action.error.message
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload.items
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.status = 'falied'
        state.error = action.error.message
      })
  }
})

export const getStateItems = ( state) => state.cart.items
export const getStateStatus = (state) => state.cart.status
export const getStateError = ( state) => state.cart.error

export default cartSlice.reducer