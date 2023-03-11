var images = [
    "images/future_alien_invasion.jpg", 
    "images/galaxy.jpg", 
    "images/tbilisi.jpg",
    "images/wallpaper.png"
]

var currentIndex = 0;
var div = document.getElementById('mobileScreen');

function changeBackground() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  div.style.backgroundImage = "url('" + images[currentIndex] + "')";
}

//   