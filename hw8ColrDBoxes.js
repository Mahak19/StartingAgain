// document.getElementsByClassName("box")[0].style.backgroundColor = "pink";
// document.getElementsByClassName("box")[0].style.color = "purple";
// document.getElementsByClassName("box")[0].style.border = "2px solid purple";

const box = document.querySelectorAll(".box");

// const randoms = () => {
//     return`rgb(${Math.floor(Math.random() * 256)}, 
//     ${Math.floor(Math.random() * 256)}, 
//     ${Math.floor(Math.random() * 256)} )`;
// };

const randm = () => Math.floor(Math.random() * 256);
const randmColor = () => `rgb(${randm()}, ${randm()}, ${randm()})`;

box.forEach(element => {
element.style.backgroundColor = randmColor();
element.style.borderColor = randmColor();
// element.style.color = randoms();
});