const jwt= require('jsonwebtoken')

const userAuth=(req,res,next)=>{
    const token=req.headers.authorization
    
    try
    {
        const tokenArray = token.split(" ");
        jwt.verify(tokenArray[1],process.env.JWT_KEY)
        next()

    }catch(err){
        res.status(401).send("user not authorized")
    }
}
module.exports=userAuth