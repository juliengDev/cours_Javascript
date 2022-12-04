// // =========== Les evenements (on...) ===========

// *** Méthode la plus ancienne ***
// Déconseillé car vieillissante
// On insère un attribut HTML lié à l'évènement qu'on veut capturer
// onClick, onMouseOver, onMouseOut

// <a onclick="return confirm('Etes-vous sûr de vouloir supprimer cet article ?')" href="https://believemy.com">Supprimer cet article</a>

// <button onmouseover="document.body.style.backgroundColor='orange'"
//         onmouseout="document.body.style.backgroundColor='white'">Passez au-dessus de moi</button>


// *** Deuxieme Methode ***
// let a = document.querySelector('a');
// let button = document.querySelector('button')

// a.onclick =  () => {
// if(confirm('Etes-vous sur ?')){
//     location.href="https://www.google.com"
// }}

// button.onmouseover = () => {
//     document.body.style.backgroundColor='orange';
// }
// button.onmouseout = () => {
//     document.body.style.backgroundColor='white';
// }

// *** Methode a utiliser ***

// a.addEventListener('click', () => {
//     if(confirm('Etes-vous sur ?')){
//             location.href="https://www.google.com"
//         }
// })

// function backgroundWhite() {
//     document.body.style.backgroundColor='white';
// }

// button.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor='orange';
// })

// button.addEventListener('mouseout', backgroundWhite)
// button.addEventListener('mouseout', () => {
//     document.body.style.fontSize= '1.5em';
// })

// button.removeEventListener('mouseout', backgroundWhite) // Supprimer un event listener (evenement, fonction)

// ******* Les écouteurs "on" et les propriétés JavaScript  *******

// onfocus - Quand l'utilisateur sélectionne l'élément

// onchange - Quand l'utilisateur change la valeur de l'élément

// onclick - Quand l'utilisateur clique sur l'élément

// ondblclick - Quand l'utilisateur double-clique sur l'élément

// onkeypress - Quand l'utilisateur appuie sur une touche du clavier dans l'élément


// ******* Les évènements avec addEventListener *******

// click - Quand l'utilisateur clique sur l'élément

// mouseover - Quand l'utilisateur passe avec sa souris au-dessus d'un élément

// mouseout - Quand l'utilisateur sort avec sa souris d'un élément

// copy - Quand l'utilisateur copie un élément

// cut - Quand l'utilisateur coupe un élément

// paste - Quand l'utilisateur colle un élément


// =========== Gerer la propagation des evenements et stopPropagation ===========

// let article = document.querySelector('article');
// let h1      = document.querySelector('h1');

// article.addEventListener('click', () => {
//   alert('article cliqué');
// });

// h1.addEventListener('click', (e) => {
//   alert('titre cliqué');
//   e.stopPropagation(); // On stop la propagation
// });

// =========== Planifier l'execution d'un script (setTimeout, setInterval) ===========


// setTimeout

// let timer = setTimeout("console.log('Bonjour')",3000)
// clearTimeout(timer); 

// setinterval
// let interval = setInterval("alert('Bonjour')", 5000)
// clearInterval(interval);