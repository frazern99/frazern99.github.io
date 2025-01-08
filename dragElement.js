// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var height = document.getElementById("mydiv").clientHeight;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = (e.clientX/window.innerWidth)*100;
    
    pos4 = (e.clientY/window.innerHeight)*100;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
   
    pos3 = (e.clientX/window.innerWidth)*100;
    pos4 = (e.clientY/window.innerHeight)*100;
    document.getElementById("test").innerHTML = e.clientY;
    
    // set the element's new position:
    elmnt.style.top = pos4 - ((height/2)/window.innerHeight)*100 + "%";
    elmnt.style.left = pos3 + "%";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}