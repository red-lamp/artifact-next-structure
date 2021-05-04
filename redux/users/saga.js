import {
  put,
  takeEvery,
} from 'redux-saga/effects'
import { getUsersSuccess, getUsersFailure} from './action'
import actionType from './actionType'

function* getUsersFetchingSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(getUsersSuccess(data))
  } catch (error) {
    yield put(getUsersFailure(error))
  }
}

const usersSaga = [
  takeEvery(actionType.GET_USERS_FETCHING, getUsersFetchingSaga),
]

export default usersSaga
