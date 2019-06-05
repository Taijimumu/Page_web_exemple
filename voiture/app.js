"use strict"
var formulaire = document.getElementById("formulaire");
var firstArrow = document.getElementById("firstArrow");
var secondArrow = document.getElementById("secondArrow");
var voiture = document.getElementById("voiture");
var audio = document.getElementById("audio");
voiture.style.left = 0;
console.dir(formulaire);


function onSubmitBip(){
    /*alert("BIP");*/
    audio.play();
}

function onLeftSubmit(){
    var nouveauLeft= parseInt(voiture.style.left) - 10;
    voiture.style.left = nouveauLeft + "px";
}

function onRightSubmit(){
    var nouveauRight= parseInt(voiture.style.left) + 10;
    voiture.style.left = nouveauRight + "px";
}

function onSubmitForm(event){
    event.preventDefault();
    var titre = document.getElementById("titre");
    titre.innerHTML = formulaire.elements.text.value;
}

formulaire.addEventListener("submit", onSubmitForm);
firstArrow.addEventListener("click", onLeftSubmit);
secondArrow.addEventListener("click", onRightSubmit);
voiture.addEventListener("click",onSubmitBip);