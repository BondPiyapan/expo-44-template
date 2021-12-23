import { createSlice } from '@reduxjs/toolkit'

export const filterWorkTab1 = createSlice({
  name: 'filterworktab1',
  initialState: {
    dateFilter: null,
    typeJobFilter: null,
  },
  reducers: {
    setDateFilter1: (state, action) => {
      state.dateFilter = action.payload
    },
    setTypeJobFilter1: (state, action) => {
      state.typeJobFilter = action.payload
    },
  },
})

// actions
export const { setDateFilter1, setTypeJobFilter1 } = filterWorkTab1.actions

// thunks

export default filterWorkTab1.reducer
