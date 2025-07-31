const btnPlus = document.querySelector(".plus");
const btnMoins = document.querySelector(".moins");
const infos = document.querySelector(".infos");

const texte = document.querySelector(".txt-taille");
let ajoute = 0;
let taille = 14;
btnPlus.addEventListener("click", function () {
  ajoute++;
  texte.style.fontSize = `${taille + ajoute}px`;
  infos.textContent = `Taille de la police : ${taille + ajoute}px`;
});
