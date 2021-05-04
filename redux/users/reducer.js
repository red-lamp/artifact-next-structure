import actionType from './actionType'

const initialState = {
  users: [],
  error: '',
  loading: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_USERS_FETCHING:
      return {
        ...state,
        error: '',
        loading: true,
      }
    case actionType.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        error: '',
        loading: false,
      }
    case actionType.GET_USERS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
