$(window).scroll(function() {scrollFunction()} );
// navbar
var navbar = document.getElementById("navbar");

// offset navbar
var sticky = navbar.offsetTop;


function scrollFunction() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }

}