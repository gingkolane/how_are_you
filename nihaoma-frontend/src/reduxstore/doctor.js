import { createSlice } from 'redux-starter-kit';

const doctor = createSlice({
  
  slice: 'doctor',
  
  initialState: { 
    myDoctors: [], 
    selectedDoctor: {}
  },

  reducers: {    
    getMyDoctors: (state, action) => { return {...state, myDoctors: action.payload.myDoctors}},
    getSelectedDoctor: (state, action) => { return {...state, selectedDoctor: action.payload}},
    getDoctorsOfSelectedCondition: (state, action) => { return {...state, doctorsOfSelectedCondition: action.payload.doctorsOfCondition}}
  },

});

const { actions, reducer } = doctor
export const { getMyDoctors, getSelectedDoctor, getDoctorsOfSelectedCondition } = actions
export default reducer
