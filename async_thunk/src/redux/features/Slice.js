import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


// createAsyncThunk('path',callback function for api calling)
// ye bhi ek action hi hai :
export const fetchData = createAsyncThunk('/fetch/getData',async()=>{
    const res = axios.get('https://fakestoreapi.noksha.dev/api/products')
    return res
})


const slice = createSlice({
    name: "user",
    initialState:{
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = true,
            state.isError = action.payload
        })
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading = true
        })
    }
})

export default slice.reducer