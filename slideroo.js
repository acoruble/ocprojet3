var slider = {
  tableau : null,
  largeur : "10px",
  hauteur : "50px",
  maindiv : document.createElement("div"),
  emplacement : "body",
  base:0,

  createslider:function(){
    this.maindiv.style.height = this.hauteur;
    this.maindiv.style.width = this.largeur;
    document.querySelector(this.emplacement).appendChild(this.maindiv);

    var image = document.createElement("img");
    image.setAttribute("src","image.jpg" );
    image.setAttribute("id", "image");
    this.maindiv.appendChild(image);

    var flechegauche = document.createElement("img");
    flechegauche.setAttribute ("src","flechegauche.jpg");
    flechegauche.setAttribute("class", "flechegauche");
    flechegauche.style.width = "25px";
    this.maindiv.appendChild(flechegauche);

    var flechedroite = document.createElement("img");
    flechedroite.setAttribute ("src","flechedroite.jpg");
    flechedroite.setAttribute("class", "flechedroite");
    flechedroite.style.width = "25px";
    this.maindiv.appendChild(flechedroite);

  },

  evenement:function(){
      console.log(document.querySelector(".flechedroite"));
      var mythis = this;
    document.querySelector(".flechedroite").addEventListener("click", function(){
      console.log(mythis.base);
      mythis.base++;
      if (mythis.base<4) {
        console.log(mythis.base);
        document.getElementById("image").src = mythis.tableau[mythis.base];
      }
      else {
        mythis.base=3;
      }
    })
  }
}
var slider1 = Object.create(slider);
slider1.largeur = "400px";
slider1.hauteur = "300px";
slider1.tableau = ["image.jpg", "image2.jpg", "image3.jpg", "image4.jpg" ];
slider1.createslider();
slider1.evenement();
