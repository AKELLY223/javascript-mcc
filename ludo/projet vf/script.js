'use strict';

const joueur0El = document.querySelector('.joueur--0');
const joueur1El = document.querySelector('.joueur--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const actuel0El = document.getElementById('actuel--0');
const actuel1El = document.getElementById('actuel--1');

const deEl = document.querySelector('.de');
const btnNouveau = document.querySelector('.btn--nouveau');
const btnLancer = document.querySelector('.btn--lancer');
const btnGarder = document.querySelector('.btn--garder');

let scores, scoreActuel, joueurActif, enCours;

const initialiser = function () {
  scores = [0, 0];
  scoreActuel = 0;
  joueurActif = 0;
  enCours = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  actuel0El.textContent = 0;
  actuel1El.textContent = 0;

  deEl.classList.add('hidden');
  joueur0El.classList.remove('joueur--gagnant');
  joueur1El.classList.remove('joueur--gagnant');
  joueur0El.classList.add('joueur--actif');
  joueur1El.classList.remove('joueur--actif');
};
initialiser();

const changerJoueur = function () {
  document.getElementById(`actuel--${joueurActif}`).textContent = 0;
  scoreActuel = 0;
  joueurActif = joueurActif === 0 ? 1 : 0;
  joueur0El.classList.toggle('joueur--actif');
  joueur1El.classList.toggle('joueur--actif');
};

btnLancer.addEventListener('click', function () {
  if (enCours) {
    const de = Math.trunc(Math.random() * 6) + 1;
    deEl.classList.remove('hidden');
    deEl.src = `dice-${de}.png`;

    if (de !== 1) {
      scoreActuel += de;
      document.getElementById(`actuel--${joueurActif}`).textContent =
        scoreActuel;
    } else {
      changerJoueur();
    }
  }
});

btnGarder.addEventListener('click', function () {
  if (enCours) {
    scores[joueurActif] += scoreActuel;
    document.getElementById(`score--${joueurActif}`).textContent =
      scores[joueurActif];

    if (scores[joueurActif] >= 100) {
      enCours = false;
      deEl.classList.add('hidden');
      document
        .querySelector(`.joueur--${joueurActif}`)
        .classList.add('joueur--gagnant');
      document
        .querySelector(`.joueur--${joueurActif}`)
        .classList.remove('joueur--actif');
    } else {
      changerJoueur();
    }
  }
});

btnNouveau.addEventListener('click', initialiser);
