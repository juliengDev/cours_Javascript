// ================== Cree un tableau ==================
// let monTableauTresAncien = new Array(1,'deux',false);
// let monTableauAncien = Array(1,'deux',false);

// let monTableau = ['un', 2, false]; // Version a utiliser
// console.log(monTableau[1]) // Affiche 2
// console.log(monTableau[monTableau.length - 1]) // Affiche le dernier element du tableau
// console.log(monTableau.indexOf(false)) // Affiche 2
// console.log(monTableau.indexOf('un')) // Affiche 0

// ================== Cree un tableau a plusieurs dimension ==================

// let monTableau2dAncien = new Array(
//     Array('Mark','Jeff','Bill'),
//     Array('Zuckerberg','Bezos','Gates')
// );

// let monTableau2d = [ // Version a utiliser
//     ['Mark','Jeff','Bill'],
//     ['Zuckerberg','Bezos','Gates']
// ];

// console.log(monTableau2d.length); // Affiche 2, le nombre d'element de mon tableau
// console.log(monTableau2d[0][0]) // Affiche Mark
// console.log(monTableau2d[1][2]) // Affiche Gates

// ================== Cree un tableau associatif ==================

// let monTableauAssociatif = {

//     'prenom' : 'Mark',
//     'nom'    : 'Zuckerberg',
//     'poste'  : 'CEO de Facebook'
// };

// console.log(monTableauAssociatif['prenom']) // Affiche Mark
// console.log(monTableauAssociatif["nom"]) // Affiche Zuckerberg
// console.log(monTableauAssociatif.prenom); // Affiche Mark
// console.log(monTableauAssociatif.poste); // Affiche CEO de Facebook


// ================== Les methodes ==================

// Ajouter des elements a la fin des tableaux avec push()

// let monTableau2 = [1,2,3,4,5]
// monTableau2.push(6) // Permet d'ajouter un element a la fin du tableau
// console.log(monTableau2) // Affiche [1,2,3,4,5,6]

// let monSecondTableau2d = [
//     ['Mark','Jeff','Bill'],
//     ['Zuckerberg','Bezos','Gates']
// ]
// monSecondTableau2d[0].push('Elon') // ['Mark', 'Jeff', 'Bill', 'Elon']
// monSecondTableau2d[1].push('Musk') // ['Zuckerberg', 'Bezos', 'Gates', 'Musk']



// Ajouter un element au debut du tableau avec unshift()

// let monTableau2 = [1,2,3,4,5]
// monTableau2.unshift(0); // Permet d'ajouter un element au debut du tableau
// console.log(monTableau2) // Affiche [0, 1, 2, 3, 4, 5]

// Ajouter un element a la fin d'un tableau associatif

// let monTableauAssociatif2 = {
//     'prenom' : 'Mark',
//     'nom'    : 'Zuckerberg',
//     'poste'  : 'CEO de Facebook'
// }
// monTableauAssociatif2['nationalite'] = 'Americaine';
// console.log(monTableauAssociatif2) // {prenom: 'Mark', nom: 'Zuckerberg', poste: 'CEO de Facebook', nationalite: 'Americaine'}

// Supprimer des elements a la fin des tableaux avec pop() et shift()

// let monTableau2 = [1,2,3,4,5]
// monTableau2.pop() // Permet de supprimer le dernier element du tableau
// console.log(monTableau2) // Affiche [1,2,3,4]

// let monSecondTableau2d = [
//         ['Mark','Jeff','Bill'],
//         ['Zuckerberg','Bezos','Gates']
//     ]
//     monSecondTableau2d[0].shift() // Permet de supprimer le premier element du tableau
//     console.log(monSecondTableau2d); // ['Jeff', 'Bill']

// Supprimer un element d'un tableau associatif

// let monTableauAssociatif2 = {
//     'prenom' : 'Mark',
//     'nom'    : 'Zuckerberg',
//     'poste'  : 'CEO de Facebook'
// }
// delete(monTableauAssociatif2.poste) // Supprime la propriete du tableau
// console.log(monTableauAssociatif2) // Affiche {prenom: 'Mark', nom: 'Zuckerberg'}


// Concatener pour afficher avec join()

// let monTableau = ['un', 2, false]
// console.log(monTableau.join('/')) // Affiche un string avec un/2/false
// console.log(monTableau.join('-')) // Affiche un string avec un-2-false

// let monSecondTableau2d = [
//         ['Mark','Jeff','Bill'],
//         ['Zuckerberg','Bezos','Gates']
//     ]
// console.log(monSecondTableau2d.join(' - ')) // Affiche Mark,Jeff,Bill - Zuckerberg,Bezos,Gates
// console.log(monSecondTableau2d[0].join(' - ')) // Affiche Mark - Jeff - Bill

// La methode ultime pour ajouter, remplacer et supprimer des elements splice()

// let monTableau = ['un', 2, false]
// monTableau.splice(0, 2) // Supprimer les elements de l'index 0 a l'index 2
// console.log(monTableau) // Affiche [false]
// monTableau.splice(0, 0, 'item1', 'item2') // Ajoute les elements inscrit a partir de l'index 0 
// console.log(monTableau); // Affiche ['item1', 'item2', 'un', 2, false]
// monTableau.splice(1, 0, 'item1', 'item2')
// console.log(monTableau); // Affiche ['un', 'item1', 'item2', 2, false]

// let monSecondTableau2d = [
//         ['Mark','Jeff','Bill'],
//         ['Zuckerberg','Bezos','Gates']
//     ]

//  monSecondTableau2d.splice(2,0,['Facebook','Amazon','Microsoft']); // Ajoute un tableau a l index 2
//  console.log(monSecondTableau2d) // Affiche ['Facebook','Amazon','Microsoft'] a l'index 2


// ==================Concatener une tableau associatif ==================


// let monTableauAssociatif2 = {
//     'prenom' : 'Mark',
//     'nom'    : 'Zuckerberg',
//     'poste'  : 'CEO de Facebook'
// }

// function concatener(tableau) {
// let chaine= '';
// for (const valeur in tableau) {

//     chaine += (valeur + ' : ' + tableau[valeur] + '\n')
//     };
//     console.log(chaine)
// }
// concatener(monTableauAssociatif2)
