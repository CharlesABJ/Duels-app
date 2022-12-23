let panneau = document.querySelector(".panneau");
let x = 0;



panneau.addEventListener("click", () => {
  x++;
  if (x < 10) {
    console.log(`Essaie encore ${10 - x} fois..`);
  }
  switch (x) {
    case 2:
      console.log("Ne t'arrête pas !");
      break;
    case 5:
      console.log("Tu y es presque..");
      break;
    case 7:
      console.log("Encore un peu..");
      return changeColor();
      break;
    default:
      break;
  }
  if (x === 10) {
    console.log("bravo");
  }
  
  if (x === 11) {
    window.location.reload();
  }

});
function changeColor() {
    panneau.style.background = "#6752dc";
}
function hiddenGame() {
    
}



function game(params) {
  
}