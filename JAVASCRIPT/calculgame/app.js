// Récupérer le h1 qui affichera le premier nombre de l'opération

var first = document.getElementById("firstnum");
console.dir(first);

// Récupérer le h1 qui affichera le deuxième nombre de l'opération

var second = document.getElementById("secondnum");
console.log(second);

// Récupérer le h1 qui affichera le résultat (soit "Bonne réponse" soit "Mauvaise réponse")

var resultat = document.getElementById("result");
console.log(result);

// Déclarer une variable qui contiendra le premier nombre de l'opération

var alea1;

// Déclarer une variable qui contiendra le deuxième nombre de l'opération

var alea2;

//Créer une fonction qui :
// - génère 2 nombres aléatoire et les donne en valeur des deux variables préalablement créés en dehors de la fonction
// - Ecrit le premier nombre dans le premier h1
// - Ecrit le deuxième nombre dans le deuxième h1

function genereralea(){
    alea1= Math.floor(Math.random()*(100-0))+0;
    alea2 = Math.floor(Math.random()*(100-0))+0;
    first.textContent = alea1;
    second.textContent = alea2;
    console.log(alea1);
    console.log(alea2);
}

// Executer cette fonction

genereralea();

// Récupérer le formulaire
var formulaire = document.getElementById("formresult");
// Ajouter un écouteur d'évènement au formulaire (écouter l'envoi de celui-ci)

formulaire.addEventListener("submit",trueorfalse);

// Créer la fonction qui se délenchera à l'envoi du formulaire
// Cette fonction devra vérifier que la valeur entrée par l'utilisateur est égale à la somme des deux nombres générés aléatoirement
// Si ce n'est pas égal, on écrit "Mauvaise réponse" dans le h1 du résultat, auquel on ajoute la class "text-danger" et retire la class "text-success"
// Sinon, si c'est égal, on écrit "Bonne réponse" dans le h1 du résultat, auquel on ajoute la class "text-success" et retire la class "text-danger", puis on réexecute la fonction qui génère les 2 nombres.

function trueorfalse(){
    var valeur = formulaire.elements.rep.value;
    var result;
    event.preventDefault();
    if(alea1+alea2 == valeur){
        result = document.getElementById("result");
        result.innerHTML = "Bonne Réponse !";
        result.classList.add("text-success");
        result.classList.remove("text-danger");
        genereralea();

    } else{
        result = document.getElementById("result");
        result.innerHTML = "Mauvaise Réponse !";
        result.classList = "text-danger";
    }
}