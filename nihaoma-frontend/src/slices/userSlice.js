import { createSlice } from 'redux-starter-kit';
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';


const userSlice = createSlice({
  // slice: 'user',
  initialState: { 
    username: "", 
    password: ""
  },

  reducers: {
    signUpDataToDB(state, action) {
      return (dispatch) => {fetch("http://localhost:3000/login",{
        method: "post",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"
        },
        body: JSON.stringify({
          username: action.payload.username,
          password: action.payload.password
        })
      })}

      
    }
    // getUser(state, action) {
    //   return {...state, all: action.payload};
    //   }

    // createUser(state, action) {


    //   }
    // getCurrentDisease(state, action){
    //   currentDisease: action.payload[0]
    // }

  }

});


// Extract the action creators object and the reducer
const { actions, reducer } = userSlice
// Extract and export each action creator by name
export const { getUsers } = actions
// Export the reducer, either as a default or named export
export default reducer