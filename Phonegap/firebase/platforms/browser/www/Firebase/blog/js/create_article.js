"use strict"
/*var title = document.getElementById("title");
var content = document.getElementById("content");*/
var formulaire = document.getElementById("formulaire");

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        function onCreateArticle(event){
            event.preventDefault();
            var articles = firebase.database().ref('articles');
            articles.push().set({
                titre : formulaire.elements.title.value,
                content : formulaire.elements.content.value,
                userId : user.uid
            });
        }
        formulaire.addEventListener("submit", onCreateArticle);
    }
    else{
        alert("Utilisateur Déconnecté");
        window.location("login.html");
    }
    
});



