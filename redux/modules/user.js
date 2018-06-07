//Imports
import { combineReducers } from 'redux';

//Initial State

const initialState = {
  isLoggedIn: false,
  isSubmitting: false,
};


//Actions

const LOGIN = 'LOGIN';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const login = (id, password) => {
//   return {
//     type: LOGIN,
//     promise: { method: 'post', url: '/login', data: { id, password } }
//   };
// };

//Action creators

function loginRequest(){
  return{
    type: LOGIN_REQUEST
  };
}

function loginSuccess(){
  return{
    type: LOGIN_SUCCESS
  };
}

function loginFailure(){
  return{
    type: LOGIN_FAILURE
  };
}


//API Actions


//Reducer

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST : 
      return applyLoginRequest(state);
    case LOGIN_SUCCESS : 
      return applyLoginSuccess(state);
    case LOGIN_FAILURE : 
      return applyLoginFailure(state);    
    default:
      return state;
  }
}

//reducer Functions

function applyLoginRequest(state){
  return{
    ...state,
    fetchingUpdate: true
  }
}

function applyLoginSuccess(state){
  return{
    ...state,
    fetchingUpdate: false
  }
}

function applyLoginFailure(state){
  return{
    ...state,
    fetchingUpdate: false
  }
}

//Export Action Creators

const actionCreators = {
  loginRequest,
  loginSuccess,
  loginFailure
}

export { actionCreators };


//default reducer export
export default userReducer;
