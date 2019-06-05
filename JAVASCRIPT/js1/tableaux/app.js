//Creer varialble "plats" et y mettre un tableau contenant les noms de vos plats preferes
var plats = ["Poulet","Grec","Tarte au daim","Boule de coco","Frites"];


//A aide de for afficher dans la console chaque nom de plats

for(i=0;i < plats.length;i++){
    console.log(plats[i]);
}

//une fois la boucle fait rajouter qq plats ds tableau et assurez vous que tous les plats dans la console sans avoir à modifier la boucle

plats.push('epinards');
plats.push('salade');
for(i=0;i<plats.length;i++){
    console.log(plats[i]);
}

//