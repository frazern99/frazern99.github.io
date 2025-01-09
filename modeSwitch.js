

const toggleSwitch = document.querySelector(".lightDark");
const stylesheet = document.querySelector(".style");


toggleSwitch.addEventListener('change', boxChecked);
   

function boxChecked(event){
    if (this.checked) {
        stylesheet.setAttribute("href", "stylesheetdark.css");
        document.cookie = "isDark=true;";
        let y = document.cookie;
        console.log(y);
    } else {
        stylesheet.setAttribute("href", "stylesheetlight.css");
        document.cookie = "isDark=false;";
        let y = document.cookie;
        console.log(y);
    }
  



 }

 function setDark(){
    stylesheet.setAttribute("href", "stylesheetdark.css")

 } 

 function setLight(){
    stylesheet.setAttribute("href", "stylesheetlight.css")
    
 } 