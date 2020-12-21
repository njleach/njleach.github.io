/* Open when someone clicks on the span element */
function openNav() {
    var buttonPos = document.getElementById("mobileMenu");
    var buttonObj = document.getElementById("opnclsbtn");
    if (buttonPos.style.left == "100%" || buttonPos.style.left == "") {
        buttonPos.style.left = "0%";
        buttonObj.style.transform = "rotate(45deg)";
    } else {
        buttonPos.style.left = "100%";
        buttonObj.style.transform = "rotate(0deg)";
    }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("masthead").style.top = "0";
  } else {
    document.getElementById("masthead").style.top = "-5.065rem";
  }
  prevScrollpos = currentScrollPos;
}