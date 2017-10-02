import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { UserTypes } from '../redux/UserRedux';

/* ------------- Sagas ------------- */

import { getUser, registerUser, test } from './UserSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */
/*
 takeLatest does not allow concurrent fetches of user. If "USER_REQUEST" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(UserTypes.USER_REQUEST, getUser, api),
    takeLatest(UserTypes.USER_REGISTER, registerUser, api),
    takeLatest(UserTypes.GET_USERS, test, api)
  ]
}