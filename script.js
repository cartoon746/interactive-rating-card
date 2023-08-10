// variables
const submitBtn = document.getElementById('submit');
const loaderEl =document.getElementById('loader');
let mainEl =document.getElementById("main");
var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var btn3 = document.getElementById('btn-3');
var btn4 = document.getElementById('btn-4');
var btn5 = document.getElementById('btn-5');
const btnItems = [btn1, btn2, btn3, btn4, btn5];
const ratingPage = document.getElementById('ratings-page');
const thanksPage = document.getElementById('thanks-page');
const numberEl =document.getElementById('number')
function thanks() {
    // to display the thenks context
    thanksPage.classList.toggle("remove-thanks");
    ratingPage.classList.toggle('rating-visibility');
  console.log(ratingPage);
}
function numberValue(number){
  // insert the value of the inner html 
  numberEl.textContent=number;
 console.log(number);
}
btnItems.forEach(
  // for each button for the ratings
 function(inputs){
  inputs.addEventListener('click' , ()=>numberValue(inputs.value));
 }

);
// event listeners
submitBtn.addEventListener('click', thanks);