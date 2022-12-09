// let prenom = "Julien";
// let nom = "Gilbert"
// console.log("Bonjour " + prenom + " " + nom + " !"); // Affiche Bonjour Julien Gilbert !

// let nombreUn = 8, nombreDeux = 4, result; // On peut tout mettre sur la meme ligne
// result = nombreUn + nombreDeux;
// console.log(result); // Affiche 12
// result += 5 
// console.log(result) // Affiche 17

// let age = prompt("Entrez votre age :")
// console.log("Bonjour vous avez " + age + " ans !");


// =================== Les templates string avec JavaScript ===================

// Avant
// let prenom = "John";
// let bonjour = "Bonjour " + prenom;
// console.log(bonjour);

// Maintenant
// let prenom = "John";
// let bonjour = `Bonjour ${prenom}`; // accent grave ou backtick
// console.log(bonjour);

// Avec les dates
// let date = new Date().getFullYear();
// let copyright = `${date} © Believemy`;
// console.log(copyright);

// Ou encore plus pratique : des calculs
// let aliments = { fruits: 5, legumes: 1, biscuits: 75 }
// let panier = `Dans votre panier, vous avez ${aliments.fruits + aliments.legumes + aliments.biscuits} articles.`;
// console.log(panier);