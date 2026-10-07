import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../service/api";

export const fetchUserData = createAsyncThunk('/fetch/users',async()=>{
    return await fetchUser()
})

const userSlice = createSlice({
    name:'user',
    initialState:{
        data:null,
        isLoading:false,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserData.fulfilled,(state,action)=>{
            state.isLoading = false,
            state.data = action.payload
        })
        builder.addCase(fetchUserData.rejected,(state,action)=>{
            state.isLoading = true,
            state.isError = action.payload
        })
        builder.addCase(fetchUserData.pending,(state,action)=>{
            state.isLoading = true
        })
    }
})

export default userSlice.reducer