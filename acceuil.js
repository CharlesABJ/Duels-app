let body = document.querySelector("body")
let content = document.querySelector(".content")
let toggleNav = document.querySelector(".toggleNav")
let ouvrir = document.querySelector(".ouvrir")
let fermer = document.querySelector(".fermer")
let responsiveScreenMain = document.querySelector(".responsiveScreenMain")
let main = document.querySelector(".main")

let login1 = document.getElementById("login1");
let login2 = document.getElementById("login2");

let login1r = document.getElementById("login1r");
let login2r = document.getElementById("login2r");



// Toggle Nav
toggleNav.addEventListener("click", () => {
  body.classList.toggle("open");
});

ouvrir.addEventListener("click", () => {
  content.style.display = "none";
  main.style.display = "block";
});

fermer.addEventListener("click", () => {
  responsiveScreenMain.style.display = "none"
  main.style.display = "none";
  content.style.display = "block";
});





// Faire se lever le bonhomme desktop-mode
login1.addEventListener("click", () => {
  login1.style.display = "none";
  login2.style.display = "block";
});

login2.addEventListener("click", () => {
  login2.style.display = "none";
  login1.style.display = "block";
});

// ---------------------------------------

// Faire se lever le bonhomme reponsive-mode
login1r.addEventListener("click", () => {
    login1r.style.display = "none";
    login2r.style.display = "block";
  });
  
  login2r.addEventListener("click", () => {
    login2r.style.display = "none";
    login1r.style.display = "block";
  });
  // ---------------------------------------