import { createSlice } from 'redux-starter-kit';

const conditionsUser = createSlice({
  slice: 'conditionsUser',
  
  initialState: { 
    conditionsUser: {}
  },

//this should be called actions
  reducers: {
    createConditionsUser: (state, action) => { return {conditionsUser: action.payload.conditionsUser}}
 
 
  },

});


// Extract the action creators object and the reducer
const { actions, reducer } = conditionsUser
// const actions = conditionsUser.actions
// const reducer = conditionsUser.reducer
// Extract and export each action creator by name
// each function defined in the reducers argument will have a corresponding ation cretor generated using create Action and included in the result's actions file dusing the same function name
export const { createConditionsUser } = actions
// const createConditionsUser = actions.createConditionsUser
// Export the reducer, this reducer is a slice reducer that has many functions in it
export default reducer
