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
let meilleurScore = 0;

// console.log(chiffreSecret);
document.querySelector(".verifier").addEventListener("click", function () {
  let proposition = Number(document.querySelector(".proposition").value);
  if (!proposition) {
    document.querySelector(".message").textContent =
      " 🛑Aucune Valeur a deviner";
  } else if (proposition === chiffreSecret) {
    document.querySelector(".chiffre").textContent = chiffreSecret;

    document.querySelector(".message").textContent = "🎉 Nombre deviner";
    document.querySelector(".chiffre").style.width = "30rem";
    document.querySelector("body").style.background = "#222";

    if (score > meilleurScore) {
      meilleurScore = score;
      document.querySelector(".record").textContent = meilleurScore;
    }
  } else if (proposition !== chiffreSecret) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        proposition > chiffreSecret ? "📈 Trop grand" : "📉 Trop petit";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 Vous avez perdu";
      document.querySelector(".score").textContent = 0;
    }

    // }else if (proposition > chiffreSecret) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📈 Trop grand";
    //     // score--;
    //     score = score - 1;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "💥 Vous avez perdu";
    //     document.querySelector(".score").textContent = 0;
    //   }
    // } else if (proposition < chiffreSecret) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📉 Trop petit";

    //     // score--;
    //     score = score - 1;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "💥 Vous avez perdu";
    //     document.querySelector(".score").textContent = 0;
    //   }
  }
});

document.querySelector(".recommencer").addEventListener("click", function () {
  document.querySelector(".chiffre").textContent = "?";
  chiffreSecret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Commence à deviner...";
  document.querySelector(".chiffre").style.width = "10rem";
  document.querySelector("body").style.background =
    "linear-gradient(135deg, #0b8b3c 0%, #f1c40f 50%, #c0392b 100%)";
  document.querySelector(".proposition").value = "";
});
