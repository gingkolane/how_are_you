import { createSlice } from 'redux-starter-kit';

const doctor = createSlice({
  
  slice: 'doctor',
  
  initialState: { 
    myDoctors: [], 
    selectedDoctor: {},
    doctorsOfSelectedCondition: []
  },

  reducers: {    
    getMyDoctors: (state, action) => { return {...state, myDoctors: action.payload}},
    getSelectedDoctor: (state, action) => { return {...state, selectedDoctor: action.payload}},
    getDoctorsOfSelectedCondition: (state, action) => { return {...state, doctorsOfSelectedCondition: action.payload}}
  },

});

const { actions, reducer } = doctor;
export const { getMyDoctors, getSelectedDoctor, getDoctorsOfSelectedCondition } = actions;
export default reducer
