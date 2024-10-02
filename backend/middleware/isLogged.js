import prisma from "../../prisma/index.js";
import pkg from 'jsonwebtoken';
const { verify } = pkg;

const isLoggedIn = async(req,res,next)=>{
    try {
        const token = req.cookies.token;

        if(!token){
            res.send("user not logged")
        }

        const decoded = verify(token,process.env.JWT_SECRET)
        const user = await prisma.user.findUnique({where:{
            id:decoded.userId
        }})
        req.user = user
        next()
    } catch (error) {
        res.send(error)
    }
}

export default isLoggedIn