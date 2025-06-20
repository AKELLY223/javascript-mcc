//alert("Hello, world!");
/*
let message = "Bienvenu chez Mali_Code";
console.log(10 + 5 + 5 + 5 + 5);
console.log(message);

let name = "Mali_Code Center";
let age = 22;
let date = "15/05/2025";
let isTrue = true;

console.log(name);
console.log(age);
console.log(name);
console.log(date);
console.log(isTrue);

name = "Kelly";

console.log(name);

let pi = 3.14;

console.log(pi);

pi = 55;

console.log(pi);

*/

// "Mali_Code";
// 22;
// 15/05/2025
// true;

// console.log("Mali_Code");
// console.log(22);
/*
Une variable est un espace de stockage qui a un nom et une valeur.
*/

// let job = "Développeur Web";
// let job2 = "Professeur de js";

// let ancienTravail = "Developpeur Web";
// let actuel_travail = "Professeur de js";

// Les opérateurs arithmétiques sont: +, -, *, /, %, ++, --
// Les opérateurs de comparaison sont: ==, ===, !=, !==, >, <, >=, <=

// let a = 10;
// let b;

// b = 15;

// console.log(b);
// console.log(a);

// console.log(a + b);

// let c = a + b;

// console.log(c);

// let tomates = 300;
// let oranges = 105;
// let totalAddition = tomates + oranges;

// console.log(totalAddition);

// let totalSoustraction = tomates - oranges;
// console.log(totalSoustraction);

// let totalMultiplication = tomates * oranges;
// // console.log("Le produit de vos articles :");
// // console.log(totalMultiplication);
// console.log("Le produit de vos articles : " + totalMultiplication + " FCFA");

// let nombre1 = 15;
// let nombre2 = 4;
// let modulo = nombre1 % nombre2;
// console.log(modulo);

// const nom = "Mali_Code";
// const adresse = "Sabalibougou";
// const age = 3;
// const maliCodePresentation =
//   "Je suis " + nom + " nous somme à " + adresse + " j'ai " + age + " ans";
// console.log(maliCodePresentation);

// const maliCodePresentationAvecTemplateLiterals = `je suis ${nom} nous sommes à ${adresse} j'ai ${age} ans`;

// console.log(maliCodePresentationAvecTemplateLiterals);

// let temperature = 10;
// if (temperature > 30) {
//   console.log("il fait chaud");
// } else if (temperature > 20) {
//   console.log("il fait bon ");
// } else {
//   console.log("il fait froid");
// }

// let a = 5;
// let b = "5";
// pour comparer la valeur
// console.log(a == b);
// pour comparer la valeur et le type
// console.log(a === b);
// console.log(typeof a);
// console.log(typeof b);

// l'operateur de comparaison différent de !=

// console.log(a != b);
// pour comparer la valeur et le type
// console.log(a !== b);

// let age = 22;
// if (age < 18) {
//   console.log("Tu es encore mineur");
// } else {
//   console.log("Tu peux voter !");
// }

// && ||

// let age = 16;
// let aUneCarteInvitation = false;

// if (age >= 18 || aUneCarteInvitation) {
//   console.log("Tu peux entrer 😊😊😊");
// } else {
//   console.log("Désolé, tu ne peux pas entrer🛑🛑🛑🛑");
// }

// let aFaim = false;
// let estFatigue = true;
// if (aFaim || estFatigue) {
//   console.log("Tu devrais faire une pause");
// }

// let estConnecte = false;
// if (estConnecte) {
//   console.log("en connexion...");
// } else {
//   console.log("Veillez vous connectez.");
// }
// if (!estConnecte) {
//   console.log("Veillez vous connectez.");
// }

// conversion et coersion en js

// let anneeNaissance = "1998";
// console.log(typeof anneeNaissance);
// console.log(typeof 1998, 1998);
// console.log(anneeNaissance + 18);

// console.log(Number(anneeNaissance));
// console.log(typeof anneeNaissance);

// let anneeNaissanceConverti = Number(anneeNaissance);
// console.log(anneeNaissanceConverti);
// console.log(anneeNaissanceConverti + 18);
// console.log(anneeNaissance + 18);
// let age = 18;
// console.log(typeof age);

// let ageConvertis = String(age);
// console.log(ageConvertis);

// console.log(age, ageConvertis);

// let name = "Mali_Code";
// console.log(Number(name));

// console.log(typeof NaN);

// console.log("j'ai " + 3 + " ans");

// console.log("10" - "5" - 2);

// console.log("2" * "3");
// console.log("6" / "3");

// let nombre = "15" + 5; //155
// nombre = nombre - 10; //155-10
// console.log(nombre);

// les valeurs fausses:
/*
0 : zéro
'' : La chaine vide
null : null
undefined : la variable non défini
NaN : Not a Number
false

*/

// Les fausses values
// console.log("Les valeurs qui sont fausse après conversions en boolean");
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(false));

// Exepté ces 6 valeurs tous les autres sont par défaut vrai

// console.log("Les valeurs par défaut vrai truthy values");

// console.log(Boolean(-1));
// console.log(Boolean("Mali_Code"));

// let argent = 10;
// if (argent) {
//   console.log("Il ne faut pas tout depensé");
// } else {
//   console.log("Il te faut du travail");
// }

// let nom = "Mali_Code";
// if (nom) {
//   console.log("La variable nom a été défini");
// } else {
//   console.log("La variable nom n'a pas été défini");
// }

// let jour = prompt("entrer le jour");

// if (jour === "lundi") {
//   console.log("faire une vidéo js");
//   console.log("monter la vidéo");
// } else if (jour === "mardi") {
//   console.log("aller à l'école");
//   console.log("jouer");
// } else if (jour === "mercredi") {
//   console.log("MERCREDI");
// } else if (jour === "jeudi") {
//   console.log("JEUDI");
// } else if (jour === "vendredi") {
//   console.log("VENDREDI");
// } else {
//   console.log("entrer un jour valide");
// }

// let jour = "lundi";
// switch (jour) {
//   case "lundi":
//     console.log("faire une vidéo js");
//     console.log("monter la vidéo");
//     break;
//   case "mardi":
//     console.log("aller à l'école");
//     console.log("jouer");
//     break;
//   case "mercredi":
//   case "jeudi":
//     console.log("je fais meme activite mercredi et jeudi");
//     break;
//   case "vendredi":
//     console.log("just le vendredi");
//     break;
//   default:
//     console.log("Veuillez entrer un jour valide entre le lundi et le vendredi");
// }

// 8+5
// 9*2

// 'Mali_Code'
// true or false and true or !true

// let nom = "Mali_Code";

// console.log(`j'ai ${2025 - 1960} ans et je suis ${nom}`);
// console.log(`j'ai ${2025 - 1960} ans ${if(age>50){
//     let femme = "Femme"
// }}`);

// const age = 19;
// if (age >= 18) {
//   console.log("MAJEUR");
// } else {
//   console.log("MINEUR");
// }

// console.log(age >= 18 ? console.log("MAJEUR") : console.log("MINEUR"));

// console.log(`j'ai ${age} ans donc je suis ${age >= 18 ? "MAJEUR" : "MINEUR"}`);
