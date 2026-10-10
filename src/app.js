import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"  //access cookies from user browser and send cookies from server to browser
                                          //performing CRUD operations on cookies
const app=express()

app.use(cors({
    origin: process.env.CORS_ROGIN,  //from which fronted sources we can accept inputs
    credentials: true
}))

//limit for json or form input
app.use(express.json({limit: "16kb"}))


//express special ecoder that convert special charactes of url into express readble 
app.use(express.urlencoded({extended: true, limit: "16kb"}))


//file or folder that can be acceded by everyone
app.use(express.static("public"))


app.use(cookieParser())





export {app}