import { createSlice } from 'redux-starter-kit';

const diseasesSlice = createSlice({
  slice: 'disease',
  initialState: { 
    all: [], 
    currentDisease: {}
  },

//this should be called actions
  reducers: {
    getDiseases: (state, action) => { return {...state, all: action.payload} },
    // getRandomDisease: (state, action) => {return {...state, currentDisease: action.payload.}}
  },

});


// Extract the action creators object and the reducer
const { actions, reducer } = diseasesSlice
// Extract and export each action creator by name
// each function defined in the reducers argument will have a corresponding ation cretor generated using create Action and included in the result's actions file dusing the same function name
export const { getDiseases, getRandomDisease } = actions

// Export the reducer, this reducer is a slice reducer that has many functions in it
export default reducer
