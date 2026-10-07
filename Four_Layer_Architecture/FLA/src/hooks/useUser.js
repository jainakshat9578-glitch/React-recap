import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserData } from "../redux/Slice/userSlice"


export const useUser = ()=>{
   const {data,loading,error} = useSelector(state=>state.user)
   
   const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(fetchUserData())
   },[dispatch])

   return {data,loading,error}
}