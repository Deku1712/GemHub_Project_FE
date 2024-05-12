import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import manage from '../service/manage'

const initialState = {
  token: '',
  status: 'notAuthenticated',
  error: null
}

export const loginUser = createAsyncThunk('user/login',  async (form) => {
  const response = await manage.login(form)
  return response.data;
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: {
      reducer(state, action) {
        state.token = action.payload,
        state.status = 'authenticated'
      },
      prepare(token) {
        return {
          payload: token
        }
      }
    }

  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending , (state, action) => {
      state.status = 'loading'
    })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeed',
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'faild'
      })

  }
})

export const {userLogin} = userSlice.actions
export const getToken = (state) => state.user.token
export const getStatus = (state) => state.user.status



export default userSlice.reducer