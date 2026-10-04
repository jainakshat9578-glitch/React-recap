import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'count',
    initialState:{
        value:0
    },
    reducers:{
        increment: (state)=>{ //multiple actions bana sakte hai
            state.value +=1; // count ki value 1 se badha rhe hai
        },
        decrement:(state)=>{
            state.value -=1;
        },
        incrementValueByUserInput:(state,action)=>{
            state.value += action.payload
        } // action-> user jo data bheja voh aayega payload me 
    }
})


export const {increment,decrement,incrementValueByUserInput} = counterSlice.actions
export default counterSlice.reducer