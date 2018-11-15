/**
 * Created by sstienface on 16/10/2018.
 */

let voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://fr.ubergizmo.com/wp-content/uploads/2011/10/eggo_01.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

document.getElementById("Titre").innerHTML = voiture.Nom + ": La voiture futuriste";

let Image = document.getElementById("ImageV");

Image.src = voiture.imgUrl;

document.getElementById("Couleur").innerHTML = voiture.Couleur;

document.getElementById("Roues").innerHTML = voiture.nombresRoues;

document.getElementById("Constructeur").innerHTML = voiture.Contructeur;

document.getElementById("Carburant").innerHTML = voiture.Carburant;

document.getElementById("Autonomie").innerHTML = voiture.Autonomie;

document.getElementById("Portes").innerHTML = voiture.nombrePortes;

document.getElementById("Vitesse").innerHTML = voiture.vitesseMaxi;

document.getElementById("TitreB").innerHTML = voiture.Nom + ": La nouvelle voiture exceptionnelle";

document.getElementById("Element").style.display = "none";

document.getElementById("BoutonD").addEventListener("click", function () {


    let Desc = document.getElementById("Element");
    if (Desc.style.display === "block") {
        Desc.style.display = "none";
    } else {
        Desc.style.display = "block";
    }


});