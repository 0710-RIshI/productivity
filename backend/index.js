const express=require('express')
const app=express()
const userRouter=require('./contorller/user.controller')



const connection=require('./database/mongoose')
connection()
app.use(express.json())
app.use('/user',userRouter)



app.listen(3000,()=>{
    console.log("listening on port 3000")
})
