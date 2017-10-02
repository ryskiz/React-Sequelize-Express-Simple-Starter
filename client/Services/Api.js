import apisauce from 'apisauce'
// our "constructor"
const create = (baseURL = 'http://localhost:3000/api') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  // Provide a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  /*-------------------------------
   Unauthenticated requests go here
   ------------------------------*/
  const getUsers = () => api.get('/users')
  const loginUser = (email, password) => api.post(`/users/login`, {email, password})
  const registerUser = (email, password, firstName, lastName) => api.post('/users',
    {email, password, firstName, lastName})


  /*-----------------------------
   Authenticated requests go here
   -----------------------------*/



  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // `api` is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.

  return {
    getUsers,
    loginUser,
    registerUser
  }
}

// return back our create method as the default.
export default {
  create
}