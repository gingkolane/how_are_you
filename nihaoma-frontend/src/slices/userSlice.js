import { createSlice } from 'redux-starter-kit';

const userSlice = createSlice({
  slice: 'user',
  initialState: { 
    currentUser: {},
    token: ''
  },

  reducers: {
    signUp: (state, action) => { return { currentUser: action.payload.user, token: action.payload.token} }

  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = userSlice
// Extract and export each action creator by name
export const { signUp } = actions
// Export the reducer, either as a default or named export
export default reducer