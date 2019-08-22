import { createSlice } from 'redux-starter-kit';

const record = createSlice({
  
  slice: 'record',
  
  initialState: { 
    myRecords: [], 
    myRecordsInFull: [],
    selectedRecord: {},
    recordsOfSelectedCondition: []
  },

  reducers: {
    getMyRecords: (state, action) => { return {...state, myRecords: action.payload}},
    getMyRecordsInFull: (state, action) => { return {...state, myRecordsInFull: action.payload}},
    getSelectedRecord: (state, action) => { return {...state, selectedRecord: action.payload}},
    getCreatedRecord: (state, action) => { return {...state, createdRecord: action.payload}}
  },

});

const { actions, reducer } = record;
export const { getMyRecords, getMyRecordsInFull, getCreatedRecord, getSelectedRecord} = actions;
export default reducer
