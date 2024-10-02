import prisma from "../../prisma/index.js";

export const getUsers = async(req,res)=>{
    try {
        const loggedUser = req.user.id

        const allUsers = await prisma.user.findMany({
            where:{
                id:{
                    not:loggedUser
                },
            },
            select:{
                id: true,
                name: true,
                username: true,
                profilePic: true,
                // Exclude password by not selecting it
                password: false,
            }
        })

        if(!allUsers){
            return res.status(401).json({data:"No user found"})
        }

        return res.status(200).json({
            success: true,
            data: allUsers,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "An error occurred while fetching the user" });
    }
}