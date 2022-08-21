var count =  document.querySelector(".number");
var myBtn_increase = document.querySelector(".btn.increase");
var myBtn_decrease = document.querySelector(".decrease");
var myBtn_reset = document.querySelector(".reset");

myBtn_increase.addEventListener("click", function increment(){
count.innerHTML = parseInt(count.innerHTML) +1;
if(parseInt(count.innerHTML) >= 0){
  count.style.color ="green";
 }

 if(parseInt(count.innerHTML) < 0){
  count.style.color ="red";
 }

}
)

myBtn_decrease.addEventListener("click", function decrement(){
count.innerHTML = parseInt(count.innerHTML) - 1;

if(parseInt(count.innerHTML) >= 0){
  count.style.color ="green";
 }

 if(parseInt(count.innerHTML) < 0){
  count.style.color ="red";
 }
})

myBtn_reset.addEventListener("click", function reset(){
count.innerHTML = 0;
if(parseInt(count.innerHTML) >= 0){
  count.style.color ="green";
 }

 if(parseInt(count.innerHTML) < 0){
  count.style.color ="red";
 }
})

