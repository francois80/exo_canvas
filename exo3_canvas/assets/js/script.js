var canvas = document.getElementById('mon_canvas');
var ctx = canvas.getContext('2d');
//carosserie voiture
ctx.beginPath();
ctx.moveTo(140, 10);//point départ
ctx.lineTo(250,10);//toiture
ctx.lineTo(280,50);//lunette arrière
ctx.lineTo(320,50);//coffre
ctx.lineTo(320,100);//descente du coffre
ctx.lineTo(20,100);//chassis
ctx.lineTo(20,70);//calandre
ctx.lineTo(120,60);//capot
ctx.lineTo(140,10);//pare-brise
ctx.fillStyle = 'red';
ctx.fill();

ctx.beginPath();
ctx.moveTo(120, 55);//point départ
ctx.lineTo(280,55);//toiture
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;//épaisseur du trait
ctx.stroke();//application des styles


//roue 1 : cercle complet noir
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = 'black';
ctx.arc(60,100,20,0,2*Math.PI);//left: top: rayon: angle de départ: angle de fin:
ctx.fill();
//roue 2 : cercle complet noir
ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = 'black';
ctx.arc(260,100,30,0,2*Math.PI);//left: top: rayon: angle de départ: angle de fin:
ctx.fill();
