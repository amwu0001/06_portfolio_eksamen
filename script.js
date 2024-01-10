const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector("#navbar");
const menu1 = document.querySelectorAll("#navbar a");
const menu2 = document.querySelectorAll(".navbar a");

burger.addEventListener("click", () => {
  console.log("1");
  burger.classList.toggle("change");
  nav.classList.toggle("hide");
  menu.classList.toggle("hide");
  menu1.classList.toggle("hide");
  menu2.classList.toggle("hide");
});

/* fade in */

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  document.querySelector("main").classList.add("fade_in");
}
