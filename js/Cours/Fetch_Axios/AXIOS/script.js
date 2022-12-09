// // ------------------------- Recuperer des donnees --------------------------


// // const url = 'https://blockchain.info/ticker';

// // function recupererPrix() {


// //   axios.get(url)
// //     .then(function(donnees) {
// //       // console.log(donnees);
// //       document.querySelector('span').textContent = donnees.data.EUR.last;
// //     })
// //     .catch(function(erreur) {
// //       alert('Un probleme est survenu');
// //     })
// //     .then(function () {
// //       console.log('mise a jour effectuee');
// //     });
// // }

// // setInterval(recupererPrix, 1000) 


// // ------------------------- Envoyer des donnees --------------------------

// const url = 'https://lesoublisdelinfo.com/api.php';


// const axiosInstancePost = axios.create({
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
// });

// axiosInstancePost.post(url, new URLSearchParams({
  
//     prenom: 'Julien'  
// }))

// .then(function(donnees){
//   console.log(donnees.data)
// })

// .catch(function(erreur){
//   console.log(erreur)
// })
