import { createSlice } from 'redux-starter-kit';

const treatment = createSlice({
  
  slice: 'treatment',
  
  initialState: { 
    myTreatments: [],
    myTreatmentsGroupByConditions:{},
    selectedTreatment: {},
    treatmentsOfSelectedCondition: []
  },

  reducers: {
    getMyTreatments: (state, action) => { return {...state, myTreatments: action.payload}},
    getSelectedTreatment: (state, action) => { return {...state, selectedTreatment: action.payload}},
    getTreatmentsOfSelectedCondition: (state, action) => { return {...state, treatmentsOfSelectedCondition: action.payload}},
    getMyTreatmentsGroupByConditions: (state, action) => { return {...state, myTreatmentsGroupByConditions: action.payload}}
  },

});


const { actions, reducer } = treatment

export const { getMyTreatments, getSelectedTreatment, getTreatmentsOfSelectedCondition, getMyTreatmentsGroupByConditions } = actions

export default reducer
