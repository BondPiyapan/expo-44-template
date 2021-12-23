import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    inited: false,
    token: '',
    uid: '',
    user: null,
    supplier: {},
  },
  reducers: {
    setInited: (state, action) => {
      state.inited = action.payload
    },
    setAuth: (state, action) => {
      const {
        token,
        user,
        uid,
        // supplier,
      } = action.payload

      state.token = token
      state.user = user
      state.uid = uid
      // state.supplier = supplier || {}
    },
    setSupplier: (state, action) => {
      const {
        supplier,
      } = action.payload

      state.supplier = supplier || {}
    },
    clearSupplier: (state) => {
      state.supplier = {}
    },
    clearAuth: (state) => {
      state.token = ''
      state.uid = ''
      state.user = null
    },
  },
})

// actions
export const {
  setInited, setAuth, clearAuth, setSupplier, clearSupplier,
} = userSlice.actions

// thunks
// let userListener = null
// export function initAuthListener() {
//   return (dispatch) => {
//     auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         const token = await auth().currentUser.getIdToken(true)
//         const db = firestore()

//         userListener = db.collection('users')
//           .doc(user.uid)
//           .onSnapshot(async (doc) => {
//             try {
//               const userData = doc.data()
//               // console.log(userData)
//               if (userData.supplierId) {
//                 await userData.supplierId.onSnapshot(async (docc) => {
//                   try {
//                     dispatch(setSupplier({
//                       supplier: docc.data() ? { id: docc.id, ...docc.data() } : undefined,
//                     }))
//                   } catch (error) {
//                     dispatch(clearSupplier())
//                   }
//                 })
//               }
//               dispatch(setAuth({
//                 token,
//                 uid: user.uid,
//                 user: userData,
//                 // supplier: supplier ? { id: supplier.id, ...supplier.data() } : undefined,
//               }))
//             } catch (err) {
//               dispatch(clearAuth())
//             } finally {
//               dispatch(setInited(true))
//             }
//           })
//       } else {
//         if (userListener) {
//           userListener()
//           userListener = null
//         }

//         dispatch(clearAuth())
//         dispatch(clearSupplier())
//         dispatch(setInited(true))
//       }
//     })
//   }
// }

export default userSlice.reducer
