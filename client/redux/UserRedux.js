import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  userRequest: ['username', 'password'],
  userRegister: ['email', 'password', 'firstName', 'lastName'],
  userSuccess: ['id', 'firstName', 'lastName', 'email', 'jwt'],
  getUsers: null
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  username: null,
  firstName: null,
  lastName: null,
  id: null,
  jwt: null,
  isLoggedIn: false,
})

/* ------------- Reducers ------------- */

// If user account already exists request the info for a user
export const request = (state, action) =>
  state.merge({ fetching: true })

// If user is setting up account for the first time
export const setUpAccountRequest = (state, {email, password, firstName, lastName}) =>
  state.merge({ fetching: true, email, password, firstName, lastName })


// successful user lookup
export const success = (state, {id, firstName, lastName, email, jwt}) => {
  return state.merge({fetching: false, error: null, id, firstName, lastName, email, isLoggedIn: true, jwt})
}

// failed to get the user
export const failure = (state) =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.GET_USERS]: request
})
