import pkg from 'jsonwebtoken';
const { sign } = pkg

const getJwtToken = (userId)=>{
    return sign({userId:userId},process.env.JWT_SECRET,{expiresIn: '15 day'})
}

export default getJwtToken;