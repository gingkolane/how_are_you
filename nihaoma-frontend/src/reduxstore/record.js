import { createSlice } from 'redux-starter-kit';

const record = createSlice({
  
  slice: 'record',
  
  initialState: { 
    myRecords: [], 
    selectedRecord: {},
    recordsOfSelectedCondition: []
  },

  reducers: {
    getMyRecords: (state, action) => { return {...state, myRecords: action.payload.myRecords}},
    getSelectedRecord: (state, action) => { return {...state, selectedRecord: action.payload}},
  },

});

const { actions, reducer } = record;
export const { getMyRecords, getSelectedRecord} = actions;
export default reducer
