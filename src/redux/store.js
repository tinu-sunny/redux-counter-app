import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/slice'

const store = configureStore({
    // reducer:" "  // is ther no value it get error
    reducer:{
    counter:counterReducer

    }
})

export default store