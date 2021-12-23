import { createSlice } from '@reduxjs/toolkit'

export const jobStatusSlice = createSlice({
  name: 'jobstatus',
  initialState: {
    jobstatus: '',
  },
  reducers: {
    setJobStatus: (state, action) => {
      state.jobstatus = action.payload.jobstatus
    },
  },
})

// actions
export const { setJobStatus } = jobStatusSlice.actions

// thunks

export default jobStatusSlice.reducer
