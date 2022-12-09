// const url = 'https://blockchain.info/ticker';

// // Creer une requete

// function recupererPrix() {
//     let requete = new XMLHttpRequest(); // Creer un objet
//     requete.open('GET', url); // premier parametre GET || POST ; deuxieme parametre : url
//     requete.responseType = 'json'; // Nous attendons du JSON || text
//     requete.send(); // Nous envoyons notre requete


//     //Des qu'on recoit une reponse, on execute une fonction 
//     requete.onload = function() {

//         if(requete.readyState === XMLHttpRequest.DONE) {
//             if(requete.status === 200) {
//                 let reponse = requete.response;
//                 let prixEnEuros = reponse.EUR.last;
//                 document.getElementById('price_label').textContent = prixEnEuros;
                
//             }else {
//                 alert('Un probleme est intervenu, merci de revenir plus tard.')
//             }
//         }
//     }
    
// }
// setInterval(recupererPrix, 1000)


