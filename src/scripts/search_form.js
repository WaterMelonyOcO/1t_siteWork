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
    
    locals.appendChild(el)
  }

}

// submit
let form_tur = document.forms.choices_form
form_tur.addEventListener("submit", (e) => {
  e.preventDefault()
  let loc = form_tur.querySelector(".choice__accordion_1").value
  let peopleCount = form_tur.querySelector(".choice__accordion_2").value
  let dayCount = form_tur.querySelector(".choice__accordion_3").value

  
})

// вызов функций
getLocals()
