import getJwtToken from '../helpers/getJwtToken.js';

const cookieToken =(user,res) => {
    const token = getJwtToken(user.id);
    const optons = {
        expires :new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        httpOnly:true,
        sameSite:"strict",
        secure: process.env.NODE_ENV !== 'development'
    };
    user.password = undefined;
    res.status(200).cookie('token',token,optons).json({
        succes:true,
        token,
        user
    })
}

export default cookieToken;