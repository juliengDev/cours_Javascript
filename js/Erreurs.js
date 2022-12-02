// try {
//     // Error ?
//     alert(toto); 
// } 
// catch(error) {
//     // Error !
//     console.log("La variable toto n'existe pas !");
//     console.log(error.stack);
// }


// try {
//     // Erreur ?
//     let recompense = prompt("Choisissez une récompense : épée, arc, haches");
//     let degats;
    
//     switch(recompense) {
//       case 'épée':
//         degats = 40;
//         break;
//       case 'arc':
//         degats = 30;
//         break;
//       case'haches':
//         degats = 20;
//         break;
//       default:
//         throw new Error('Vous ne pouvez pas tricher.'); // Ceci est une exception
//     }
    
//     alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
//   }
//   catch(error) {
//     // Erreur !
//     alert(error);
//   }
//   finally {
//     alert('Fin du programme');
//   }