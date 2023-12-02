var time_ele = document.getElementsByClassName("time")[0];
var start_btn = document.getElementById("start");
var lap_btn = document.getElementById("lap");
var reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

let count=0;
start_btn.addEventListener("click",function(){
count++;
if(count%2==0)
{
    document.getElementById('p').className="fa-solid fa-play";
    stop();
}
else
{
    document.getElementById('p').className="fa-solid fa-pause";
    start();
}
});
lap_btn.addEventListener("click", lap);
reset_btn.addEventListener("click", reset);

let containerDiv=document.querySelector('.contain');

function timer() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10)
        sec = '0' + sec;

    if(mins < 10)
        mins = '0' + mins;

    if(hrs < 10)
        hrs = '0' + hrs;

    time_ele.innerHTML = `${hrs}:${mins}:${sec}`;
}

function start() {
    if(interval)
    {
        return;
    }

    interval = setInterval(timer, 1000);
}

function lap() {
   
        let textNode=document.createTextNode(time_ele.innerHTML);
        let li=document.createElement('div');
        li.id='id';
        li.style.border="2px solid white";
        li.style.backgroundColor="rgba(51, 51, 51, 0.368)";
        li.style.backdropFilter="blur(10%)";
        li.style.borderRadius="10px";
        li.style.padding="10px 20px";
        li.style.margin="10px 20px";
        li.appendChild(textNode);
        containerDiv.appendChild(li);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    document.getElementById('p').className="fa-solid fa-play";
    stop();
    seconds = 0;
    ctr=0;
    time_ele.innerHTML = "00:00:00";
    console.log(a);
    while(containerDiv.hasChildNodes())
    {
    var a=document.getElementById('id');
    containerDiv.removeChild(a);
    }
}