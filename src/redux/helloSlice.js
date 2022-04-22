import { createSlice } from '@reduxjs/toolkit'

export const helloReduxSlice = createSlice({
  name: 'HelloRedux',
  initialState : 'Welcome to Redux',
  reducers: {

  }
})

export default helloReduxSlice.reducer