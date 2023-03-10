const {Router, urlencoded, json} = require("express")
const User = require("../db/models/user")
const Role = require("../db/models/role")
const cock = require("cookie-parser")


const urlParser = urlencoded({extended: false})
let route = Router()
route.use(cock())

const candidate = []
route.use(json())

route.post("/", urlParser, function ( request, response ){
    if(!request.body) return response.sendStatus(400);

    let name = request.body.name
    let phone = request.body.tel
    
    if ( !User.findOne({phoneNumber: phone}) ){
    return response.redirect("/registered?err")
    
    
    }
    const cid = Math.floor(Math.random()*100/2)
    candidate.push({cid: cid, code: Math.floor(Math.random()*10/2), phone, name})
    console.log(candidate);
    // fs.writeFile(db + "/users.json", JSON.stringify(userData), (err)=>{console.log(err);})
    response.cookie("cid", cid)
    response.redirect("/registered_auth")
    
})
route.post("/code", urlParser, async function ( request, response ){
    if(!request.body) return response.sendStatus(400);


    const code = request.body.sms
    const id = request.cookies
    console.log(id);

    const newCandidate = getCandidate(id.cid)
    console.log(newCandidate);
    console.log(code);

    // const test = await User.findOne({phoneNumber: newCandidate.phone})
    
    if ( !codeTest(code) ){
        console.log("err reg");
        return response.redirect("/registered_auth?err")   
    }
    if ( await User.findOne({phoneNumber: newCandidate.phone}) ){
        console.log("user exist");
        return response.status(400).json({message:"пользователь уже зарегестрирован"})
    }
    console.log("adding user \n");
    const userRole = await Role.findOne({value:"USER"})
    const newUser = new User({username: newCandidate.name, phoneNumber: newCandidate.phone, role: userRole.value})
    await newUser.save()
    response.redirect("/enter")
    
})


function codeTest (param) { 
    for ( let i of candidate){
        if (i.code === +param){
            return true
        }
    }
}

function getCandidate(param){
    for ( let i of candidate){
        if (+i.cid === +param){
            return i
        }
    }
}


module.exports = route