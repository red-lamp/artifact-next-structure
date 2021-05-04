import {
  select,
  takeEvery,
} from 'redux-saga/effects'
import actionType from './actionType'

function* counterIncrementSaga() {
  console.log('++++')
  yield
}

function* counterDecrementSaga() {
  const getCounter = yield select((state) => state.counter)
  console.log('----', getCounter)
  yield
}

const counterSaga = [
  takeEvery(actionType.INCREMENT, counterIncrementSaga),
  takeEvery(actionType.DECREMENT, counterDecrementSaga),
]

export default counterSaga
