import { createSlice } from 'redux-starter-kit';

const condition = createSlice({
  slice: 'condition',
  
  initialState: { 
    all: [], 
    currentCondition: {}
  },

//this should be called actions
  reducers: {
    getConditions: (state, action) => { return {...state, all: action.payload} },
    getCurrentCondition: (state, action) => { return {...state, currentCondition: action.payload.currentCondition}}
    // getCurrentCondition: (state, action) => { return {...state, currentCondition: action.payload}}
  },

});


// Extract the action creators object and the reducer
const { actions, reducer } = condition
// const actions = condition.actions
// const reducer = condition.reducer
// Extract and export each action creator by name
// each function defined in the reducers argument will have a corresponding ation cretor generated using create Action and included in the result's actions file dusing the same function name
export const { getConditions, getCurrentCondition } = actions
// const getConditions = actions.getConditions
// const updateCurrentCondition = actions.updateCurrentCondition

// Export the reducer, this reducer is a slice reducer that has many functions in it
export default reducer
