let fIntervId;
var vel = -3.5;

const circles = document.querySelectorAll(".circles");
//var pos = document.getElementsByClassName('circles')[0].style.marginTop;
var pos = 100;
var shadPos = 70;
var timeCount = 0;
var acc = -1;
var count = 0;


circles.forEach(circle => {
    
    circle.id = count;
    count++;
    });

fIntervId = setInterval( function() { float(); }, 100 ); 
function float(){
    //const elem = document.getElementById("deez");
    pos = pos + vel + 0.5*acc;
    console.log(pos);
    vel = vel + acc;
    shadPos = 70 + (100 - pos);
    if(pos<30){
        acc = 1;
    
    }else if(pos>70){
        acc = -1;
    }else if(pos == 70){
        acc = -acc;
    }
    document.getElementsByClassName('circles')[1].style.marginTop= `${pos}px`;
    document.getElementsByClassName('shadow')[1].style.marginTop= `${shadPos}px`;
    //elem.style.marginTop= `${pos}px`;
    
}