"use strict"
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        alert("Bien");
        
    }else{
        alert("non connecté");
    }
});

var commentaire = firebase.database().ref('comments');
commentaire.on("value",function(data){
    /*note message idUtilisa*/
    var lesComment = data.val();
    console.log(lesComment);
})

var formulaire = document.getElementById("form");

function onSubmitFire(event){
    event.preventDefault();
    

    var comments = firebase.database().ref('comments');
    // recup les valeurs des champs du form
    /* faire un firebase comments.push().set({
        content : la valeur du textarea
    })*/
    comments.push().set({

        commentsText = formulaire.elements.comment.value,
        commentsNote = formulaire.elements.noteClass.value,
        commentsUser = user.uid
    });
}




formulaire.addEventListener("submit", onSubmitFire);