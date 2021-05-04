import actionType from './actionType'

export function getUsersFetching() {
  return { type: actionType.GET_USERS_FETCHING }
}

export function getUsersSuccess(data) {
  return { type: actionType.GET_USERS_SUCCESS, data }
}

export function getUsersFailure(error) {
  return { type: actionType.GET_USERS_FAILURE, error }
}
