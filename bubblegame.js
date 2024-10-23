
var score=0;
function makebubble(){
    var clutter=""
for (let i=1;i<=330;i++){
    var a=Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${a}</div>`
}
var d=document.querySelector(".pbottom")
d.innerHTML=clutter;
}
function runtimmer(){
var t=30;
var time=document.querySelector(".box2");
var new1=document.querySelector(".container");
var time1=setInterval(function(){
if(t>0){
t--;
time.innerHTML=t}

else{
    
    document.querySelector(".start-game").textContent="GAME OVER"
    new1.style.opacity=1;
    
    
    setTimeout(function(){
        document.querySelector(".start-game").textContent="START GAME"
        new1.style.opacity=1;
        document.querySelector(".box3").textContent=t;
        clearInterval(time1);
    },2500)
    
}
},1000)}
function hitchange(){
var hit=document.querySelector(".box1");
var bubble=document.querySelector(".pbottom");
bubble.addEventListener("click",function(dets){
    if(Number(hit.textContent)==Number(dets.target.textContent)){
        scoreincrease();
        makebubble();
    }
    hit.innerHTML=Math.floor(Math.random()*10);
})
}
var score=0;
function scoreincrease(){
    score+=10;
    document.querySelector(".box3").textContent=score;
}
var c=document.querySelector(".container")
var m=document.querySelector(".pbottom")
document.querySelector(".start-game").addEventListener("click",function(){
    runtimmer();
    c.style.opacity=0;
    m.style.opacity=1;
   

})


makebubble();
hitchange();