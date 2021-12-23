import { createSlice } from '@reduxjs/toolkit'

export const assetHistorySlice = createSlice({
  name: 'assethistory',
  initialState: {
    jobBeforeId: '',
    showAsset: false,
    showAssetReturn: false,
  },
  reducers: {
    setJobBeforeId: (state, action) => {
      state.jobBeforeId = action.payload
    },
    setShowAsset: (state, action) => {
      state.showAsset = action.payload
    },
    setShowAssetReturn: (state, action) => {
      state.showAssetReturn = action.payload
    },
    clearAsserHistory: (state) => {
      state.jobBeforeId = ''
      state.showAsset = false
      state.showAssetReturn = false
    },
  },
})

// actions
export const {
  setJobBeforeId, setShowAsset,
  setShowAssetReturn, clearAsserHistory,
} = assetHistorySlice.actions

// thunks

export default assetHistorySlice.reducer
