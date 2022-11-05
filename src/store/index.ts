import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import favouriteReducer from './favourite/favouriteSlice'

const store = configureStore({
  reducer: {
    favourite: favouriteReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
