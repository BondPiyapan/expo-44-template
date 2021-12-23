import { createSlice } from '@reduxjs/toolkit'

export const assetJobPM = createSlice({
  name: 'customerservice',
  initialState: {
    inited: false,
    id: '',
    transactionNumber: '',
    createBy: {},
    companyId: {},
    brandId: {},
    branchId: {},
    customerId: {},
    createAt: {},
    status: '',
    chat: [],
    issueType: '',
    jobId: {},
    issueList: [],
    remark: '',
    history: [],
  },
  reducers: {
    setInited: (state, action) => {
      state.inited = action.payload
    },
    setChat: (state, action) => {
      const {
        chat,
      } = action.payload
      state.chat = chat
    },
    setCustomerService: (state, action) => {
      const {
        id,
        transactionNumber,
        createBy,
        companyId,
        brandId,
        branchId,
        customerId,
        createAt,
        status,
        chat,
        issueType,
        jobId,
        issueList,
        remark,
        history,
      } = action.payload
      state.id = id
      state.transactionNumber = transactionNumber
      state.createBy = createBy
      state.companyId = companyId
      state.brandId = brandId
      state.branchId = branchId
      state.customerId = customerId
      state.createAt = createAt
      state.chat = chat
      state.issueType = issueType
      state.jobId = jobId
      state.issueList = issueList
      state.remark = remark
      state.status = status
      state.history = history
    },
    clearCustomerService: (state) => {
      state.inited = false
      state.id = ''
      state.transactionNumber = ''
      state.createBy = {}
      state.companyId = {}
      state.brandId = {}
      state.branchId = {}
      state.customerId = {}
      state.createAt = {}
      state.status = ''
      state.chat = []
      state.issueType = ''
      state.jobId = {}
      state.issueList = []
      state.remark = ''
      state.history = []
    },
  },
})

// actions
export const {
  setCustomerService, clearCustomerService,
  setInited, setChat,
} = assetJobPM.actions

// thunks

export default assetJobPM.reducer
