let nIntervId;

var currentPct = 30;
var currentDeg = 180;
var cardCount = 0;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseenter", cardEnter);
card.addEventListener("mousemove", cardMove);
card.addEventListener("mouseleave", cardLeave);
card.id = cardCount;
cardCount++;
});



function cardEnter(event) {
    clearInterval(nIntervId);
    setTransition(event);


}


function setTransition(event){
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform 800ms cubic-bezier(.03,.98,.52,.99), background 8000ms linear`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, 500);


}

function cardMove(event){
  const card = event.currentTarget;
  
   const cardWidth =  card.offsetWidth;
   const cardHeight =  card.offsetHeight;

   const centerX =card.offsetLeft + (cardWidth/2);
   const centerY =card.offsetTop + (cardHeight/2);

   const mouseX = event.clientX - centerX;
   const mouseY = event.clientY - centerY + window.scrollY;
   
   const rotateY = -25*mouseX/(cardWidth/2);
   const rotateX = 15*mouseY/(cardHeight/2);
   const heightPerc = (mouseY/cardHeight)*100+50;
   const horizontalGrad = rotateY + 180;
  
   
   card.style.background = `linear-gradient(-${horizontalGrad}deg, red ${heightPerc}%, rgb(44, 1, 1))`;
   card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`;
   
   currentDeg = Math.floor(horizontalGrad);
   currentPct = Math.floor(heightPerc)
   
   
   
}


function cardLeave(event){
  const card = event.currentTarget;
  event.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

  
     
  nIntervId = setInterval( function() { gradAnimate(card.id); }, 1 ); 
  
  setTransition(event);


}

function gradAnimate(count){
  
  
  if(currentDeg > 180){
    currentDeg--;


  }else if(currentDeg < 180){
    currentDeg++;

  }

  if(currentPct> 30){
    currentPct--;


  }else if(currentPct < 30){
    currentPct++;

  }

  document.getElementsByClassName('card')[count].style.background= `linear-gradient(-${currentDeg}deg, red ${currentPct}%, rgb(44, 1, 1))`;
  //document.getElementsByClassName('card')[count].setAttribute("style", `linear-gradient(-${currentDeg}deg, red ${currentPct}%, rgb(44, 1, 1))`);
  //card.style.background = `linear-gradient(-${currentDeg}deg, red ${currentPct}%, rgb(44, 1, 1))`;

  if(currentDeg == 180 && currentPct == 30) {
    clearInterval(nIntervId);
    
  }
  
}

