"use strict"

var articles = firebase.database().ref("articles");
var ListeArticles = document.getElementById("articleList");

articles.on("child_added", function(data){
    var article = data.val();
    console.log(article);
    var titre = article.titre;
    var author = article.userId;


    var taskdiv = document.createElement("div");
    taskdiv.classList.add("card", "mb-3");
    var taska = document.createElement("a");
    taska.href = "single_article.html?id="+ data.key ;
    taska.classList.add("h1");
    var taskp = document.createElement("p");
   

    taskdiv.appendChild(taska);
    taskdiv.appendChild(taskp);

    taska.textContent = titre;
    taskp.textContent = author;

    ListeArticles.appendChild(taskdiv); 

});