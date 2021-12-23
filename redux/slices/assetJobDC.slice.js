import { createSlice } from '@reduxjs/toolkit'

export const assetJobDC = createSlice({
  name: 'assetjobdc',
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
    problemList: [],
    causeList: [],
    note: '',
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
        problemList,
        causeList,
        note,
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
      state.problemList = problemList
      state.causeList = causeList
      state.note = note
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
    setProblemList: (state, action) => {
      state.problemList = action.payload
    },
    setCauseList: (state, action) => {
      state.causeList = action.payload
    },
    setNote: (state, action) => {
      state.note = action.payload
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
      state.problemList = []
      state.causeList = []
      state.note = []
      state.imageAfterWorkingAsset = []
      state.sparePartListAsset = []
      state.step = 0
    },
  },
})

// actions
export const {
  setJobAsset, setImageBeforeWorkingAsset,
  clearAssetJob, setStepWorkingAsset, setImageWhileWorkingAsset,
  setImageAfterWorkingAsset, setSparePartListAsset,
  setProblemList, setCauseList, setNote,
} = assetJobDC.actions

// thunks

export default assetJobDC.reducer
