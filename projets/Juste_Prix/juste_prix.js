// // Etape 1 - Sélectionner nos éléments

// let input = document.getElementById('prix');
// let error = document.querySelector('.text-danger');
// let formulaire = document.getElementById('formulaire');
// let nombreChoisi;

// // Etape 2 - Cacher l'erreur

// error.style.display = 'none';

// // Etape 3 - Générer un nombre aléatoire

// let nombreAleatoire = Math.floor(Math.random() * Math.floor(1001));
// let coups          = 0;
// // Etape 4 - Créer la fonction vérifier

// function verifier(nombre) {

//     let instruction  = document.createElement('div');
//     if (nombre < nombreAleatoire) {
//         // Ajouter un contenu : '#1 (4) C'est plus !' 
//         // Ajouter les classes instruction et plus
//         instruction.textContent = '#' + coups + '(' + nombre + ')' + ' C\' est plus !'
//         instruction.className = 'instruction plus'

//     }else if(nombre > nombreAleatoire){
//         // Ajouter un contenu : '#1 (4) C'est moins !' 
//         // Ajouter les classes instruction et moins
//         instruction.textContent = '#' + coups + '(' + nombre + ')' + ' C\' est moins !'
//         instruction.className = 'instruction moins'

//     }else {
//             // Afficher : Felicitation ! Vous avez trouver le juste prix.
//             // Ajouter un contenu '#1 (4 )Felicitation ! Vous avez trouver le juste prix.
//             // Ajouter les classes instruction et fini
//         instruction.textContent = '#' + coups + '(' + nombre + ')' + ' Felicitation ! Vous avez trouver le juste prix.'
//         instruction.className = 'instruction fini';
//         input.disabled = true; 
        
//         }
//         document.body.append(instruction)
//     }

// // Etape 5 - Vérifier que l'utilisateur donne bien un nombre

// input.addEventListener('keyup', () => {
//     if(isNaN(input.value)) {
//         //Afficher le message
//         error.style.display = 'block';
//     }else{
//         //Cacher le message
//         error.style.display = 'none';
//     }
// })

// // Etape 6 - Agir à l'envoi du formulaire

// formulaire.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if(isNaN(input.value) || input.value == ''){
//         input.style.borderColor = 'red';
//     }else{
//         coups++
//         input.style.borderColor = 'silver';
//         nombreChoisi = input.value;
//         input.value = '';
//         verifier(nombreChoisi)
//     }
// })

