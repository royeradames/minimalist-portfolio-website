/*  Libraries */
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

/* routers */
const emailRouter = require("./email")

/* Start server */
const server = express()

/* Middlewares */
// application level
server.use(express.json())

// third party
server.use(helmet())
server.use(cors())

// developer
server.use("/email", emailRouter)



module.exports = server