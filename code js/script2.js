// function direBonjourMaliCode() {
//   console.log("Hello Mali_Code");
// }

// direBonjourMaliCode();

// function machineAFruit(oranges, pommes) {
//   console.log(oranges, pommes);
//   let jus = `Voici votre jus composé de ${oranges} oranges et ${pommes} pommes`;
//   return jus;
// }

// let monJus = machineAFruit(15, 5);
// console.log(monJus);

// let monOrange = machineAFruit(20, 0);
// console.log(monOrange);
// let monJusPommes = machineAFruit(0, 10);
// console.log(monJusPommes);

// function declaration
// function calculeMonAge(anneeNaissance) {
//   let anneEnCours = 2025;
//   let age = anneEnCours - anneeNaissance;
//   return age;
// }
// let age1 = calculeMonAge(2009);

// console.log(age1);

// // function expression

// let calculeMonAge2 = function (anneeNaissance) {
//   return 2025 - anneeNaissance;
// };

// let age2 = calculeMonAge2(1990);
// console.log(age2);

//////////////////////////////////////////////////////////////////

// let calculeMonAge3 = (anneeNaissance) => 2025 - anneeNaissance;
// console.log(calculeMonAge3(2000));

// let ageAvantRetraite = (anneeNaissance, nom) => {
//   let age = 2025 - anneeNaissance;
//   let retraite = 65 - age;
//   // return retraite;
//   return `${nom} ira en retraite dans ${retraite} ans`;
// };

// console.log(ageAvantRetraite(2000, "moussa"));

///////////////////////////////////////////////////////////////////////
// let amis1 = "Moussa";
// let amis2 = "Mamadou";
// let amis3 = "Aissatou";

// let amis = ["Moussa", "Mamadou", "Aissatou", "Fatou"];

// amis[2] = "Aly";
// console.log(amis);
// // console.log(amis);
// console.log(amis[0]);
// console.log(amis[1]);
// console.log(amis[2]);
// console.log(amis[3]);

// let tableauAnneesNaissance = new Array(2000, 1995, 1998, 2002, 2001);

// // console.log(tableauAnneesNaissance);
// console.log(tableauAnneesNaissance.length);

// let kellyTableau = [
//   "Kelly",
//   "Mali_Code",
//   2025 - 1995,
//   "Mali_Code est un développeur web",
// ];
// console.log(kellyTableau);

// console.log(amis);
// let nouvelleTaille = amis.push("Aly");
// console.log(nouvelleTaille);
// console.log(amis);

// let nouvelleTaille2 = amis.unshift("Binta");
// // console.log(nouvelleTaille2);
// console.log(amis);

// let elementSupprime = amis.pop();
// console.log(elementSupprime);
// console.log(amis);

// let elementSupprime2 = amis.shift();
// console.log(elementSupprime2);
// console.log(amis);

// let amis = ["Moussa", "Mamadou", "Aissatou", "Fatou", 25];
// // console.log(amis);
// // console.log(amis.indexOf("Fatou")); // 1
// console.log(amis.includes("25")); // true
// ===

// let kellyTableau = [
//   "Kelly",
//   "Mali_Code",
//   2025 - 1995,
//   "Mali_Code est un développeur web",
// ];
// kellyTableau[4]= "Mali";

// let kellyObjet = {
//   nom: "KELLY",
//   prenom: "Abdoulaye",
//   profession: "Professeur",
//   age: 2025 - 1995,
//   amis: ["Moussa", "Awa", "Fatou"],
// };

// kellyObjet.numero = 91755437;
// console.log(kellyObjet);

// Kelly a 3 amis et son meilleur amis est Awa

// console.log(
//   `${kellyObjet.nom} a ${kellyObjet.amis.length} et son meilleur amis est ${kellyObjet.amis[1]}`
// );

// console.log(kellyObjet.profession);
// Affichage via le point
// console.log(kellyObjet.amis);

// // Affichage via les accolades
// console.log(kellyObjet["nom"]);

// let interesseePar = prompt(
//   "que ameriez vous savoir es : le nom, prenom, age, profession, amis"
// );

// console.log(interesseePar);

// if (kellyObjet[interesseePar]) {
//   console.log(kellyObjet[interesseePar]);
// } else {
//   alert("on a dit de choisir entre nom, prenom, professionj, age, amis");
// }

let kellyObjet = {
  nom: "KELLY",
  prenom: "Abdoulaye",
  numero: 91755437,
  aUnPermisDeConduire: true,
  profession: "Professeur",
  anneeNaissance: 1995,
  amis: ["Moussa", "Awa", "Fatou"],
  calculeAge: function () {
    return 2025 - this.anneeNaissance;
  },
  monResumee: function () {
    return `${this.nom} ${this.prenom} est un ${this.profession} né en ${
      this.anneeNaissance
    }.Il a ${this.calculeAge()} et aime code.Il a ${
      this.amis.length
    } amis et son meilleur amis est ${this.amis[0]}.Il ${
      this.aUnPermisDeConduire
        ? "a un permis de conduire "
        : "n'a pas de permis de conduire"
    }`;
  },
};

console.log(kellyObjet.monResumee());
// KELLY Abdoulaye est un professeur né en 1995. il a 30 ans et aime code. Il a 3 amis, dont son meilleur amis est Moussa.Il a/n'a pas de un permis de conduire
