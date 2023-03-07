new Accordion([
    ".choice__accordion_1",
    ".choice__accordion_2",
    ".choice__accordion_3",
  ]);

  document
    .querySelectorAll(".choice__accordion_1 .ac-text")
    .forEach(
      (i) =>
        (i.onclick = (e) =>
          (document.getElementById("ac-trigger-0").textContent =
            e.target.innerText))
    );
  document
    .querySelectorAll(".choice__accordion_2 .ac-text")
    .forEach(
      (i) =>
        (i.onclick = (e) =>
          (document.getElementById("ac-trigger-1").textContent =
            e.target.innerText))
    );
  document
    .querySelectorAll(".choice__accordion_3 .ac-text")
    .forEach(
      (i) =>
        (i.onclick = (e) =>
          (document.getElementById("ac-trigger-2").textContent =
            e.target.innerText))
    );

// get locals
// let form_tur = document.forms.choices_form
let locals = document.querySelector(".localsChoise")
async function getLocals(){
  let response = await fetch("/api/get/locals", {
    method: "GET"
  }).then(data => data.json())
  .then(data => data)

  for await ( loc of response){
    let el = document.createElement("p")
    el.textContent = loc
    el.setAttribute("class", "ac-text")
    el.onclick = (e) => {document.getElementById("ac-trigger-0").textContent =
    e.target.innerText}
    
    locals.appendChild(el)
  }

}

let localsName ={
  "байкал": "baikal",
  "алтай": "altay",
  "архыз": "arhiz",
  "дагестан": "dagestan",
  "карелия": "kareliya",
  "калининград": "kaliningrad",
}

// submit
let form_tur = document.forms.choices_form
form_tur.addEventListener("submit", (e) => {
  e.preventDefault()
  let url = e.target.getAttribute("action")

  let loc = document.querySelector("#ac-trigger-0").textContent.toLocaleLowerCase()
  let peopleCount = form_tur.querySelector("#ac-trigger-1").textContent.split(" ")[0]
  let dayCount = form_tur.querySelector("#ac-trigger-2").textContent.split(" ")[0]

  if ( loc.length !== 0) url += `?loc=${localsName[loc]}`
  if ( peopleCount.length !== 0 ) url += `&count=${peopleCount}`
  if ( dayCount.length !== 0 ) url += `&days=${dayCount}`
  
  window.location.href = url;
  
})

// вызов функций
getLocals()
