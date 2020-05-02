window.onscroll = function() {myFunction()};

const header = document.getElementById("header");
const main = document.getElementById("main");

const sticky = header.offsetTop + main.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}