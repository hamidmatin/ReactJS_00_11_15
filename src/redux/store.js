import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import helloReduxReducer from './helloSlice'

export default configureStore({
  reducer: {
    counter : counterReducer,
    helloRedux : helloReduxReducer
  }
})
