const petitIphones = document.querySelectorAll(".petitIphone");
const phone = document.querySelector(".phone");
const globalSection = document.querySelector(".global");
const header = document.querySelector("header");
for (let i = 0; i < petitIphones.length; i++) {
  petitIphones[i].addEventListener("click", function () {
    const color = petitIphones[i].getAttribute("data-color");
    phone.src = petitIphones[i].src;
    globalSection.style.backgroundColor = color;
    header.style.backgroundColor = color;
  });
}
