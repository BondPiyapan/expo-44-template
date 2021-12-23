import { createSlice } from '@reduxjs/toolkit'

export const sparepartSlice = createSlice({
  name: 'sparepart',
  initialState: {
    inited: false,
    id: 'a',
    transactionNumber: '',
    type: '',
    status: '',
    itemCode: '',
    itemName: '',
    requestName: '',
    requestDate: {},
    tarnsferName: '',
    transferDate: {},
    technicianUse: '',
    approveUser: '',
    manageName: '',
    approveBy: '',
    jobName: '',
    jobRef: {},
    amount: 0,
    unit: '',
    dateCreate: '',
    imageBeforeTransfer: [],
    imageAfterTransfer: [],
    imageReturnSparePart: [],
    photoTransfer: [],
    photoRequest: [],
    photoReturn: [],
    note: '',
    approvedNote: '',
    receivedNote: '',
    transferredNote: '',
    declineReason: '',
  },
  reducers: {
    setInited: (state, action) => {
      state.inited = action.payload
    },
    setSparepart: (state, action) => {
      const {
        id,
        transactionNumber,
        type,
        status,
        itemCode,
        itemName,
        requestName,
        requestDate,
        tarnsferName,
        transferDate,
        technicianUse,
        approveUser,
        manageName,
        approveBy,
        jobName,
        jobRef,
        amount,
        unit,
        dateCreate,
        imageBeforeTransfer,
        imageAfterTransfer,
        imageReturnSparePart,
        photoTransfer,
        photoRequest,
        photoReturn,
        note,
        approvedNote,
        receivedNote,
        transferredNote,
        declineReason,
      } = action.payload
      state.id = id
      state.transactionNumber = transactionNumber
      state.type = type
      state.status = status
      state.itemCode = itemCode
      state.itemName = itemName
      state.requestName = requestName
      state.requestDate = requestDate
      state.tarnsferName = tarnsferName
      state.transferDate = transferDate
      state.approveUser = approveUser
      state.technicianUse = technicianUse
      state.manageName = manageName
      state.approveBy = approveBy
      state.jobName = jobName
      state.jobRef = jobRef
      state.amount = amount
      state.unit = unit
      state.dateCreate = dateCreate
      state.imageBeforeTransfer = imageBeforeTransfer
      state.imageAfterTransfer = imageAfterTransfer
      state.imageReturnSparePart = imageReturnSparePart
      state.photoTransfer = photoTransfer
      state.photoRequest = photoRequest
      state.photoReturn = photoReturn
      state.note = note
      state.approvedNote = approvedNote
      state.receivedNote = receivedNote
      state.transferredNote = transferredNote
      state.declineReason = declineReason
    },
    clearSparepart: (state) => {
      state.inited = false
      state.transactionNumber = ''
      state.id = ''
      state.type = ''
      state.status = ''
      state.itemCode = ''
      state.itemName = ''
      state.requestName = ''
      state.requestDate = {}
      state.transferDate = {}
      state.tarnsferName = ''
      state.technicianUse = ''
      state.approveUser = ''
      state.manageName = ''
      state.approveBy = ''
      state.jobName = ''
      state.jobRef = {}
      state.amount = 0
      state.unit = ''
      state.dateCreate = ''
      state.imageBeforeTransfer = []
      state.imageAfterTransfer = []
      state.imageReturnSparePart = []
      state.photoTransfer = []
      state.photoRequest = []
      state.photoReturn = []
      state.note = ''
      state.approvedNote = ''
      state.receivedNote = ''
      state.transferredNote = ''
      state.declineReason = ''
    },
  },
})

// actions
export const { setSparepart, clearSparepart, setInited } = sparepartSlice.actions

// thunks

export default sparepartSlice.reducer
