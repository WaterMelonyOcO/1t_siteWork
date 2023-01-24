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