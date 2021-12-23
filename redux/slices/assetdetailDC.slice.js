import { createSlice } from '@reduxjs/toolkit'

export const assetDetailDC = createSlice({
  name: 'assetdetaildc',
  initialState: {
    asset: {},
  },
  reducers: {
    setAsset: (state, action) => {
      state.asset = action.payload
    },
    clearAsset: (state) => {
      state.asset = {}
    },
  },
})

// actions
export const { setAsset, clearAsset } = assetDetailDC.actions

// thunks

export default assetDetailDC.reducer
