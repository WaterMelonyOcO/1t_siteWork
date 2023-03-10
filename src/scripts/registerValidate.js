
let url = window.location.href.split("?")[0].toString()
let err = window.location.href.split("?")[1].toString()
if ( err === "err"){
    let p = document.createElement("p")
    p.setAttribute('class',"errorInput")
    p.innerHTML = "Ошибка регистрации"
    document.getElementById("errLog").append(p)
}

let form = document.querySelector(".regForm");

form.addEventListener("submit", async function (e){
    
    window.location.href = url
})
