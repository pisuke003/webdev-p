const containerE = document.querySelector(".cointainer");
// .container use for mainupulate  html continer . use for class
// # use for id 

const carrer=["Youtuber","Web Developer","freelancer"];

let carrerIndex=0;
let characterIndex=0;
update();
function update(){
   characterIndex++;
   containerE.innerHTML=`<h1> I am a ${carrer[carrerIndex].slice(0,characterIndex)}</h1>`
 
   if(characterIndex===carrer[carrerIndex].length){
    carrerIndex++
    characterIndex=0
   }
   if(carrerIndex==carrer.length){
    carrerIndex=0;
   }
   setTimeout(update,500)

}

const bodyE1 = document.querySelector("body");

addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  console.log(xPos);
  const spanE1 = document.createElement("span");
  spanE1.style.left = xPos + "px"; // this use for create heart image on x-axis
  spanE1.style.top = yPos + "px"; // this use for create heart image on y-axis
  //   this is use for create random size of heart
  const size = Math.random() * 100;
  spanE1.style.width = size + "px";
  spanE1.style.height = size + "px";
  bodyE1.appendChild(spanE1);
  setTimeout(() => {
    spanE1.remove();
  }, 3000);
});



