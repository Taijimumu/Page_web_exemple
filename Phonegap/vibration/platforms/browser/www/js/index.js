"use strict"

var button = document.getElementById("button");

function onClickVibrate(){
    alert("Yosha !!!");
    console.log(navigator.vibrate(3000));
}

button.addEventListener("click", onClickVibrate);
