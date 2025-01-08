
var start;

var mX;
var mY;

const icons = document.querySelectorAll(".iconImage");

icons.forEach(icon => {

icon.addEventListener("mouseenter", iconEnter);
icon.addEventListener("mousemove", iconMove);
icon.addEventListener("mouseleave", iconLeave);

});

function iconEnter(event) {

   const icon = event.currentTarget;
   
   start = setTimeout(function() {
    show(event, icon.id);  
   }, 1500);


}

function iconMove(event) {
mY = event.clientY+15 + window.scrollY;
mX = event.clientX+15;



}


function show(event, id){
 
 
 

 console.log(mY);
document.getElementsByClassName('tooltiptext')[0].innerHTML = id;
document.getElementsByClassName('tooltiptext')[0].style.visibility = "visible";
document.getElementsByClassName('tooltiptext')[0].style.top = `${mY}px`;
document.getElementsByClassName('tooltiptext')[0].style.left =`${mX}px`;

}
function iconLeave(event) {
    
    clearTimeout(start);
    document.getElementsByClassName('tooltiptext')[0].style.visibility = "hidden";
 
 }