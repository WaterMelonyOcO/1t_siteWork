const {Router, urlencoded} = require("express")
const User = require("../db/models/user")
const cock = require("cookie-parser")

const urlParser = urlencoded({extended: false})
let route = Router()
route.use(cock())

let enterData = []

route.post("/", urlParser, async function ( request, response ){
    
    if(!request.body) return response.sendStatus(400);
    
    console.log("/main");
    
    let number = request.body.phoneNum
    console.log(number);

    if ( !(await User.findOne({phoneNumber: String(number)})) ){
    response.redirect("/enter?err")
    
    
    }
    else{
       const eid = Math.floor(Math.random()*100/2)
        enterData.push({eid: eid,code: Math.floor(Math.random()*10/2), phone: number})
    console.log(enterData);
    response.cookie("eid", eid)
    // fs.writeFile(db + "/users.json", JSON.stringify(userData), (err)=>{console.log(err);})
    response.redirect("/enter_auth")
    
    }
})

route.post("/code", urlParser, function ( request, response ){
    if(!request.body) return response.sendStatus(400);

    console.log("/code");
    let code = request.body.sms

    const eid = request.cookies.eid
    
    console.log(enterData);
    console.log(code);

    if ( !codeTest(code, eid) ){
    response.redirect("/enter_auth?err")
    
    
    }
    else{
       
    response.redirect("/")
    
    }
})

function codeTest (code, eid) { 
    for ( let i of enterData){
        if (+i.eid === +eid ){
            if( +i.code === +code){
                return true
            }
        }
    }
}


module.exports = route