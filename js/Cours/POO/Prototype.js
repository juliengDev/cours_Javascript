// ============================== Les prototype - chaine de prototype ==============================

// function Utilisateur(prenom, nom, email) {
//     this.prenom = prenom;
//     this.nom    = nom;
//     this.email  = email;
    
//     this.sePresenter = () => {
//       console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
//     }
//   }
  
//   // On crée un objet
//   var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
//   var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');
  
//   console.log(mark);

// ============================== Cree un objet avec le constructeur Object ==============================

// function Utilisateur(prenom, nom, email) {
//     this.prenom = prenom;
//     this.nom    = nom;
//     this.email  = email;
//   }

//   Utilisateur.prototype.sePresenter = function() { // Attention a ne pas utiliser de fonction flechee ici (impossibilite d utiliser le mot clef this)
//       console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
//   }
  
// On crée un objet
//   var mark = new Utilisateur('Mark', 'Zuckerberg', 'mark@facebook.com');
//   var bill = new Utilisateur('Bill', 'Gates', 'bill@gatesnotes.com');
  
//   console.log(mark); // On voit que JavaScript ajoute une propriété __proto__ et constructor
  
//   mark.sePresenter();
  
// Créer un objet avec Object()
//   var monObjet = new Object();
//   monObjet.titre = "Le titre de l'objet";

// ============================== Comprendre l'héritage avec les prototypes et JavaScript ==============================

// Constructeur de base
// function Animal(nombreDePattes, poids) {
//     this.nombreDePattes = nombreDePattes;
//     this.poids         = poids;
//   }
//   Animal.prototype.presentation = function() {
//     console.log('Cet animal possède ' + this.nombreDePattes + ' pattes et fait ' + this.poids + '.');
//   }
  
//   // Constructeurs spécialisés
//   function Oiseau(nombreDePattes, poids, longueurDesAiles) {
//     Animal.call(this, nombreDePattes, poids); // La fonction Call() permet d'appeler une fonction constructeur : en premier paramètre on donne l'objet actuel (this), ensuite, on donne les arguments pour son constructeur 
//     this.longueurDesAiles = longueurDesAiles;
//   }
//   Oiseau.prototype = Object.create(Animal.prototype); // On change les informations en donnant un nouvel objet qui sera le prototype de notre constructeur animal
//   Oiseau.prototype.constructor = Oiseau; // On redéfinit la valeur de Oiseau.prototype.constructor car elle a été changée avec le changement de prototype
  
//   function Mammifere(nombreDePattes, poids, typeDePoils) {
//     Animal.call(this, nombreDePattes, poids);
//     this.typeDePoils = typeDePoils;
//   }
//   Mammifere.prototype = Object.create(Animal.prototype);
//   Mammifere.prototype.constructor = Mammifere;
  
//   var perroquet = new Oiseau(2, '1kg', 'grandes');
//   // console.log(perroquet.nombreDePattes);
  
//   perroquet.presentation();


 
// ============================== Bind, Call et Apply avec JavaScript ==============================

// // Call et Apply permettent d'invoquer immédiatement une fonction
// // Animal.call(this (l'objet en cours), nombreDePattes, poids)

// // Call = Apply
// var gandalf = { titre: "Magicien" };
// function direBonjour() {
//   console.log("Bonjour " + this.titre);
// }
// // direBonjour.call(gandalf);

// // Apply != Call
// var gandalf = { titre: "Magicien" };
// // let arme = ['un bâton', 75];

// function direBonjour(arme, degats) {
//   console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de dégats.");
// }

// // direBonjour.apply(gandalf, arme);
// // direBonjour.call(gandalf, arme[0], arme[1]); // La seule différence : apply accepte les arguments nécessaire sous forme de tableau, à l'inverse call par variables

// // Bind
// // Objectif : Créer une nouvelle fonction, avec le même contexte et les mêmes propriétés que la fonction en paramètre (permet de changer le this)
// // Surtout utilisé avec les fonctions anonymes à l'intérieur d'un objet

// this.valeur = "Window";

// let monObjet = {
//   valeur: "Objet",
//   getValeur: function() {
//     console.log(this.valeur);
//   }
// }

// monObjet.getValeur();

// let maValeur = monObjet.getValeur;
// maValeur(); // Window, car console.log(this.valeur) fait référence à l'objet global

// // Pour corriger ce problème, on utilise bind, qui va récrer une fonction avec le contexte de l'objet monObjet

// // let maValeurAvecBind = maValeur.bind(monObjet); // ici, on "prend" le contexte de base
// let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // Fait la même chose
// maValeurAvecBind();