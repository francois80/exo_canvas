var c = document.getElementById('mon_canvas');
var ctx = c.getContext('2d');


//cheminée
ctx.fillStyle = "brown";
ctx.fillRect(320,20,20,40);

//toiture
ctx.rotate(45*Math.PI/180);
ctx.fillStyle = '#4488EE'; //bleu
ctx.fillRect(200,-200,135,135); //carré plein left:20 top:100 width:150 height:2
//maison
ctx.rotate(45*Math.PI/180); //avec rotate, le top et le left sot inversés
ctx.fillStyle = 'cyan'; //bleu

ctx.fillRect(95,-378,190,190);
//fenêtre gauche
ctx.fillStyle = 'green'; //vert
ctx.fillRect(120,-260,60,60);
//fenêtre droite
ctx.fillRect(120,-360,60,60);
//porte
ctx.fillRect(195,-310,90,60);
