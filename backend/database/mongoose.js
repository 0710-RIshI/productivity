const mongoose =require('mongoose')
const connection= async ()=>{
    mongoose.set("strictQuery",true)
    try{
        await mongoose.connect("mongodb://127.0.01:27017/productivity")
        console.log("connected to database")
    }catch(error){
        console.log(`error connecting mongodb:${error}`)
    }

}
module.exports=connection;