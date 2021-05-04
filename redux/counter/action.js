import actionType from './actionType'

export function increment() {
  return { type: actionType.INCREMENT }
}

export function decrement() {
  return { type: actionType.DECREMENT }
}
