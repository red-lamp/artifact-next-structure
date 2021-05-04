import {
  all,
} from 'redux-saga/effects'
import counterSaga from 'redux/counter/saga'
import usersSaga from 'redux/users/saga'

function* rootSaga() {
  yield all([
    ...counterSaga,
    ...usersSaga,
  ])
}

export default rootSaga
