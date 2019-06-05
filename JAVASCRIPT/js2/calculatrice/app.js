"use strict";

//fonctions
function addition(nombre1, nombre2){
    var operation = nombre1 + nombre2;
    return operation;
}

function soustraction(nombre1 , nombre2){
    var opera = nombre1 - nombre2;
    return opera;
}

function multiplication(nombre1 , nombre2){
    var opera = nombre1 * nombre2;
    return opera;
}

function division(nombre1 , nombre2){
    if(nombre2 != 0){
        var opera = nombre1 / nombre2;
        return opera;
    } else{
        alert("on ne peux pas diviser. Le diviseur est 0 !!");
    }
}

var formulaire = document.getElementById("formcalcul");
console.log(formulaire.elements.nb1.value);

function onCalculSubmit(event){
    event.preventDefault();
    var user1 = parseFloat(formulaire.elements.nb1.value);
    var user2 = parseFloat(formulaire.elements.nb2.value);
    var ope = formulaire.elements.operation.value;
    var result;
    var h = document.getElementById("resultat");
    alert("je vais calculer " + user1 + ope + user2);
    switch(ope){
        case '+':
            result = addition(user1, user2);
            h.innerHTML = result;
            break;
        case '-':
            result = soustraction(user1, user2);
            h.innerHTML = result;
            break;
        case 'x':
            result = multiplication(user1, user2);
            h.innerHTML = result;
            break;
        case '/':
            result = division(user1, user2);
            h.innerHTML = result;
            break;
    }
}

formulaire.addEventListener("submit", onCalculSubmit);

