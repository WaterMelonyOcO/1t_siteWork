const express = require("express")
const fs = require("fs")
const path = require("path")
const resources = require("./src/scripts/resource.route")
const routers = require("./api")
const mongo = require("mongoose")

const mainPage = path.join(__dirname, "index.html")
const elsePage = path.join(__dirname, "src/pages")

const app = express()
app.use(express.json())



app.use(express.static(mainPage))
app.use(express.static(elsePage))


app.use("/api/get/", routers.gets)
app.use("/api/register", routers.register)
app.use("/api/enter", routers.enter)
app.use('/resources/', resources)

//на страницы
app.get("/turs", function( request, response ){
    response.sendFile(elsePage + "/catalog.html")
})
app.get("/about_us", function( request, response ){
    response.sendFile(elsePage + "/about_us.html")
})

app.get("/enter", function( request, response ){
    response.sendFile(elsePage + "/enter.html")
})
app.get("/enter_auth", function( request, response ){
    response.sendFile(elsePage + "/enterCode.html")
})

app.get("/registered", function( request, response ){
    response.sendFile(elsePage + "/registerPage.html")
})
app.get("/registered_auth", function( request, response ){
    response.sendFile(elsePage + "/registerPageCode.html")
})
app.get("/error_pages", function( request, response ){
    response.sendFile(elsePage + "/error_pages.html")
})



app.get("/", function( request, response ){
    response.sendFile(mainPage)
})

app.listen(5000, function(){
    console.log(`server work on localhost:5000`);
    (async () => {
        await mongo.connect("mongodb://192.168.0.106:27017/users").then(()=>{console.log("db connect");})
    })()
})
