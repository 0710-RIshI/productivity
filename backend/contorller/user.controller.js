const express=require('express')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel=require('../models/user.model')
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router()
const userAuth=require('../middleware/auth')
router.post('/signup',async (req,res)=>{
    //get all the user details (done)
    //hash the password (done)
    //store all the details in mongodb(done)
    //if error print the error send it to the user (done)
    //else create a jwt token and send the token to user(done)
    const {username,name,password} = req.body

    const hashedPassword =await bcrypt.hash(password,10)
    try{
        const user = await userModel.create({
            username,name,password:hashedPassword
        })

        const userToken=jwt.sign(username,process.env.JWT_KEY)
        res.status(200).send("bearer "+userToken)

    }
    catch(error){
       if(error.code==11000){
        res.status(400).send("username exists")
       }
       else{
        res.status(500).send("server error")
        console.log(error)
       }
    }
    

})
router.post('/signin',async (req,res)=>{
    const {username,password} = req.body



    try{
        const user = await userModel.findOne({username:username})
       if(user){ 
            const check =await bcrypt.compare(password,user.password)
            if(check){
                const userToken=jwt.sign(username,process.env.JWT_KEY)
                res.status(200).send("bearer "+userToken)
            }   
            else{
                res.status(400).send("incorrect password")
            }
       } 
       else{
            res.status(400).send("user not found")
       }

    }
    catch(error){
        res.status(500).send("server error")
        console.log(error)
    }
})

router.get('/user',userAuth,async(req,res)=>{
    const token=req.headers.authorization.split(' ');
    const username=jwt.decode(token[1],process.env.JWT_KEY)
    try{
        const user = await userModel.findOne({username:username})
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send("server error")
        console.log(error)
    }

})



module.exports=router