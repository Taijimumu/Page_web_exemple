var prenom = "Muhammad";
var langages = ["html",true,"javascript",45];

console.log(langages);
console.log(prenom);

var personnage = {
    age : 25,
    vies : 0,
    prenom : "test"
}

if(personnage.age > 100){
    alert("Le personnage est vieux");
} else{
    alert("Le personnage est peut être vieux");
}

if(personnage.age < 18){
    alert("Il est mineur");
} else if(personnage.age < 25){
    alert("Il a entre 18 et 25 ans");
} else if(personnage.age < 50){
    alert("Il a entre de 25 et 50 ans");
} else{
    alert("Le personnage a plus de 50 ans");
}


if(personnage.age < 50 && personnage.vies == 5){
    alert("Le personnage a moins de 50 ans et il lui reste 3 vies");
} else{
    alert("Le personnage a + de 50 (compris) OU le personnage a un nombre a un nombre de vies différent de 3");
}

if(personnage.age > 150 || personnage.vies ==0){
    alert("Tu es censé être mort !!!");
} else{
    alert("Tout va bien !! RAS");
}

if(personnage.age >= 20 && personnage.age <= 30){
    alert("Personnage entre 20 et 30 ans");
}

