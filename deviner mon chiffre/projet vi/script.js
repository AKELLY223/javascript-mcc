/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Nombre deviner";
console.log(document.querySelector(".message").textContent);

document.querySelector(".score").textContent = 30;
document.querySelector(".record").textContent = 30;

document.querySelector(".proposition").value = 15;
console.log(document.querySelector(".proposition").value);
*/
let chiffreSecret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(chiffreSecret);

document.querySelector(".verifier").addEventListener("click", function () {
  let proposition = Number(document.querySelector(".proposition").value);
  if (!proposition) {
    document.querySelector(".message").textContent =
      " 🛑Aucune Valeur a deviner";
  } else if (proposition === chiffreSecret) {
    document.querySelector(".message").textContent = " 🎉Nombre deviner";
    document.querySelector(".chiffre").textContent = chiffreSecret;
  } else if (proposition > chiffreSecret) {
    document.querySelector(".message").textContent = " 🎉Nombre trop grand";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (proposition < chiffreSecret) {
    document.querySelector(".message").textContent = " 🎉Nombre trop petit";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
});
