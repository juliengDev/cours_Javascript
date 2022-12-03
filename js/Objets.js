// let chien = {
// race: 'Shiba', // Ceci est une propriete (clef : valeur)
// poil: 'Court',
// aboyer: () => console.log('waf waf') // Ceci est une methode (fonction flechee)
// }

// console.log(chien.poil)
// chien.aboyer();


// =============== l'objet Set ===============

// Permet de stocker des valeurs uniques de tout type. 
// Il s'agit d'une sécurité comparé à un simple tableau. 
// Je vous recommande d'utiliser cet objet lorsque vous voulez stocker des informations 
// sensibles qui ne doivent pas être dupliquées. L'exécution d'un objet Set est également 
// plus rapide qu'un objet Array (donc qu'un tableau), même si sur de petits tableaux, 
// cela ne se remarque pas. Les valeurs ne peuvent pas etre dupliquer a l'interieur


// let nombres = [10,45,75,10,24,45];
// let monSet = new Set(nombres)

// let monSet = new Set(); // Cree un objet vide
// console.log(monSet);
// monSet.add('70'); // Ajout des donnees au Set
// monSet.add(87);
// monSet.delete(87); // Supprime des donnees du Set
// console.log(monSet.size) // Affiche le nombre d'element contenu dans le Set
// console.log(monSet);


// =============== l'objet Map ===============

// Offre une flexibilité supplémentaire en comparaison de l'objet Map.
// Il n'accepte que des objets en clé. On utilise souvent cet objet pour stocker des données.
// Une fois que l'objet en clé n'existe plus (par exemple, si sa valeur passe à null),
// la valeur est automatiquement supprimée également.
// cree un objet sous forme de pair clef/valeur
// let monMap = new Map([
//     ['prenom', 'Mark'],
//     ['nom', 'Zukerberg']
// ])
// console.log(monMap);
// monMap.set('poste', 'CEO de Facebook'); // Ajoute une propriete au Map
// console.log(monMap);
// monMap.delete('poste') // Supprime une propriete au Map
// console.log(monMap)

// On utilise map quand on doit ajouter des elements complets

// let utilisateurs = new Map();

// utilisateurs.set('Mark Zuckerberg', {
//     email: 'mark@facebook.com',
//     poste: 'PDG'
// });

// utilisateurs.set('Bill Gates', {
//     email: 'bill@microsoft.com',
//     poste: 'CEO microsoft'
// })
// console.log(utilisateurs)


// =============== l'objet WeakSet ===============

// Offre une flexibilité supplémentaire en comparaison de l'objet Set.
// Il n'accepte que des objets.
// Une fois que l'objet stocké dans le WeakSet passe à null,
// il est automatiquement retiré.


// let voitures = new WeakSet(); // ne peut contenir que des objets

// let voitureA = {
//     constructeur: 'Tesla',
//     modele: 'Cybertuck'
// }

// let voitureB = {
//     constructeur: 'Renault',
//     modele: 'Espace'
// }
// voitures.add(voitureA); // Ajoute un objet au WeakSet
// voitures.add(voitureB)
// console.log(voitures)

// voitures.delete(voitureA) // supprime un objet au WeakSet

// let voituresNew = new WeakSet([voitureA, voitureB]) // permet d'ajouter plusieurs objet a la declaration du WeakSet
// console.log(voituresNew)


// =============== l'objet WeakMap ===============

// Offre une flexibilité supplémentaire en comparaison de l'objet Map.  
// Il n'accepte que des objets en clé. On utilise souvent cet objet pour stocker des données. 
// Une fois que l'objet en clé n'existe plus 
// (par exemple, si sa valeur passe à null), 
// la valeur est automatiquement supprimée également.
// Il va prendre une pair clef/valeur


// let voitures = new WeakMap();

// let index = {
//     id: 1
// }
// let voitureA = {
//     constructeur: 'Tesla',
//     modele: 'Cybertruck'
// }

// voitures.set(index, '5')
// console.log(voitures)
// voitures.set(index, voitureA) // ajout une propriete (clef, valeur) au WeakMap
// console.log(voitures)
// voitures.delete(index) // supprime une propriete au WeakMap
// console.log(voitures)