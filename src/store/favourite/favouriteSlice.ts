import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import type { People } from '../../types/people'

const initialState: People[] = []

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite(state, action: PayloadAction<People>) {
      state.push(action.payload)
    },
    removeFromFavourite(state, action: PayloadAction<{ name: string }>) {
      const newFavourite = [...state].filter(
        (favourite) => favourite.name !== action.payload.name
      )
      return newFavourite
    },
  },
})

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions
export const selectFavourite = (state: RootState) => state.favourite

export default favouriteSlice.reducer
