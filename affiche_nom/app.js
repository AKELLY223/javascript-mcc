const h1 = document.querySelector("h1");
const nom = document.getElementById("nom");
const btnSoumettre = document.querySelector(".valider");

btnSoumettre.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("cliqueee");
  h1.innerText = `Bienvenue ${nom.value}`;
});
