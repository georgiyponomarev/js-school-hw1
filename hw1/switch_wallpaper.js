var images = [
    "images/future_alien_invasion.jpg", 
    "images/galaxy.jpg", 
    "images/tbilisi.jpg",
    "images/wallpaper.png",
    "images/shishka.jpg",
    "images/neural-shishka-1.jpg",
    "images/neural-shishka-2.jpg",
    "images/neural-shishka-3.jpg",
    "images/neural-shishka-4.jpg",
    "images/neural-shishka-5.jpg",
    "images/neural-shishka-6.jpg",
    "images/neural-shishka-7.jpg",
    "images/neural-shishka-8.jpg",
    "images/neural-shishka-9.jpg",
    "images/neural-shishka-10.jpg",
    "images/neural-shishka-11.jpg",
    "images/neural-shishka-12.jpg",
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