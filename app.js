require("dotenv").config()

const express = require('express')
const app = express()

const user = require("./api/user/router.User")
const itemRouter = require("./api/item/router.Item")

app.use(express.json())

app.use("/user", user)
app.use("/item", itemRouter)

app.listen(process.env.APP_PORT, ()=>{
    console.log("running on port" + process.env.APP_PORT)
})