import express from "express"
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/users',(req,res)=>{
   return  res.json([
        {name: "Akshat",id:1},
        {name: "Akshita",id:2},
        {name: "Bahubali",id:3},
        {name: "chetna",id:4}
    ])
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})