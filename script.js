function myFunction(x) {
  console.log("myfunc");
  x.classList.toggle("change");
}

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li a");

burger.addEventListener("click", () => {
  console.log("1");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.querySelector("main").classList.toggle("hide");
});

links.forEach((link) => {
  console.log("2");
  link.addEventListener("click", () => {
    burger.classList.remove("active");
  });

  /* fade in */
});
window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("main").classList.add("fade_in");
}
