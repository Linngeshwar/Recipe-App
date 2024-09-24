const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const recipeRouter = require("./routes/recipes");


const app = express()
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173"
}))

app.use(express.json())

app.use("/api/recipes", recipeRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})  