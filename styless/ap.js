const toggle=document.querySelector(".toggle-button");


const ball=document.querySelector(".ball");

function setPositionBall(position){
    ball.style.transform="translateX("+position+"%)";
   
}


//i make variable position beacuse i can change it easy not need to change it in every case
positionDark=20;
positionLight=140;

toggle.addEventListener("click",(e)=>{
    const test=document.documentElement.classList;
    test.toggle("dark");
     ball.style.transition="0.5s";
    if(test.contains("dark")){
    localStorage.setItem("theme","dark");
    setPositionBall(positionDark);
    }
    else{
    localStorage.setItem("theme","light");
    setPositionBall(positionLight);
    }
})


window.addEventListener("DOMContentLoaded",()=>{
    let theme=localStorage.getItem("theme")
    document.documentElement.className=theme;
    if(theme==="dark")
    setPositionBall(positionDark);
    else
    setPositionBall(positionLight);
})