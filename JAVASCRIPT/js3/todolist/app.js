"use strict";

/*
** qu'est-ce qu'on fait ? **
Dans le document, on récupère l'élément ayant l'ID "todoform"
et on le stocke dans la variable "formulaire"

**Pourquoi ?:**
Pour pouvoir manipuler l'élément (ex: ajouter des écouteurs d'évènement, modifier les 
class, modifier son contenu, ...)
*/


var formulaire = document.getElementById("todoform");
/*
    **Qu'est-ce qu'on fait ?**
    On ajoute un écouteur d'évènement à l'élémént qui se trouve dans la variable "formulaire"
    On écoute l'évènement "submit" (l'envoi du formulaire)
    Quand cet évènement se produit, la fonction "onTodoSubmit" s'éxecute

    ** Pourquoi ?**
    Pour "réagir" à un évènement qui se produit sur la page
*/

formulaire.addEventListener("submit",onTodoSubmit);


/*
    ** Qu'est ce qu'on fait ? **
    Dans le document, on récupère l'élément ayant l'ID "tasksList"
    et on le stocke dans la variable "listeDesTaches"

*/

var listeDesTaches = document.getElementById("tasksList");


/*
    **Qu'est ce qu'on fait**
    On crée une fonction qui s'appelle "onTodoSubmit"
    Pour le moment, cette fonction ne prend pas de paramètres et déclenche une alert

*/

function onTodoSubmit(event){
    event.preventDefault();
    var taskToAdd = formulaire.elements.task.value;

    var taskArticle = document.createElement("article");
    taskArticle.classList.add("card","mb-3");

    var taskBody = document.createElement("div");
    taskBody.classList.add("card-body");

    var taskh1 = document.createElement("h1");
    taskh1.classList.add("h4");
    taskh1.textContent = taskToAdd;

    /*listeDesTaches.appendChild(taskArticle);*/
    taskArticle.appendChild(taskBody);
    taskBody.appendChild(taskh1);
    taskArticle.addEventListener("click",onCard);
    taskArticle.addEventListener("dblclick",suppCard);
    listeDesTaches.appendChild(taskArticle);
}


function onCard(){
   this.classList.toggle("line");
}

function suppCard(){
    this.remove();
}