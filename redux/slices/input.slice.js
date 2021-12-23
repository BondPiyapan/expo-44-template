import { createSlice } from '@reduxjs/toolkit'
import _keys from 'lodash/keys'
import _get from 'lodash/get'

const foxbithLocation = {
  latitude: 13.742002059764182,
  latitudeDelta: 0.12623475225013614,
  longitude: 100.58295926079154,
  longitudeDelta: 0.07367525249718199,
}

const editLocationJob = {
  latitude: 13.742002059764182,
  longitude: 100.58295926079154,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const initialState = {
  createCompanyProfile: {
    map: {
      ...foxbithLocation,
    },
  },
  createAccountStep2: {
    map: {
      ...editLocationJob,
    },
  },
  companyProfileSetting: {
    map: {
      ...foxbithLocation,
    },
  },
  profileSetting2: {
    map: {
      ...foxbithLocation,
    },
  },
  customerDetailJob: {
    map: {
      ...editLocationJob,
    },
  },
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      const { section, field, value } = action.payload
      if (!_keys(initialState).includes(section)) return
      if (!_keys(_get(initialState, section)).includes(field)) return

      state[section][field] = value
    },
  },
})

// actions
export const { setInputValue } = inputSlice.actions

export default inputSlice.reducer
