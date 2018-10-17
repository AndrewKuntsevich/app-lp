// When the user scrolls the page, execute scrollNav 
window.onscroll = function() {scrollNav()};

// Get the nav
var nav = document.getElementById("navigation");

// Get the offset position of the nav
var navPosition = nav.offsetTop;

// Add  class to the nav when you reach its scroll position. Remove class when you leave the scroll position
function scrollNav() {
  if (window.pageYOffset > navPosition) {
    nav.classList.add("navigation--small");
  } else {
    nav.classList.remove("navigation--small");
  }
}