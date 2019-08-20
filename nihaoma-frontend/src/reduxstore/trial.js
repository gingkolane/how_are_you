import { createSlice } from 'redux-starter-kit';

const trial = createSlice({
  
  slice: 'trial',
  
  initialState: { 
    selectedTrial: {},
    trialsOfSelectedCondition: []
  },

  reducers: {
    getSelectedTrial: (state, action) => { return {...state, selectedTrial: action.payload.selectedTrial}},
    getTrialsOfSelectedCondition: (state, action) => { return {...state, trialsOfSelectedCondition: action.payload}}
  },

});


const { actions, reducer } = trial
export const { getSelectedTrial, getTrialsOfSelectedCondition } = actions

export default reducer
