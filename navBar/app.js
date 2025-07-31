const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".burger");
const items = document.querySelectorAll(".navigation li");

burger.addEventListener("click", function () {
  navigation.classList.toggle("active");
  burger.classList.toggle("active");
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    navigation.classList.remove("active");
  });
}
