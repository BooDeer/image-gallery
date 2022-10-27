import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: undefined,
}

export const usersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUsername: (state, action) => {
      state.username = action.payload
    },
  },
})

export const { addUsername } = usersSlice.actions

export default usersSlice.reducer