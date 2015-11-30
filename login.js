var element = document.getElementById("destination-slideshow");
var duration = 2000; 
var hide = 2000;
var showtime = 6000; 

var running = 0; 
var elementCount = 1;

var totalImages = element.getElementsByTagName('div').length;

function setOpacity(opa) {
  element.style.opacity = opa;
}

function startFade() {
  if (running != 1) {
   running = 1;
   fadeOut();
  }
}

function fadeOut() {
  for (i = 0.1; i <= 1; i += 0.1) {
    setTimeout("setOpacity(" + (1 - i) +")", i * duration);
  }
   setTimeout("fadeIn()", (duration + hide));
}

function fadeIn() {
  for (i = 0.1; i <= 1; i += 0.1) {
    setTimeout("setOpacity(" + i +")", i * duration);
  }
   if (elementCount == totalImages) {
    elementCount = 1;
    document.getElementById("image" + elementCount).style.display = "block";
    document.getElementById("image" + totalImages).style.display = "none";
   } else {
    document.getElementById("image" + (elementCount + 1)).style.display = "block";
    document.getElementById("image" + elementCount).style.display = "none";
    elementCount = elementCount+1;
   }
   setTimeout("fadeOut()", (duration + showtime));
} 
