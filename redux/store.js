import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/user.slice'
import inputReducer from './slices/input.slice'
import jobReducer from './slices/job.slice'
import customerService from './slices/customerService.slice'
import swipeReucer from './slices/swipe.slice'
import filterWorkTab1Reucer from './slices/filterworktab1.slice'
import jobStatusSliceReducer from './slices/jobstatus.slice'
import assetHistoryReducer from './slices/assethistory.slice'
import assassetDetailPM from './slices/assetdetailPM.slice'
import assetJobPMReducer from './slices/assetJobPM.slice'
import assassetDetailDC from './slices/assetdetailDC.slice'
import assetJobDCReducer from './slices/assetJobDC.slice'
import sparepartReducer from './slices/sparepart.slice'

export default configureStore({
  reducer: {
    user: userReducer,
    input: inputReducer,
    job: jobReducer,
    customerservice: customerService,
    swipe: swipeReucer,
    filterworktab1: filterWorkTab1Reucer,
    jobstatus: jobStatusSliceReducer,
    assethistory: assetHistoryReducer,
    assetdetailpm: assassetDetailPM,
    assetjobpm: assetJobPMReducer,
    assetdetaildc: assassetDetailDC,
    assetjobdc: assetJobDCReducer,
    sparepart: sparepartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})
