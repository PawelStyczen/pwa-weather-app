/* MOBILE NAV */

var navIcon = document.getElementById("js--show-mobile-nav");
navIcon.onclick = function showNavigation() {
  var navigation = document.getElementById("js--nav__list");
  if (navigation.style.transform === "translateX(0%)") {
    navigation.style.transform = "translateX(100%)";
    navIcon.style.backdropFilter = "blur(10px)";
  } else {
    navigation.style.transform = "translateX(0%)";
    navIcon.style.backdropFilter = "blur(0px)";
  }
};
