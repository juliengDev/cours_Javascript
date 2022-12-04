// ==================================== DOCUMENT OBJECT MODEL ====================================


// ================== Acceder a des elements du DOM ==================


// ********** Acceder aux elements du DOM **********

// let header = document.getElementsByTagName('header'); // Selectionne par nom de balise
// let logo = document.getElementById('logo'); // Selectionne par id
// let container = document.getElementsByClassName('container') // Selectionne par classe
// let h1 = document.querySelector('.container > h1') // Selectionne par operateur css
// let p = document.querySelectorAll('p') // Selectionne tous les elements par operateur css

// ********** Modifier les elements du DOM (textContent, innerHTML) **********



// let h1 = document.querySelector('.container > h1');
// h1.textContent = "Hello world" // modifie le texte de la balise h1
// h1.innerHTML = "<div style='font-weight: normal'>Hello World</div>" // modifie le code html



// ********** Ajout des elements du DOM  (append, prepend, insertBefore) **********

// 1ere methode : Ecrit juste un texte

// document.write('test'); // Ecrit juste du texte a la fin du body

// 2me methode : Ajoute un element brut
// let h1 = document.querySelector('.container > h1');
// h1.append('test') // ajoute du texte a la suite de l'element selectionner

// 3me methode (celle pour les objets)

// Creer un element
// let helloWorld = document.createElement('div');

// Le personnnaliser

// helloWorld.textContent = 'Hello World !';

// L'ajouter a notre page
// document.body.append(helloWorld) // Se positionne a la fin du body
// document.body.appendChild(helloWorld) // Nb : on ne peut pas passer du texte avec cette methode

// document.body.insertBefore(helloWorld, document.querySelector('.container')) // insert avant un element html
// document.querySelector('.container').prepend(helloWorld) // insert avant un element html


// ********** Supprimer des elements du DOM **********

// let h1 = document.querySelector('h1')
// h1.remove() // supprime l'element


// ********** Procedure pour changer un element **********

// 1. selectionner l'element
// 2. selectionner une proprieter pour modifier le code css de l'element
// 3. assigner une valeur a la nouvelle propriete

// ********** Modifier le style d'un element **********

// 1ere methode (methode decomposee):

// let header = document.querySelector('header');
// header.style.backgroundColor = '#ffbd69'


// 2me methode
// document.querySelector('h1').style.color = "#111d5e";
// document.querySelector('h1').style.textAlign = "center";

// 3me methode : avec une classe

// document.querySelector('h1').className = 'title'
// document.querySelector('header').className = 'ma_class'






