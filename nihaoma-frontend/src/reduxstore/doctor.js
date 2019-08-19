import { createSlice } from 'redux-starter-kit';

const doctor = createSlice({
  slice: 'doctor',
  
  initialState: { 
    all: [], 
    currentdoctor: {}
  },

//this should be called actions
  reducers: {
    getDoctors: (state, action) => { return {...state, all: action.payload} },
    getCurrentdoctor: (state, action) => { return {...state, currentdoctor: action.payload.currentdoctor}}
    // getCurrentdoctor: (state, action) => { return {...state, currentdoctor: action.payload}}
  },

});


// Extract the action creators object and the reducer
const { actions, reducer } = doctor
// const actions = doctor.actions
// const reducer = doctor.reducer
// Extract and export each action creator by name
// each function defined in the reducers argument will have a corresponding ation cretor generated using create Action and included in the result's actions file dusing the same function name
export const { getDoctors, getCurrentdoctor } = actions
// const getdoctors = actions.getdoctors
// const updateCurrentdoctor = actions.updateCurrentdoctor

// Export the reducer, this reducer is a slice reducer that has many functions in it
export default reducer
