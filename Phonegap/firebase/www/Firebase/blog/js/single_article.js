"use strict"
 
var url = new URL(window.location);
var id = url.searchParams.get("id");
console.log(id);
var article = firebase.database().ref("articles/"+id);
article.on("value",function(data){
    var art = data.val();
    titre.innerHTML= art.titre;
    auteur.innerHTML= art.userId;
    contenu.innerHTML= art.content;
});