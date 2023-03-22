const dvd = document.querySelector('.dvd');
const bounceSound = document.querySelector('#bounce-sound');

dvd.addEventListener('animationiteration', () => {
  bounceSound.currentTime = 0;
  bounceSound.play();
});


function hideShowDvd() {
  var x = document.getElementById("dvd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideShowBee() {
    var x = document.getElementById("bee");
    var audio = document.getElementById("fools");
    if (x.style.display === "block") {
      x.style.display = "none";
      audio.pause();
    } else {
      x.style.display = "block";
      audio.play();
    }
}

function hideShowRzhenie() {
    var x = document.getElementById("rzhenie");
    var audio = document.getElementById("laugh");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      audio.play();
    }
}

