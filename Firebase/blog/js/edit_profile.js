function initApp(){
    var formulaire = document.getElementById('formulaire');
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            if(email == user.email){
                user.changeEmail("test@test.fr");
            }else
            console.log("Utilisateur connecté");
            var email = user.email;
            var pseudo = user.displayName;
            var client = firebase.database().ref('Client/'+ user.uid);
            $('#email').val(email);
            $('#pseudo').val(pseudo);

            client.on("value", function(data){
                var monUser = data.val();
                console.log(monUser);
                //formulaire.elements.tel.value = "01";
                formulaire.elements.age.value = monUser.age;
                formulaire.elements.tel.value = monUser.tel;
                
            });

            $('#update').click(function(){
                var nom = $('#nom').val();
                var prenom = $('#prenom').val();
                var tel = $('#tel').val();
                var age = $('#age').val();
               
                firebase.database().ref('Client/'+ user.uid).set({
                    nom: nom,
                    prenom: prenom,
                    age : age,
                    tel : tel
                });
                

            });
        } else{
            console.log("Utilisateur déconnecté");
        }
    });
}

window.onload = function(){
    initApp();
}