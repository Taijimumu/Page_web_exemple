"use strict";

function Vaisseau(x,y,context) {
	this.vx=5;
	this.vy=5;
	this.x = x;
	this.y = y;
	this.context= context;
}
  
function Extra(x,y){
	this.x = x;
	this.y = y;
} 
 
Vaisseau.prototype.dessine = function dessine() {
 	var context = this.context;
	context.fillStyle = 'gold';
	context.beginPath();
	context.moveTo(this.x,this.y);
	context.lineTo(this.x+20,this.y+20);
	context.lineTo(this.x-20,this.y+20);
	context.closePath();
	context.fill();	
}

Extra.prototype.dessine = function dessineE() {
	var context = this.context;
	var context = this.context;
	context.fillStyle = 'bleu';
	context.fillRect(0,0,100,100) ;
}



/*Projectile.prototype.dessine = function Pdessine() {}*/





	
window.onload = function(){
  	var canvas = document.getElementById('game_area');
  	var context = canvas.getContext('2d');
  	var joueur = new Vaisseau(330,550,context);
  	var ennemi = new Extra(0,100);
  	
	
  	var touche = {37:false,38:false,39:false,40:false} /*if c'est vrai keydown si c'est faux keyup*/
  	window.addEventListener('keydown',function (event) {
  		var g = event.keyCode;
  		if (g == 37) {touche[37] = true;}
  		if (g == 38) {touche[38] = true;}
  		if (g == 39) {touche[39] = true;}
  		if (g == 40) {touche[40] = true;}
  		}) 
  	
  	window.addEventListener('keyup', function (event) {
  		var g = event.keyCode;
  		if (g == 37) {touche[37] = false;}
  		if (g == 38) {touche[38] = false;}
  		if (g == 39) {touche[39] = false;}
  		if (g == 40) {touche[40] = false;}
  		})
  	
  	var anima = function () {
	context.fillStyle='black';
	context.fillRect(0,0,600,600);
	joueur.dessine(context);
	
	
	if (touche[37]) {
		joueur.x -= joueur.vx;
	}
	
	if (touche[38]) {
		joueur.y -= joueur.vx;
	}
	
	if (touche[39]) {
		joueur.x += joueur.vx;
	}
	
	if (touche[40]) {
		joueur.y += joueur.vx;
	}
		
	window.requestAnimationFrame(anima);
	}

	window.requestAnimationFrame(anima);

}
  	
  	
  	
  	  	









