"use strict"
console.log(firebase);
var form1 = document.getElementById("connexion");//formulaire connexion
var form2 = document.getElementById("inscription");//formulaire inscription

var connecter = document.getElementById("connecter");
var inscrire = document.getElementById("inscrire");


function onConnectSubmit(event){
    event.preventDefault();
    var email = form1.elements.mail.value;
    var mdp = form1.elements.mdp.value;
    firebase.auth().signInWithEmailAndPassword(email, mdp).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var erreur = document.getElementById("error");
        erreur.innerHTML = errorMessage;
        // ...
      });
    console.log(email);
    console.log(mdp);
    
    alert("ok pour Connecter");
}

function onSignupSubmit(event){
    event.preventDefault();
    var email = form2.elements.mail.value;
    var mdp = form2.elements.mdp.value;
    firebase.auth().createUserWithEmailAndPassword(email, mdp).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    console.log(email);
    console.log(mdp);
    var erreur = document.getElementById("error");
    erreur.innerHTML = "Utilisateur Déconnecté";
    alert("ok pour inscrire");

}

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user);

    if (user) {
      // User is signed in.
      console.log(user);
      $('#signOut').click(function(){
        firebase.auth().signOut();
      });
      window.location = "admin/create_article.html";
    } else {
      // User is signed out.
      var erreur = document.getElementById("error");
      erreur.innerHTML = "Utilisateur Déconnecté";
    }
  });

  
form1.addEventListener("submit",onConnectSubmit);
form2.addEventListener("submit", onSignupSubmit);

  