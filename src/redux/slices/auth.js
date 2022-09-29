import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        removeUser: (state) => {
            state.isLoggedIn = false
            state.user = {}
        }
    }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer