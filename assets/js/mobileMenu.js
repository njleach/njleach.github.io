function toggleNav(forceState) {
    var menu = document.getElementById("mobileMenu");
    var buttonIcon = document.getElementById("opnclsbtn");
    var button = document.querySelector("#masthead a.openbtn");
    var shouldOpen = typeof forceState === "boolean" ? forceState : !menu.classList.contains("is-open");

    menu.classList.toggle("is-open", shouldOpen);
    document.body.classList.toggle("menu-open", shouldOpen);
    buttonIcon.style.transform = shouldOpen ? "rotate(45deg)" : "rotate(0deg)";
    button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (document.body.classList.contains("menu-open")) {
    return;
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("masthead").style.top = "0";
  } else {
    document.getElementById("masthead").style.top = "-5.065rem";
  }
  prevScrollpos = currentScrollPos;
}
