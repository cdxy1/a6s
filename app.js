import express from "express";
import userRouter from "./src/routes/userRoutes.js"


const app = express()
app.set("view engine", "ejs")
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter)

app.listen(3000)
