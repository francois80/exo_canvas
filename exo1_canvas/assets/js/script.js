
  var canvas = document.getElementById("mon_canvas");
  var ctx = canvas.getContext("2d");

  //murs de la maison
  ctx.fillStyle = '#4488EE'; //bleu
  ctx.fillRect(185,150,180,180); //rectangle plein left:185 top:150 width:180 height:180

  ctx.fillStyle = 'green';
  ctx.fillRect(250,260,50,70);//porte
  ctx.fillRect(200,180,60,60);//fenetre gauche
  ctx.fillRect(285,180,60,60);//fenetre droite
  //toiture de la maison (triangle)
  ctx.beginPath();
  ctx.moveTo(275, 50);//point de départ
  ctx.lineTo(365,150);//de la pointe vers la droite
  ctx.lineTo(185,150);//de la droite vers la gauche
  ctx.lineTo(275,50);//de la gauche vers le haut
  ctx.fillStyle = 'red';
  //ctx.strokeStyle = 'red'; //couleur de la bordure
  //ctx.lineWidth= 3; //épaisseur de la bordure
  //ctx.stroke(); //application du style de bordure
  ctx.fill();//application du style

  //la cheminée
  ctx.beginPath();
  ctx.moveTo(300,50);//point de départ
  ctx.lineTo(330,50);//haut de la chemineé : ligne horizontale
  ctx.lineTo(330,110);//descente coté droit cheminée
  ctx.lineTo(300,70);//digonale cheminée qui suit l'inclinaison du toit
  ctx.lineTo(300,45);//remontée gauche de la cheminée jusqu'au point de départ
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 10;//épaisseur du trait
  ctx.stroke();//application des styles
