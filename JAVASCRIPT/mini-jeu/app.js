"use strict"
var formulaire = document.getElementById("formulaire");
var photo = document.getElementById("photo");


var tableau = ["One Piece", "Dragon Ball", "Naruto", "Jojo's bizarre adventure", "Bleach", "Gon", "Kingdom Hearts", "Food Wars"]; /*["cat","car","dog","woman","stars"];*/
var randomCategory;


var req = new XMLHttpRequest();

formulaire.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    console.log(formulaire.elements.champ.value);
    var champ = formulaire.elements.champ.value;
    if(champ == randomCategory){
        var result = document.getElementById("result");
        result.innerHTML = "Bonne Réponse !";
        result.classList.add("text-success");
        result.classList.remove("text-danger");
        displayRandomGif();
    } else{
        result = document.getElementById("result");
        result.innerHTML = "Mauvaise Réponse !";
        result.classList = "text-danger";
    }
}

function displayRandomGif(){
    randomCategory = tableau[Math.floor(Math.random()*(tableau.length))];
    console.log(randomCategory);
    const req = new XMLHttpRequest();
    req.open('GET','http://api.giphy.com/v1/gifs/random?api_key=vk3zblbhhig5UsYJ8sxFvhv6x2gs8rKu&tag='+randomCategory,true);
    req.send();
    req.onreadystatechange = function(event) {
        if (this.readyState === XMLHttpRequest.DONE) { ///ou 
            if (this.status === 200) {
                console.log("Réponse reçue: %s", this.responseText);
                var data = JSON.parse(this.responseText);
                console.log(data.data.image_url);
                var imgdata = data.data.image_url;
                photo.setAttribute("src",imgdata);
            }else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    }
}

displayRandomGif();