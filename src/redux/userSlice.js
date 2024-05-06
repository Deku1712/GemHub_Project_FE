import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  status: 'idle',
  error: null
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: {
      reducer(state, action) {
        state.token = action.payload
      },
      prepare(token) {
        return {
          payload: token
        }
      }
    }

  }
})

export const {userLogin} = userSlice.actions
export const getToken = (state) => state.user.token


export default userSlice.reducer