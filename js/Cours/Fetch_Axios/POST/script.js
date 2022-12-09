// // ======================== Envoyer des donnees avec Fetch ========================

// const url = 'https://lesoublisdelinfo.com/api.php';

// // ---------------------------------------- ancienne methode ----------------------------------------

// // let requete = new XMLHttpRequest();

// // // Get
// // // requete.open('GET', url);
// // // requete.responseType = 'json';
// // // requete.send();

// // // Post
// // requete.open('POST', url);
// // requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// // requete.responseType = 'json';
// // requete.send('prenom=John');

// // requete.onload = function() {
// //   if (requete.readyState === XMLHttpRequest.DONE) {
// //     if (requete.status === 200) {
// //       let reponse = requete.response;
// //       console.log(reponse);
// //     }
// //     else {
// //       alert('Un problème est intervenu, merci de revenir plus tard.');
// //     }
// //   }
// // }
// // -------------------------------------------------------------------------------------------------------

//     // Methode POST
// async function envoyerPrenom(prenom) {
//     const requete = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//             // 'Content-Type : 'application/json'
//         },
//         body: new URLSearchParams({
//             prenom
//         })
//     });

//     if(!requete.ok){
//         alert('un probleme est survenue')
//     } else {
//         const donnees = await requete.json();
//         console.log(donnees);        
//     }
// }
// envoyerPrenom('Julien');

    




