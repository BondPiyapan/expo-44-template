import { createSlice } from '@reduxjs/toolkit'

export const assetDetailPM = createSlice({
  name: 'assetdetailpm',
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
export const { setAsset, clearAsset } = assetDetailPM.actions

// thunks

export default assetDetailPM.reducer
