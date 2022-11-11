let add=document.getElementById("add");
let subtract=document.getElementById("subtract");
add.addEventListener("click",function(){
    let output=document.getElementById("output");
    let result=Number(output.innerText)+1;
    if(result>10){
        result=0;
    }
    output.innerText=result;
});
subtract.addEventListener("click",function(){
    let output=document.getElementById("output");
    let result=Number(output.innerText)-1;
    if(result<0){
        result=0;
    }
    output.innerText=result
});


//counter
let mySeconds;
let intervalHandle;
function tick() {
    var secDisplay=getElementById("seconds");
    var minDisplay=getElementById("minutes");

    var min=Math.floor(mySeconds/60);
    var sec=mySeconds -min*60;
    if(sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }

secDisplay.innerHTML=sec+"s";
minDisplay.innerHTML=min+"m";

if(mySeconds===0){
    alert("Done");
    clearInterval(intervalHandle);
}
mySeconds--;
}

function startCounter(){
    var myInput=document.getElementById("inputArea").value;
    if (isNaN(myInput)){
        alert("Type a valid number please");
        return;
    }
    mySeconds=myInput;
    intervalHandle=setInterval(tick,1000);
    document.getElementById("inputArea").value="";

}
function stopCounter(){
    seconds.innerHTML="00s";
    minutes.innerHTML="00m";
    clearInterval(intervalHandle);
}
document.getElementById("Start").addEventListener("click",startCounter);
document.getElementById("Stop").addEventListener("click",stopCounter);
