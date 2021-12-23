import { createSlice } from '@reduxjs/toolkit'

export const assetJobPM = createSlice({
  name: 'assetjobpm',
  initialState: {
    id: '',
    name: '',
    technicianId: {},
    assetId: {},
    newAssetData: {},
    assetModelId: {},
    equipmentTypeId: {},
    status: '',
    imageBeforeWorkingAsset: [],
    googleFormLink: '',
    isSubmitGoogleFrom: false,
    imageWhileWorkingAsset: [],
    imageAfterWorkingAsset: [],
    sparePartListAsset: [],
    step: 0,
  },
  reducers: {
    setJobAsset: (state, action) => {
      const {
        id,
        name,
        technicianId,
        assetId,
        newAssetData,
        assetModelId,
        equipmentTypeId,
        status,
        imageBeforeWorkingAsset,
        googleFormLink,
        isSubmitGoogleFrom,
        imageWhileWorkingAsset,
        imageAfterWorkingAsset,
        sparePartListAsset,
        step,
      } = action.payload
      state.id = id
      state.name = name
      state.technicianId = technicianId
      state.assetId = assetId
      state.newAssetData = newAssetData
      state.assetModelId = assetModelId
      state.equipmentTypeId = equipmentTypeId
      state.status = status
      state.imageBeforeWorkingAsset = imageBeforeWorkingAsset
      state.googleFormLink = googleFormLink
      state.isSubmitGoogleFrom = isSubmitGoogleFrom
      state.imageWhileWorkingAsset = imageWhileWorkingAsset
      state.imageAfterWorkingAsset = imageAfterWorkingAsset
      state.sparePartListAsset = sparePartListAsset
      state.step = step
    },
    setImageBeforeWorkingAsset: (state, action) => {
      state.imageBeforeWorkingAsset = action.payload
    },
    setImageWhileWorkingAsset: (state, action) => {
      state.imageWhileWorkingAsset = action.payload
    },
    setImageAfterWorkingAsset: (state, action) => {
      state.imageAfterWorkingAsset = action.payload
    },
    setSparePartListAsset: (state, action) => {
      state.sparePartListAsset = action.payload
    },
    setStepWorkingAsset: (state, action) => {
      state.step = action.payload
    },
    clearAssetJob: (state) => {
      state.id = ''
      state.name = ''
      state.technicianId = {}
      state.assetId = {}
      state.newAssetData = {}
      state.assetModelId = {}
      state.equipmentTypeId = {}
      state.status = ''
      state.imageBeforeWorkingAsset = []
      state.googleFormLink = ''
      state.isSubmitGoogleFrom = false
      state.imageWhileWorkingAsset = []
      state.imageAfterWorkingAsset = []
      state.sparePartListAsset = []
      state.step = 1
    },
  },
})

// actions
export const {
  setJobAsset, setImageBeforeWorkingAsset,
  clearAssetJob, setStepWorkingAsset, setImageWhileWorkingAsset,
  setImageAfterWorkingAsset, setSparePartListAsset,
} = assetJobPM.actions

// thunks

export default assetJobPM.reducer
