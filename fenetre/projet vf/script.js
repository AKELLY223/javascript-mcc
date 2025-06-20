'use strict';

const modale = document.querySelector('.modale');
const voile = document.querySelector('.voile');
const btnFermer = document.querySelector('.fermer-modale');
const boutonsAfficher = document.querySelectorAll('.afficher-modale');

const ouvrirModale = function () {
  modale.classList.remove('cachee');
  voile.classList.remove('cachee');
};

const fermerModale = function () {
  modale.classList.add('cachee');
  voile.classList.add('cachee');
};

boutonsAfficher.forEach(btn => btn.addEventListener('click', ouvrirModale));
btnFermer.addEventListener('click', fermerModale);
voile.addEventListener('click', fermerModale);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modale.classList.contains('cachee')) {
    fermerModale();
  }
});
