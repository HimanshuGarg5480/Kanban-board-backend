import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import userRouter from './routes/user.routes.js'
// import ngoRouter from './routes/ngo.routes.js'

//routes declaration
// app.use("/api/v1/users", userRouter)
// app.use("/api/v1/ngo", ngoRouter)

// http://localhost:8000/api/v1/users/register
// http://localhost:8000/api/v1/ngo/register

export { app }