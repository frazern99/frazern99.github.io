

const toggleSwitch = document.querySelector(".lightDark");
const stylesheet = document.querySelector(".style");


toggleSwitch.addEventListener('change', boxChecked);
   

function boxChecked(event){
    if (this.checked) {
        stylesheet.setAttribute("href", "stylesheetdark.css")
    } else {
        stylesheet.setAttribute("href", "stylesheetlight.css")
    }
  



 }