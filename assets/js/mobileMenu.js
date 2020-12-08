/* Open when someone clicks on the span element */
function openNav() {
    var buttonPos = document.getElementById("mobileMenu");
    var buttonObj = document.getElementById("opnclsbtn");
    if (buttonPos.style.left == "-100%" || buttonPos.style.left == "") {
        buttonPos.style.left = "0%";
        buttonObj.style.transform = "rotate(45deg)";
    } else {
        buttonPos.style.left = "-100%";
        buttonObj.style.transform = "rotate(0deg)";
    }
}