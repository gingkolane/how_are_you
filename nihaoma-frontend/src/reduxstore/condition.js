import { createSlice } from 'redux-starter-kit';

const condition = createSlice({
  
  slice: 'condition',
  
  initialState: { 
    myConditions: [],
    selectedCondition: {}
  },

  reducers: {
    getMyConditions: (state, action) => { return {...state, myConditions: action.payload.myConditions}},
    getSelectedCondition: (state, action) => { return {...state, selectedCondition: action.payload}}
  },

});


const { actions, reducer } = condition

export const { getMyConditions, getSelectedCondition } = actions

export default reducer
