import prisma from "../../prisma/index.js";
import bcrypt from "bcryptjs";
import cookieToken from "../utils/cookiesToken.js";

//user signUp

export async function signup(req, res, next) {
  try {
    const { name,username, password,confirmPassword,profilePic } = req.body;

    if (!name || !username  || !password) {
      return res.status(400).json({ error: "Please fill all fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password does not matched" });
    }

    if(!profilePic){
      var newprofilePic = `https://avatar.iran.liara.run/username?username=${name}&bold=false&length=1`
    }

    const userExists = await prisma.user.findUnique({where:{username}})

    if(userExists){
      return res.status(400).json({error:"Username already exist"})
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)

    const user = await prisma.user.create({
      data: {name,username, password:hashPassword,profilePic:newprofilePic },
    });

    cookieToken(user,res);
  } catch (error) {
    throw new Error(error);
  }
}

// user login
export async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Please provide email and password" });
    }

    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const matched = await bcrypt.compare(password,user?.password || '')

    if (!matched) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    cookieToken(user,res);
  } catch (error) {
    throw new Error(error);
  }
}

// Logout user
export async function logout(req, res, next) {
  try {
    res.clearCookie("token");
    res.json({
      Success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
}
