let nextButton = document.querySelector(".nextButton");
let icones = document.querySelector(".icones");
let x = 0;
nextButton.addEventListener("click", ()=> {
    x++;
    icones.style.visibility="hidden"
    if (x %2==0) {
        icones.style.visibility="visible"
    }
    if (x %3==0) {
       console.log("bien vu");
    }
} )
