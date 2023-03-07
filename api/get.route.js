const {Router} = require("express")
const fs = require("fs")
const path = require("path")

const db = path.resolve("db")
let route = Router()

route.get("/locals", function ( request, response ){
    let localtions = fs.readFileSync(db + "/locations.json")
    // localtions = JSON.parse(localtions)
    response.send(localtions)
})

route.get("/turs", function ( request, response ){
    let reqData = request.query
    let turs = fs.readFile(db + "turs.json", "utf-8", (err, file)=>{
        if (err)console.log(err);
        else{
            let data = JSON.parse(file)

            data.filter( (i) => {
                i.loc === "baikal"
            })
            // response.setHeader("Content-Type", "application/json")
            response.send(JSON.stringify(data))
        }
    })




})


module.exports = route