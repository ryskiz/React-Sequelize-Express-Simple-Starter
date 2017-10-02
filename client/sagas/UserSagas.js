import {call, put} from 'redux-saga/effects'
import UserActions from '../redux/UserRedux'

export function * getUser(api, action) {
  const { username, password } = action
  // make the call to the api
  const response = yield call(api.loginUser, username, password)
  if (response.ok) {
    //'id', 'firstName', 'lastName', 'email', 'bio', 'gems'
    const { id, first_name, last_name, email, jwt } = response.data
    // do data conversion here if needed
    yield put(UserActions.userSuccess(id, first_name, last_name, email, jwt))
  } else {
    yield put(UserActions.userFailure())
  }
}

export function * test(api, action) {
  // make the call to the api
  const response = yield call(api.getUsers)
  if (response.ok) {
    // do data conversion here if needed
    yield put(UserActions.userSuccess(response.data))
  } else {
    yield put(UserActions.userFailure())
  }
}


export function * registerUser(api, action) {
  //'username', 'email', 'bio', 'gender', 'profilePic', 'firstName', 'lastName'
  const {email, password, firstName, lastName} = action;
  const response = yield call(api.registerUser, email, password, firstName, lastName)

  if (response.ok) {
    const {id, first_name, last_name, email, bio, gems, profile_pictures} = response.data
    // const firstUser = path(['data', 'items'], response)[0];
    // const avatar = firstUser.avatar_url
    // do data conversion here if needed
    yield put(UserActions.userSuccess(id, first_name, last_name, email, bio, gems, profile_pictures))
  } else {
    yield put(UserActions.userFailure())
  }
}
