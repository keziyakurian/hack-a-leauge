<<<<<<< HEAD
//const splash = document.querySelector('.splash');

//document.addEventListener('DOMContentLoaded', (e)=>{
//    setTimeout(()=>{
//        splash.classList.add('display-none');

//    },4000);
//})
//const splash2 = document.querySelector('.splash2');

//document.addEventListener('DOMContentLoaded', (e)=>{
//    setTimeout(()=>{
//        splash2.classList.add('display-none');
//    },6000);
//})


//const texts =['WHAT IT', 'TAKES', 'WHAT IT TAKES'];
//let count = 0;
//let index = 0;
//let currentText = '';
//let letter = '';

//(function type(){
 
//    if (count === texts.length){
//     count=0;
// }
//   currentText = texts[count];
//   letter = currentText.slice(0,++index);

//   document.querySelector('.splash').textContent=letter ;
// if (letter.length=== currentText.length){
//     count++;
//     index =0;
// }
// setTimeout(type,100);
//}());

//const text = document.querySelector(".splash2");
//const strText = text.textContent;
//const splitText = strText.split("");
//text.textContent="";
//for (let i =0; i< splitText.length;i++){
//    text.innerHTML +="<span>"+ splitText[i]+ "</span>";
//}
//let char = 0;
//let timer = setInterval(onTick,50);

//function onTick(){
//    const span=text.querySelectorAll('span')[char];
//    span.classList.add('fade');
//    char++
//    if(char === splitText.length){
//        complete();
//        return;
//    }
//}
//function complete() {
//    clearInterval(timer);
//    timer=null;
//}

var button = document.getElementById("button");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});
=======
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');

    },4000);
})
const splash2 = document.querySelector('.splash2');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash2.classList.add('display-none');
    },6000);
})


const texts =['WHAT IT', 'TAKES', 'WHAT IT TAKES'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
 
    if (count === texts.length){
     count=0;
 }
   currentText = texts[count];
   letter = currentText.slice(0,++index);

   document.querySelector('.splash').textContent=letter ;
 if (letter.length=== currentText.length){
     count++;
     index =0;
 }
 setTimeout(type,100);
}());

const text = document.querySelector(".splash2");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent="";
for (let i =0; i< splitText.length;i++){
    text.innerHTML +="<span>"+ splitText[i]+ "</span>";
}
let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer=null;
}
>>>>>>> 82da3274eab7f29c4843db15cbcdf5f783edd00e
