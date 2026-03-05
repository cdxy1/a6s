import express from "express";
import userRouter from "./src/routes/userRoutes.js"

const app = express()
app.use("/users", userRouter)

app.listen(3000)
