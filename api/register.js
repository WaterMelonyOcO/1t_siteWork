const {Router, urlencoded} = require("express")
const fs = require("fs")
const path = require("path")

const db = path.resolve("db")
const urlParser = urlencoded({extended: false})
let route = Router()

let candidateCode = []

route.post("/", urlParser, function ( request, response ){
    if(!request.body) return response.sendStatus(400);

    let name = request.body.name
    let phone = request.body.tel
    
    if ( existUserTest(phone) ){
    response.redirect("/registered?err")
    
    
    }
    else{
       
    candidateCode.push({code: Math.floor(Math.random()*10/2), phone, name})
    console.log(candidateCode);
    // fs.writeFile(db + "/users.json", JSON.stringify(userData), (err)=>{console.log(err);})
    response.redirect("/registered_auth")
    
    }
})
route.post("/code", urlParser, function ( request, response ){
    if(!request.body) return response.sendStatus(400);


    let code = request.body.sms
    console.log(candidateCode);
    console.log(code);
    if ( !codeTest(code) ){
    response.redirect("/registered_auth?err")
    
    
    }
    else{
       
    addNewUser(getCandidate(code))
    response.redirect("/enter")
    
    }
})

function existUserTest (param) { 
    let userData = JSON.parse(fs.readFileSync( db + "/users.json", "utf-8"))
    for ( let i of userData){
        if (i.phone === param){
            return true
        }
    }
}

function codeTest (param) { 
    for ( let i of candidateCode){
        if (i.code === +param){
            return true
        }
    }
}

function getCandidate(param){
    for ( let i of candidateCode){
        if (i.code === +param){
            return i
        }
    }
}

function addNewUser(user){
    let vuser = {name: user.name, phone: user.phone}
    let userData = JSON.parse(fs.readFileSync( db + "/users.json", "utf-8"))
    userData.push(vuser)
    fs.writeFile(db + "/users.json", JSON.stringify(userData), (err)=>{console.log(err);})
}

module.exports = route