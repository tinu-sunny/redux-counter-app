import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
name:"counter",
initialState:{
 count : 0
},
reducers:{

    increment:(state)=>{
        state.count+=1
    },
    decrement:(state)=>{
        state.count-=1
    },

    reset:(state)=>{
        state.count=0
    },
    addValue:(state,action)=>{
        state.count+=action.payload
    }
    

}
    // inside this we write actions

})

export const {increment,decrement,reset,addValue}= slice.actions
export default slice.reducer