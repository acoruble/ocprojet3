//je créé le tableau avec le images //
var tableau = ["image.jpg", "image2.jpg", "image3.jpg", "image4.jpg" ];
//je récupère l'image actuelle et je renvoie l'attribut src avec une nouvelle valeur du tableau toutes les secondes par ex //
//var tempo = setTimeout(anim, 1000);
var i = 0;
var anim = function anim() {
    i++;
    if (i != tableau.length) {
      console.log(tableau.length);
      console.log(i);
      document.getElementById("image").src = tableau [i];
    } else {
      clearInterval(tempo);
      //i=-1;
    }
    //setTimeout("anim()", 1000);
   }
var tempo = setInterval("anim()", 1000);
//function anim() {
    //for ( var i=0; i != tableau.length; i++) {
      //  document.getElementById("image").src = tableau [i];
  //  }
//}
function gauche() {
      i--;
      if (i >-1) {
        console.log(tableau.length);
        console.log(i);
        document.getElementById("image").src = tableau [i];}
      else {
        i=0;
      }
}
function droite() {
        i++;
        if (i<4) {
          console.log(i);
          document.getElementById("image").src = tableau [i];}
        else {
          i=3;
        }
}
var agauche = document.getElementById("agauche");
agauche.addEventListener("click", gauche);
var adroite = document.getElementById("adroite");
adroite.addEventListener("click", droite);

document.onkeydown = function(event) {
  if (event.keycode == 37) gauche();
}
document.onkeydown = function(event) {
  if (event.keycode == 39) droite();
}
