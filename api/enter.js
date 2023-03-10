const {Router, urlencoded} = require("express")
const fs = require("fs")
const path = require("path")

const db = path.resolve("db")
const urlParser = urlencoded({extended: false})
let route = Router()

let enterData = []

route.post("/", urlParser, function ( request, response ){
    if(!request.body) return response.sendStatus(400);
    console.log("/main");
    let number = request.body.phoneNum
    console.log(number);
    if ( !existUser(number) ){
    response.redirect("/enter?err")
    
    
    }
    else{
       
        enterData.push({code: Math.floor(Math.random()*10/2), phone: number})
    console.log(enterData);
    // fs.writeFile(db + "/users.json", JSON.stringify(userData), (err)=>{console.log(err);})
    response.redirect("/enter_auth")
    
    }
})

route.post("/code", urlParser, function ( request, response ){
    if(!request.body) return response.sendStatus(400);

    console.log("/code");
    let code = request.body.sms
    console.log(enterData);
    console.log(code);
    if ( !codeTest(code) ){
    response.redirect("/enter_auth?err")
    
    
    }
    else{
       
    response.redirect("/")
    
    }
})

function codeTest (code) { 
    for ( let i of enterData){
        if (i.code === +code ){
            return true
        }
    }
}

function existUser(phone){
    let users = JSON.parse(fs.readFileSync( db + "/users.json", "utf-8"))
    for ( let i of users){
        if ( i.phone === phone){
            return true
        }
    }
}

module.exports = route