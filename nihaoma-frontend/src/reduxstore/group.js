import { createSlice } from 'redux-starter-kit';

const group = createSlice({
  slice: 'group',
  initialState: { 
    currentGroup: {},
    myGroups: []
  },

  reducers: {
    signUp: (state, action) => { return { currentUser: action.payload.user, token: action.payload.token} }
  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = user
// Extract and export each action creator by name
export const { signUp } = actions
// Export the reducer, either as a default or named export
export default reducer