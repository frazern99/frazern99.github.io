dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var cx = 0, cy = 0;
    
    elmnt.onmousedown = dragMouseDown;
    var circle = document.getElementById("mycirc");
    cx = circle.getAttribute('cx');
    cy = circle.getAttribute('cy');
  function dragMouseDown(e) {
    document.getElementById("test").innerHTML = "clicked";
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    
    pos4 = e.clientY;
    
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onscroll = elementScroll;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    cx = cx - pos1;
    cy = cy - pos2;
    document.getElementById("test").innerHTML = pos4;
    
    
    // set the element's new position:
    document.getElementById("mycirc").setAttribute('cx', cx);
    document.getElementById("mycirc").setAttribute('cy', cy);
    
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function elementScroll(){
    document.getElementById("test").innerHTML = document.scrollY;
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    cx = cx - pos1;
    cy = cy - pos2;
    document.getElementById("test").innerHTML = pos4;
    
    
    // set the element's new position:
    document.getElementById("mycirc").setAttribute('cx', cx);
    document.getElementById("mycirc").setAttribute('cy', cy);

  }
}