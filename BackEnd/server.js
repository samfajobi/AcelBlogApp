const express = require("express");
const dotenv = require("dotenv")


const app = express()



const PORT = 5000

app.listen("PORT", () => {
    console.log(`App is listening on Port ${PORT}`)
})