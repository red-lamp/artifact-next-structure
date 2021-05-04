import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import counterReducer from 'redux/counter/reducer'
import usersReducer from 'redux/users/reducer'

const reducers = combineReducers({
  users: usersReducer,
  counter: counterReducer,
})

const mainReducer = (state = {}, action) => action.type === HYDRATE ? { ...state, ...action.payload }: reducers(state, action)

export default mainReducer
