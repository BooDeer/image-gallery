import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './currUser'

export default configureStore({
	reducer: {
		users: usersReducer,
	}
})