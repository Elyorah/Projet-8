const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Récupération des flèches du carroussel

let arrow_left = document.querySelector("#banner .arrow_left")
let arrow_right = document.querySelector("#banner .arrow_right")
let arrows = document.querySelectorAll("#banner .arrow")


// Ajout des Bullet Points

let bulletPoints = document.querySelector("#banner .dots")
let ulBullet = document.createElement("ul")
ulBullet.classList.add("dots")

let i //Compteur

for (i=0; i<slides.length; i++) {
	let liBullet = document.createElement("li")
	liBullet.classList.add("dot")
	ulBullet.appendChild(liBullet)

	if (i === 0) {		//On applique la classe "dot_selected au premier dot"
		liBullet.classList.add("dot_selected")
	}
}

bulletPoints.appendChild(ulBullet)


// Je supprime la div parent pour que le style corresponde à la maquette attendue.
bulletPoints.replaceWith(ulBullet)


// Mise en place de la dynamique du Carroussel

i = 0

let imageActuelle = document.querySelector("#banner .banner-img") 
let texteActuel = document.querySelector("#banner p")
//console.log(texteActuel.innerHTML)


// Event Listener

arrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		let bullets = document.querySelectorAll("#banner .dots .dot")
		bullets[i].classList.remove("dot_selected")
		
		if (i === 0 & (arrow === arrow_left)) {

			i = slides.length - 1
			imageActuelle.src = "./assets/images/slideshow/" + slides [i].image
			bullets[i].classList.add("dot_selected")
			texteActuel.innerHTML = slides [i].tagLine

		} else {
			if (arrow === arrow_left) {

				i -= 1
				imageActuelle.src = "./assets/images/slideshow/" + slides [i].image
				bullets[i].classList.add("dot_selected")
				texteActuel.innerHTML = slides [i].tagLine

			}
		}
		
		if (i === slides.length - 1 & (arrow === arrow_right)) {
			 
			i = 0
			imageActuelle.src = "./assets/images/slideshow/" + slides [i].image
			bullets[i].classList.add("dot_selected")
			texteActuel.innerHTML = slides [i].tagLine 

		} else {
			if (arrow === arrow_right) { 
				
				i += 1
				imageActuelle.src = "./assets/images/slideshow/" + slides [i].image
				bullets[i].classList.add("dot_selected")
				texteActuel.innerHTML = slides [i].tagLine			
	
			}
		}

		//Solution alternative pour la flèche droite.

			// if (arrow === arrow_right) {
			// 	i = (i + 1) % slides.length; 		L'opérateur Modulo affiche le reste de la division de (i+1)/4 <=> slides.length et ramène i à 0 quand i = 4
			// 	imageActuelle.src = "./assets/images/slideshow/" + slides[i].image;
			// 	bullets[i].classList.add("dot_selected");
			// 	texteActuel.innerHTML = slides[i].tagLine;
			//  }

	})
})