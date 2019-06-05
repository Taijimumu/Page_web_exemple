"use strict"
var formulaire = document.getElementById("contactForm");
var ListeDesContacts = document.getElementById('contactsList');
var ajout = document.getElementById('ajout');



var contacts = [];
var contactToEdit = null;
formulaire.addEventListener("submit", onContactFormSubmit);

ajout.addEventListener("click", ajoutList);




function onContactFormSubmit(event){
    event.preventDefault();
    alert("ok");
    var user = {
        name : formulaire.elements.nom.value,
        prenom : formulaire.elements.prenom.value,
        email : formulaire.elements.email.value,
        phone : formulaire.elements.phone.value
    }
    if(contactToEdit == null){
        contacts.push(user);
    }else{
        contacts[contactToEdit] = user;
    }

    saveContacts();
    displayContacts();
}

function saveContacts(){
    localStorage.setItem('lesContacts',JSON.stringify(contacts));
}

function getContacts(){
    var lesContacts = JSON.parse(localStorage.getItem("lesContacts"));
    if(lesContacts != null){
        contacts = lesContacts;
    }
}
function displayContacts(){
    ListeDesContacts.innerHTML = "";
    contacts.forEach(function(user,i){
        var link = document.createElement("a");
        link.textContent = user.name;
        link.classList.add("list-group-item" , "list-group-item-action");
        link.href = "#";
        link.setAttribute('data-position', i);
        link.addEventListener('click',displayContactsInfo);
        ListeDesContacts.appendChild(link);  
    })
}


function displayContactsInfo(){
    var contactIndex = this.getAttribute('data-position');
    var contactToDisplay = contacts[contactIndex];
    contactToEdit = contactIndex;

    formulaire.elements.nom.value = contactToDisplay.name;
    formulaire.elements.prenom.value = contactToDisplay.prenom;
    formulaire.elements.email.value = contactToDisplay.email;
    formulaire.elements.phone.value = contactToDisplay.phone;
}

function ajoutList(){
    alert("ok");
    formulaire.elements.nom.value = "";
    formulaire.elements.prenom.value = "";
    formulaire.elements.email.value = "";
    formulaire.elements.phone.value = "";

}


getContacts();
displayContacts();