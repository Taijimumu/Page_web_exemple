var personnage = {
    prenom : 'Test',
    age : 1500,
    job : "Développeur",
    disponible : false,
    languages: ["html","css","JavaScript"]
}

if(personnage.disponible == true){
    alert(" Je suis disponible");
}


if(personnage.job == "Développeur" && personnage.disponible == false){
    alert("Mon job est Développeur mais je ne suis pas disponible");
}


if(personnage.age >= 1000 && personnage.age <= 2000){
    alert("Mon age est compris entre 1000 et 2000");
}


if(personnage.languages.indexOf('JavaScript') != -1 || personnage.languages.indexOf('css') != -1){
    alert("Je connais le javascript soit le CSS soit les 2");
}


if(personnage.disponible == false || personnage.job != "Développeur"){
    alert("Je suis pas disponible ou bien je ne suis pas développeur");
}