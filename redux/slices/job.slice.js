import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
  name: 'job',
  initialState: {
    inited: false,
    id: '',
    itemCode: '',
    typeJob: '',
    locationTypeLG: '',
    jobTypeLG: '',
    appointment: '',
    slaIn: '',
    slaOut: '',
    slaInHr: '',
    slaOutHr: '',
    actionJob: '',
    customerType: '',
    additionalServiceList: [],
    branchData: {},
    brandData: {},
    b2cId: {},
    b2cServiceData: {},
    contactPerson: {},
    contactPersonReturn: {},
    locationContact: {},
    locationContactReturn: {},
    newLocation: {},
    newLocationReturn: {},
    isDifferentLocation: false,
    differentLocation: '',
    isDifferentLocationReturn: false,
    differentLocationReturn: '',
    issueList: [],
    issueImageList: [],
    issueRemark: '',
    assetId: {},
    assetReturnId: {},
    equipmentTypeId: {},
    equipmentTypeReturnId: {},
    assetReserveTrip: '',
    assetList: [],
    newAssetData: {},
    newAssetDataReturn: {},
    distance: {},
    distanceReturn: {},
    imageBeforeSendLG: [],
    imageBeforeSendLGLength: 0,
    imageBeforeWorkingRemark: '',
    imageBeforeWorkingRemarkCheckEdit: '',
    imageAfterSendLG: [],
    imageAfterSendLGLength: 0,
    imageAfterWorkingRemark: '',
    imageAfterWorkingRemarkCheckEdit: '',
    imageBeforeBackLG: [],
    imageBeforeBackLGLength: 0,
    imageBeforeWorkingReturnRemark: '',
    imageBeforeWorkingReturnRemarkCheckEdit: '',
    imageAfterBackLG: [],
    imageAfterBackLGLength: 0,
    imageAfterWorkingReturnRemark: '',
    imageAfterWorkingReturnRemarkCheckEdit: '',
    imageBeforeWorking: [],
    imageBeforeWorkingLength: 0,
    imageWhileWorking: [],
    imageWhileWorkingLength: 0,
    imageAfterWorking: [],
    imageAfterWorkingLength: 0,
    problemList: [],
    causeList: [],
    sparePartList: [],
    note: '',
    customerSignatureVerify: '',
    customerNameVerify: '',
    checkNameOrSignatureVerify: '',
    customerSignature: '',
    customerName: '',
    checkNameOrSignature: '',
    history: [],
    checkOnTheWay: false,
    openEditMap: false,
    openJobComplete: false,
    checkLoadSnapshot: true,
    pauseReasonList: [],
    reassignedReasonList: [],
    cancelReasonList: [],
    isPause: false,
    isJobCA: false,
    paymentProofImageList: [],
    paymentProofImageListLength: 0,
    isUploadSlip: false,
    isEditable: false,
    isCa: false,
  },
  reducers: {
    setInited: (state, action) => {
      state.inited = action.payload
    },
    setJob: (state, action) => {
      const {
        id,
        itemCode,
        typeJob,
        locationTypeLG,
        jobTypeLG,
        appointment,
        slaIn,
        slaOut,
        slaInHr,
        slaOutHr,
        actionJob,
        customerType,
        history,
        additionalServiceList,
        contactPerson,
        contactPersonReturn,
        locationContact,
        locationContactReturn,
        newLocation,
        newLocationReturn,
        isDifferentLocation,
        differentLocation,
        isDifferentLocationReturn,
        differentLocationReturn,
        branchData,
        brandData,
        b2cId,
        b2cServiceData,
        issueList,
        issueImageList,
        issueRemark,
        assetId,
        assetReturnId,
        equipmentTypeId,
        equipmentTypeReturnId,
        assetReserveTrip,
        assetList,
        newAssetData,
        newAssetDataReturn,
        distance,
        distanceReturn,
        imageBeforeSendLG,
        imageBeforeSendLGLength,
        imageBeforeWorkingRemark,
        imageBeforeWorkingRemarkCheckEdit,
        imageAfterSendLG,
        imageAfterSendLGLength,
        imageAfterWorkingRemark,
        imageAfterWorkingRemarkCheckEdit,
        imageBeforeBackLG,
        imageBeforeBackLGLength,
        imageBeforeWorkingReturnRemark,
        imageBeforeWorkingReturnRemarkCheckEdit,
        imageAfterBackLG,
        imageAfterBackLGLength,
        imageAfterWorkingReturnRemark,
        imageAfterWorkingReturnRemarkCheckEdit,
        imageBeforeWorking,
        imageBeforeWorkingLength,
        imageWhileWorking,
        imageWhileWorkingLength,
        imageAfterWorking,
        imageAfterWorkingLength,
        problemList,
        causeList,
        sparePartList,
        note,
        customerSignature,
        customerName,
        customerSignatureVerify,
        customerNameVerify,
        isPause,
        pauseReasonList,
        reassignedReasonList,
        cancelReasonList,
        paymentProofImageList,
        paymentProofImageListLength,
        isUploadSlip,
        isCa,
      } = action.payload
      state.id = id
      state.itemCode = itemCode
      state.typeJob = typeJob
      state.locationTypeLG = locationTypeLG
      state.jobTypeLG = jobTypeLG
      state.appointment = appointment
      state.slaIn = slaIn
      state.slaOut = slaOut
      state.slaInHr = slaInHr
      state.slaOutHr = slaOutHr
      state.actionJob = actionJob
      state.customerType = customerType
      state.history = history
      state.additionalServiceList = additionalServiceList
      state.branchData = branchData
      state.brandData = brandData
      state.b2cId = b2cId
      state.b2cServiceData = b2cServiceData
      state.contactPerson = contactPerson
      state.contactPersonReturn = contactPersonReturn
      state.locationContact = locationContact
      state.locationContactReturn = locationContactReturn
      state.newLocation = newLocation
      state.newLocationReturn = newLocationReturn
      state.isDifferentLocation = isDifferentLocation
      state.differentLocation = differentLocation
      state.isDifferentLocationReturn = isDifferentLocationReturn
      state.differentLocationReturn = differentLocationReturn
      state.issueList = issueList
      state.issueImageList = issueImageList
      state.issueRemark = issueRemark
      state.assetId = assetId
      state.assetReturnId = assetReturnId
      state.equipmentTypeId = equipmentTypeId
      state.equipmentTypeReturnId = equipmentTypeReturnId
      state.assetReserveTrip = assetReserveTrip
      state.assetList = assetList
      state.newAssetData = newAssetData
      state.newAssetDataReturn = newAssetDataReturn
      state.distance = distance
      state.distanceReturn = distanceReturn
      state.imageBeforeSendLG = imageBeforeSendLG
      state.imageBeforeSendLGLength = imageBeforeSendLGLength
      state.imageBeforeWorkingRemark = imageBeforeWorkingRemark
      state.imageBeforeWorkingRemarkCheckEdit = imageBeforeWorkingRemarkCheckEdit
      state.imageAfterSendLG = imageAfterSendLG
      state.imageAfterSendLGLength = imageAfterSendLGLength
      state.imageAfterWorkingRemark = imageAfterWorkingRemark
      state.imageAfterWorkingRemarkCheckEdit = imageAfterWorkingRemarkCheckEdit
      state.imageBeforeBackLG = imageBeforeBackLG
      state.imageBeforeBackLGLength = imageBeforeBackLGLength
      state.imageBeforeWorkingReturnRemark = imageBeforeWorkingReturnRemark
      state.imageBeforeWorkingReturnRemarkCheckEdit = imageBeforeWorkingReturnRemarkCheckEdit
      state.imageAfterBackLG = imageAfterBackLG
      state.imageAfterBackLGLength = imageAfterBackLGLength
      state.imageAfterWorkingReturnRemark = imageAfterWorkingReturnRemark
      state.imageAfterWorkingReturnRemarkCheckEdit = imageAfterWorkingReturnRemarkCheckEdit
      state.imageBeforeWorking = imageBeforeWorking
      state.imageBeforeWorkingLength = imageBeforeWorkingLength
      state.imageWhileWorking = imageWhileWorking
      state.imageWhileWorkingLength = imageWhileWorkingLength
      state.imageAfterWorking = imageAfterWorking
      state.imageAfterWorkingLength = imageAfterWorkingLength
      state.problemList = problemList
      state.causeList = causeList
      state.sparePartList = sparePartList
      state.note = note
      state.customerSignature = customerSignature
      state.customerName = customerName
      state.customerSignatureVerify = customerSignatureVerify
      state.customerNameVerify = customerNameVerify
      state.pauseReasonList = pauseReasonList
      state.reassignedReasonList = reassignedReasonList
      state.cancelReasonList = cancelReasonList
      state.paymentProofImageList = paymentProofImageList
      state.paymentProofImageListLength = paymentProofImageListLength
      state.isUploadSlip = isUploadSlip
      state.isPause = isPause
      state.isCa = isCa
    },
    setActionJob: (state, action) => {
      state.actionJob = action.payload.actionJob
    },
    setlocationTypeLG: (state, action) => {
      state.locationTypeLG = action.payload
    },
    setImageBeforeSendLG: (state, action) => {
      state.imageBeforeSendLG = action.payload
    },
    setImageBeforeWorkingRemark: (state, action) => {
      state.imageBeforeWorkingRemark = action.payload
    },
    setImageAfterSendLG: (state, action) => {
      state.imageAfterSendLG = action.payload
    },
    setImageAfterWorkingRemark: (state, action) => {
      state.imageAfterWorkingRemark = action.payload
    },
    setImageBeforeBackLG: (state, action) => {
      state.imageBeforeBackLG = action.payload
    },
    setImageBeforeWorkingReturnRemark: (state, action) => {
      state.imageBeforeWorkingReturnRemark = action.payload
    },
    setImageAfterBackLG: (state, action) => {
      state.imageAfterBackLG = action.payload
    },
    setImageAfterWorkingReturnRemark: (state, action) => {
      state.imageAfterWorkingReturnRemark = action.payload
    },
    setImageBeforeWorking: (state, action) => {
      state.imageBeforeWorking = action.payload
    },
    setImageWhileWorking: (state, action) => {
      state.imageWhileWorking = action.payload
    },
    setImageAfterWorking: (state, action) => {
      state.imageAfterWorking = action.payload
    },
    setAssetList: (state, action) => {
      state.assetList = action.payload
    },
    // setAssetImageBefore: (state, action) => {
    //   state.assetImageBefore = action.payload
    // },
    // setSpareImageBefore: (state, action) => {
    //   state.sparePartImageBefore = action.payload
    // },
    setProblemList: (state, action) => {
      // console.log(action)
      state.problemList = action.payload
    },
    setCauseList: (state, action) => {
      // console.log(action)
      state.causeList = action.payload
    },
    setNote: (state, action) => {
      // console.log(action)
      state.note = action.payload
    },
    setSparePartList: (state, action) => {
      // console.log(action)
      state.sparePartList = action.payload
    },
    // setAssetImageAfter: (state, action) => {
    //   state.assetImageAfter = action.payload
    // },
    // setSparePartImageAfter: (state, action) => {
    //   state.sparePartImageAfter = action.payload
    // },
    // setCustomerImageList: (state, action) => {
    //   state.customerImageList = action.payload
    // },
    setCheckNameOrSignatureVerify: (state, action) => {
      state.checkNameOrSignatureVerify = action.payload
    },
    setCustomerSignatureVerify: (state, action) => {
      state.customerSignatureVerify = action.payload
    },
    setCustomerNameVerify: (state, action) => {
      state.customerNameVerify = action.payload
    },
    setCheckNameOrSignature: (state, action) => {
      state.checkNameOrSignature = action.payload
    },
    setCustomerSignature: (state, action) => {
      state.customerSignature = action.payload
    },
    setCustomerName: (state, action) => {
      state.customerName = action.payload
    },
    setCheckOnTheWay: (state, action) => {
      state.checkOnTheWay = action.payload
    },
    setCheckLoadSnapshot: (state, action) => {
      state.checkLoadSnapshot = action.payload
    },
    setOpenEditMap: (state, action) => {
      state.openEditMap = action.payload
    },
    setOpenJobComplete: (state, action) => {
      state.openJobComplete = action.payload
    },
    setIsJobCA: (state, action) => {
      state.isJobCA = action.payload
    },
    setIsEditable: (state, action) => {
      state.isEditable = action.payload
    },
    setPaymentProofImageList: (state, action) => {
      state.paymentProofImageList = action.payload
    },
    clearJob: (state) => {
      state.inited = false
      state.id = ''
      state.itemCode = ''
      state.typeJob = ''
      state.locationTypeLG = ''
      state.jobTypeLG = ''
      state.appointment = ''
      state.slaIn = ''
      state.slaOut = ''
      state.actionJob = ''
      state.customerType = ''
      state.additionalServiceList = []
      state.contactPerson = {}
      state.contactPersonReturn = {}
      state.locationContact = {}
      state.locationContactReturn = {}
      state.newLocation = {}
      state.newLocationReturn = {}
      state.isDifferentLocation = false
      state.differentLocation = ''
      state.isDifferentLocationReturn = false
      state.differentLocationReturn = ''
      state.branchData = {}
      state.brandData = {}
      state.b2cId = {}
      state.b2cServiceData = {}
      state.issueList = []
      state.issueImageList = []
      state.issueRemark = ''
      state.assetId = {}
      state.assetReturnId = {}
      state.equipmentTypeId = {}
      state.equipmentTypeReturnId = {}
      state.assetReserveTrip = ''
      state.assetList = []
      state.newAssetData = {}
      state.newAssetDataReturn = {}
      state.distance = {}
      state.distanceReturn = {}
      state.imageBeforeSendLG = []
      state.imageBeforeSendLGLength = 0
      state.imageBeforeWorkingRemark = ''
      state.imageBeforeWorkingRemarkCheckEdit = ''
      state.imageAfterSendLG = []
      state.imageAfterSendLGLength = 0
      state.imageAfterWorkingRemark = ''
      state.imageAfterWorkingRemarkCheckEdit = ''
      state.imageBeforeBackLG = []
      state.imageBeforeBackLGLength = 0
      state.imageBeforeWorkingReturnRemark = ''
      state.imageBeforeWorkingReturnRemarkCheckEdit = ''
      state.imageAfterBackLG = []
      state.imageAfterBackLGLength = 0
      state.imageAfterWorkingReturnRemark = ''
      state.imageAfterWorkingReturnRemarkCheckEdit = ''
      state.imageBeforeWorking = []
      state.imageBeforeWorkingLength = 0
      state.imageWhileWorking = []
      state.imageWhileWorkingLength = 0
      state.imageAfterWorking = []
      state.imageAfterWorkingLength = 0
      state.problemList = []
      state.causeList = []
      state.sparePartList = []
      state.history = []
      state.note = ''
      state.checkNameOrSignatureVerify = ''
      state.customerSignatureVerify = ''
      state.customerNameVerify = ''
      state.checkNameOrSignature = ''
      state.customerSignature = ''
      state.customerName = ''
      state.checkOnTheWay = false
      state.openEditMap = false
      state.openJobComplete = false
      state.checkLoadSnapshot = true
      state.isJobCA = false
      state.paymentProofImageList = []
      state.paymentProofImageListLength = 0
      state.isPause = false
      state.isUploadSlip = false
      state.isEditable = false
      state.isCa = false
    },
  },
})

// actions
export const {
  setInited, setJob, clearJob, setActionJob, setImageBeforeWorking, setImageWhileWorking,
  setImageAfterWorking, setProblemList, setCauseList, setSparePartList, setCustomerName,
  setCustomerSignature, setCheckOnTheWay, setOpenEditMap, setOpenJobComplete, setCheckLoadSnapshot,
  setIsJobCA, setCheckNameOrSignature, setNote, setPaymentProofImageList, setIsEditable,
  setImageBeforeSendLG, setImageAfterSendLG, setImageBeforeBackLG, setCheckNameOrSignatureVerify,
  setCustomerSignatureVerify, setCustomerNameVerify, setImageAfterBackLG, setlocationTypeLG,
  setImageBeforeWorkingRemark, setImageAfterWorkingRemark, setImageBeforeWorkingReturnRemark,
  setImageAfterWorkingReturnRemark, setAssetList,
} = jobSlice.actions

// thunks

export default jobSlice.reducer
