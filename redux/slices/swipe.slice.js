import { createSlice } from '@reduxjs/toolkit'

export const swipeSlice = createSlice({
  name: 'swipe',
  initialState: {
    disableSwipe: true,
  },
  reducers: {
    setSwipe: (state, action) => {
      state.disableSwipe = action.payload
    },
  },
})

// actions
export const { setSwipe } = swipeSlice.actions

// thunks

export default swipeSlice.reducer
