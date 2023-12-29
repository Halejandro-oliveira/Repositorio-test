const canvas = document.getElementById("game");
const btnr = document.getElementById("btnr");
const btnl = document.getElementById("btnl");

const ctx = canvas.getContext("2d");
var x = 100



ctx.fillStyle = "#f00";
ctx.fillRect(x,50,50,50)


btnr.addEventListener("click",function() {
    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,500,500)
    
    x+=50
    ctx.fillStyle = "#f00";
    ctx.fillRect(x,50,50,50)
    
    
})

btnl.addEventListener("click",function() {
    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,1000,1000)
    
    x-=50
    ctx.fillStyle = "#f00";
    ctx.fillRect(x,50,50,50)
    
    
})





