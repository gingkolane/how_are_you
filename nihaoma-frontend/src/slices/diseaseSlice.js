import { createSlice } from 'redux-starter-kit';
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';


const diseasesSlice = createSlice({
  // slice: 'diseases',
  initialState: { 
    all: [], 
    currentDisease: {}
  },

  reducers: {
    getDiseases(state, action) {
      return {...state, all: action.payload}
      // return {...state, all: action.payload}


      }

    // getCurrentDisease(state, action){
    //   currentDisease: action.payload[0]
    // }

  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = diseasesSlice
// Extract and export each action creator by name
export const { getDiseases } = actions
// Export the reducer, either as a default or named export
export default reducer