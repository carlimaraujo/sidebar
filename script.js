const classClosed = document.querySelectorAll(".closed");
const arrayClassClosed = Array.from(classClosed);
const aside = document.querySelector("aside");
const input = document.querySelector("input");
console.log(aside);
console.log(arrayClassClosed);

function closed() {
  arrayClassClosed.forEach((item) => {
    if (item.style.display === "none") {
      item.removeAttribute("style", "display: none");
    } else {
      item.style.display = "none";
    }
  });

  aside.classList.toggle("animated");

  input.classList.toggle("inputTransition");
}

// const classClosed = document.querySelectorAll(".closed");
// const arrayClassClosed = Array.from(classClosed);
// console.log(arrayClassClosed);

// function closed() {
//   arrayClassClosed.forEach((item) => {
//     if (item.hidden === true) {
//       item.hidden = false;
//     } else {
//       item.hidden = true;
//     }
//   });
// }
