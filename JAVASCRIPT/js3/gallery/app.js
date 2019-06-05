//retourne un object
var gallery = document.getElementById("gallery");
gallerie.addEventListener('click',onGallerieClick);


//retourne un array
var images = document.getElementsByClassName("gallery-img");
for(var i=0;i< images.length;i++){
    images[i].addEventListener('click',onImgClick);
}

//retourne un array
var test = document.getElementsByTagName('a');

/*Récupère tous les éléments corresponant au selecteur -> retourne un array */
var autreSelection = document.querySelectorAll("#gallery .gallery-img");

/*Récupère tous les éléments corresponant au selecteur -> retourne un object */
var autreSelection = document.querySelector("#gallery .gallery-img");

