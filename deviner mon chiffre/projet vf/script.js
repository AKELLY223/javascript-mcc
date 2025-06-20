let chiffreSecret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let record = 0;

const afficherMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.verifier').addEventListener('click', function () {
  const proposition = Number(document.querySelector('.proposition').value);

  if (!proposition) {
    afficherMessage('⛔️ Aucun chiffre saisi !');
  } else if (proposition === chiffreSecret) {
    afficherMessage('🎉 Bravo ! Chiffre correct !');
    document.querySelector('.chiffre').textContent = chiffreSecret;

    // Ambiance victoire : vert intense
    document.body.style.backgroundColor = '#0b8b3c';
    document.querySelector('.chiffre').style.width = '30rem';

    if (score > record) {
      record = score;
      document.querySelector('.record').textContent = record;
    }
  } else if (proposition !== chiffreSecret) {
    if (score > 1) {
      afficherMessage(
        proposition > chiffreSecret ? '📈 Trop grand !' : '📉 Trop petit !'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      afficherMessage('💥 Vous avez perdu !');
      document.querySelector('.score').textContent = 0;
      // Couleur rouge pour l’échec
      document.body.style.backgroundColor = '#c0392b';
    }
  }
});

document.querySelector('.recommencer').addEventListener('click', function () {
  score = 20;
  chiffreSecret = Math.trunc(Math.random() * 20) + 1;

  afficherMessage('Commence à deviner...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.chiffre').textContent = '?';
  document.querySelector('.proposition').value = '';

  // Retour à la couleur or pour redémarrer
  document.body.style.backgroundColor = '#f1c40f';
  document.querySelector('.chiffre').style.width = '14rem';
});
