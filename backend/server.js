import express from "express";
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';


import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import {app, server} from "./socket/socket.js";


const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.get('/',(req,res)=>{
    res.send("hello world")
})


server.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})