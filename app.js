const express = require("express")
const fs = require("fs")
const path = require("path")
const resources = require("./src/scripts/resource.route")
const routers = require("./api")

const mainPage = path.join(__dirname, "index.html")
const elsePage = path.join(__dirname, "src/pages")

const app = express()

app.use(express.static(mainPage))
app.use(express.static(elsePage))


app.use("/api/get/", routers.gets)
app.use('/resources/', resources)

app.get("/turs", function( request, response ){
    response.sendFile(elsePage + "/catalog.html")
})

app.get("/", function( request, response ){
    response.sendFile(mainPage)
})

app.listen(5000, function(){
    console.log(`server work on localhost:5000`);
})
