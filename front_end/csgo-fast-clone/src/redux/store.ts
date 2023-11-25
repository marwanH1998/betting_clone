import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './slices/globalSettingsSlice'
const store = configureStore({
    reducer: {
      global: counterReducer,
    //   comments: commentsReducer,
    //   users: usersReducer,
    },
  })
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


