import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0  //state variable 
}

const counterReducer = createSlice(
    {
        name: 'counter',
        initialState, 
        reducers: {     // Actions
            increment(state){
                state.count++;
            },
            decrement(state){
                state.count--;
            },
            incrementByAmount(state,action){
               state.count += action.payload;
            },
        }
    }
)
 export const {increment,decrement,incrementByAmount} = counterReducer.actions;
 export default counterReducer.reducer