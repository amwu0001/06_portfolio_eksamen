function ranNum(max) {
  return Math.floor(Math.random() * max) + 1;
}
const b1 = document.querySelector("#b1_container");
const b2 = document.querySelector("#b2_container");
const b3 = document.querySelector("#b3_container");
const b4 = document.querySelector("#b4_container");
const b5 = document.querySelector("#b5_container");
const b6 = document.querySelector("#b6_container");
const b7 = document.querySelector("#b7_container");
const b8 = document.querySelector("#b8_container");
const b9 = document.querySelector("#b9_container");
const b10 = document.querySelector("#b10_container");
const b11 = document.querySelector("#b11_container");

window.addEventListener("load", sidenVises);

// Start alle animationer//

function sidenVises() {
  console.log("sidenVises");
  //få elementerne til at flyve og giv en "random" position og delay
  b1.classList.add("flyv_b1");
  b2.classList.add("flyv_b2");
  b3.classList.add("flyv_b3");
  b4.classList.add("flyv_b4");
  b5.classList.add("flyv_b5");
  b6.classList.add("flyv_b6");
  b7.classList.add("flyv_b7");
  b8.classList.add("flyv_b8");
  b9.classList.add("flyv_b9");
  b10.classList.add("flyv_b10");
  b11.classList.add("flyv_b11");
  //lav en klik funktion til gode elementer
  //goodApple1.addEventListener("mousedown", goodAppleHandler);
  //goodCheese1.addEventListener("mousedown", goodAppleHandler);//
  //genstart efter sidste animation
  b1.addEventListener("animationend", Resetb1);
  b2.addEventListener("animationend", Resetb2);
  b3.addEventListener("animationend", Resetb3);
  b4.addEventListener("animationend", Resetb4);
  b5.addEventListener("animationend", Resetb5);
  b6.addEventListener("animationend", Resetb6);
  b7.addEventListener("animationend", Resetb7);
  b8.addEventListener("animationend", Resetb8);
  b9.addEventListener("animationend", Resetb9);
  b10.addEventListener("animationend", Resetb10);
  b11.addEventListener("animationend", Resetb11);
}

// Genstart alle animationer med delay//

function Resetb1() {
  console.log("Reset");
  //fjern alle classes
  b1.classList = "";
  b1.firstElementChild.classList = "";

  //force-reflow
  b1.offsetLeft;

  b1.classList.add("flyv_b1", "delay");

  //genstart efter sidste animation
  b1.addEventListener("animationiteration", sidenVises);
}
function Resetb2() {
  console.log("Reset");
  //fjern alle classes
  b2.classList = "";
  b2.firstElementChild.classList = "";

  //force-reflow
  b2.offsetLeft;

  b2.classList.add("flyv_b2", "delay");

  //genstart efter sidste animation
  b2.addEventListener("animationiteration", sidenVises);
}
function Resetb3() {
  console.log("Reset");
  //fjern alle classes
  b3.classList = "";
  b3.firstElementChild.classList = "";

  //force-reflow
  b3.offsetLeft;

  b3.classList.add("flyv_b3", "delay");

  //genstart efter sidste animation
  b3.addEventListener("animationiteration", sidenVises);
}
function Resetb4() {
  console.log("Reset");
  //fjern alle classes
  b4.classList = "";
  b4.firstElementChild.classList = "";

  //force-reflow
  b4.offsetLeft;

  b4.classList.add("flyv_b4", "delay");

  //genstart efter sidste animation
  b4.addEventListener("animationiteration", sidenVises);
}
function Resetb5() {
  console.log("Reset");
  //fjern alle classes
  b5.classList = "";
  b5.firstElementChild.classList = "";

  //force-reflow
  b5.offsetLeft;

  b5.classList.add("flyv_b5", "delay");

  //genstart efter sidste animation
  b5.addEventListener("animationiteration", sidenVises);
}
function Resetb6() {
  console.log("Reset");
  //fjern alle classes
  b6.classList = "";
  b6.firstElementChild.classList = "";

  //force-reflow
  b6.offsetLeft;

  b6.classList.add("flyv_b6", "delay");

  //genstart efter sidste animation
  b6.addEventListener("animationiteration", sidenVises);
}
function Resetb7() {
  console.log("Reset");
  //fjern alle classes
  b7.classList = "";
  b7.firstElementChild.classList = "";

  //force-reflow
  b7.offsetLeft;

  b7.classList.add("flyv_b7", "delay");

  //genstart efter sidste animation
  b7.addEventListener("animationiteration", sidenVises);
}
function Resetb8() {
  console.log("Reset");
  //fjern alle classes
  b8.classList = "";
  b8.firstElementChild.classList = "";

  //force-reflow
  b8.offsetLeft;

  b8.classList.add("flyv_b8", "delay");

  //genstart efter sidste animation
  b8.addEventListener("animationiteration", sidenVises);
}
function Resetb9() {
  console.log("Reset");
  //fjern alle classes
  b9.classList = "";
  b9.firstElementChild.classList = "";

  //force-reflow
  b9.offsetLeft;

  b9.classList.add("delay", "flyv_b9");

  //genstart efter sidste animation
  b9.addEventListener("animationiteration", sidenVises);
}
function Resetb10() {
  console.log("Reset");
  //fjern alle classes
  b10.classList = "";
  b10.firstElementChild.classList = "";

  //force-reflow
  b10.offsetLeft;

  b10.classList.add("flyv_b10", "delay");

  //genstart efter sidste animation
  b10.addEventListener("animationiteration", sidenVises);
}
function Resetb11() {
  console.log("Reset");
  //fjern alle classes
  b11.classList = "";
  b11.firstElementChild.classList = "";

  //force-reflow
  b11.offsetLeft;

  b11.classList.add("delay", "flyv_b11");

  //genstart efter sidste animation
  b11.addEventListener("animationiteration", sidenVises);
}
