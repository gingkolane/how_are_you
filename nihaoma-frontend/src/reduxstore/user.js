import { createSlice } from 'redux-starter-kit';

const user = createSlice({
  
  slice: 'user',
  
  initialState: { 
    currentUser: {},
    token: ''
  },

  reducers: {
    signUp: (state, action) => { return {...state, currentUser: action.payload.user, token: action.payload.token } },
    logIn: (state, action) => { return { ...state, currentUser: action.payload.user, token: action.payload.token } },
    persistUserWithToken: (state, action) => { return { ...state, currentUser: action.payload.currentUser }}
  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = user
// Extract and export each action creator by name
export const { signUp, logIn, persistUserWithToken } = actions
// Export the reducer, either as a default or named export
export default reducer