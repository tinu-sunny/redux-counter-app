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
    }
    

}
    // inside this we write actions

})

export const {increment,decrement,reset}= slice.actions
export default slice.reducer