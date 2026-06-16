
const button = document.getElementById("button");
const timeDisplay = document.getElementById("timeDisplay");
const box= document.querySelector(".box");
const exit = document.getElementById("exit");
const text = document.getElementById("insult");
const hour = document.getElementById("hour");
const lockcomment = document.getElementById("lockcomment")

const insults = [
    "#Why are you checking the time again?",
    "#Time is an illusion.",
    "#You are still procrastinating.",
    "#The clock is judging you.",
    "#Error 404: Motivation not found.",
     "#Skill issue.",
    "#Access denied. Just kidding.",
     "#Buy a watch.",
    "#Too late now."
];


function time(){
const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    return `${h}hours: ${m}mins: ${s}sec`
}

button.addEventListener("click",() => {
        timeDisplay.innerHTML= time();
       timeDisplay.classList.add("showTime");
         box.classList.add("box2");
exit.classList.add("exit2");
        text.innerHTML=insults[Math.floor(Math.random()*insults.length)];
        timeDisplay.classList.add("#timeDisplay:hover");

          hour.style.display = "flex";
            hour.classList.add("hour2");
})

let attempt=0
hour.addEventListener("click",() => {
     attempt++;
     if(attempt<=5){
       lockcomment.innerHTML="Premeium feature click 5 times to unlock"
     }
     else{
        lockcomment.innerHTML="Sorry!! Coming Soon"
     }

})
