let choix;
let premierNombre;
let deuxiemeNombre;
let resultat;

try {
do {
    choix = Number(prompt("Veuillez choisir un numero dans la liste suivante :\n" +
"1. Addition\n" +
"2. Multiplication\n" +
"3. Soustraction\n" +
"4. Division"));

} while(choix != 1 && choix != 2 && choix != 3 && choix != 4);

do {
     premierNombre = Number(prompt("Veuillez saisir un premier nombre"));
     deuxiemeNombre = Number(prompt("Veuillez saisir un deuxieme nombre"));     
}

while(isNaN(premierNombre) || isNaN(deuxiemeNombre))

let addition = (a, b) => {return a + b};
let multiplication = (a, b) => {return a * b}; 
let soustraction = (a, b) => {return a - b}; 
let division = (a, b) => {
    if(b === 0){
        throw new Error("Impossible de diviser par 0");
    }``
    return a / b;
};  

switch(choix) {
    case 1 : resultat = addition(premierNombre, deuxiemeNombre)
    break;

    case 2 : resultat =  multiplication(premierNombre, deuxiemeNombre)
    break;

    case 3 : resultat = soustraction(premierNombre, deuxiemeNombre)
    break;

    case 4 : resultat = division(premierNombre, deuxiemeNombre)
    break;

    default : console.log("Une erreur est survenue")
}

alert("Le resultat de votre operation est : " + resultat)
}
catch(error) {
 alert(error)
}