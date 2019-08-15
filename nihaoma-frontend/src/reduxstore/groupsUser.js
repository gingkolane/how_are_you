import { createSlice } from 'redux-starter-kit';

const groupsUserSlice = createSlice({
  slice: 'user',
  initialState: { 
    currentUser: {},
    token: ''
  },

  reducers: {
    createNewGroupsUser: (state, action) => { return { currentUser: action.payload.user, token: action.payload.token} }

  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = groupsUserSlice
// Extract and export each action creator by name
export const { createNewGroupsUser } = actions
// Export the reducer, either as a default or named export
export default reducer