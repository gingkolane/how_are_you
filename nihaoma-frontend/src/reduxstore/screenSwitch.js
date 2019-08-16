import { createSlice } from 'redux-starter-kit';

const screenSwitch = createSlice({
  
  slice: 'screenSwitch',

  initialState: { 
    screen: ''
  },

  reducers: {
    updateScreen: (state, action) => { return { ...state, screen: action.payload.screen} }
  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = screenSwitch
// Extract and export each action creator by name
export const { updateScreen } = actions
// Export the reducer, either as a default or named export
export default reducer