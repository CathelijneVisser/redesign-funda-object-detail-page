const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav")
const descriptionButton = document.querySelector(".more-description");
const descriptionButtonLess = document.querySelector(".less");
const descriptions = document.querySelectorAll(".more-info-description");
const characteristicsButton = document.querySelector(".more-characteristics");
const characteristicsButtonLess = document.querySelector(".less-characteristics");
const characteristics = document.querySelector(".more-info-characteristics");
const footerFoldouts = document.querySelectorAll(".fold-out");
const carrousel = document.querySelector('div.carrousel');

menuButton.addEventListener("click", menuExpand);
descriptionButton.addEventListener("click", descriptionExpand);
descriptionButtonLess.addEventListener("click", descriptionExpand);
characteristicsButton.addEventListener("click", characteristicsExpand);
characteristicsButtonLess.addEventListener("click", characteristicsExpand);
carrousel.addEventListener('click', scrollLeftOrRight);

function menuExpand () {
	nav.classList.toggle("expanded");
}

function descriptionExpand() {
	descriptions.forEach((description) => {
		description.classList.toggle("fold-out");
	});
	descriptionButton.classList.toggle("expanded");
	descriptionButtonLess.classList.toggle("expanded");
}

function characteristicsExpand() {
	characteristics.classList.toggle("fold-out")
	characteristicsButton.classList.toggle("expanded");
	characteristicsButtonLess.classList.toggle("expanded");
}

footerFoldouts.forEach((foldOut) => {
	foldOut.addEventListener('click', () => {
		foldOut.parentElement.classList.toggle('active')
	})
})


function scrollLeftOrRight(uiEvent) {

 
 // Niet heel relevant, maar hiermee zorg je dat de afmetingen van de carrousel in CSS blijven
 // En pas in JavaScript worden opgevraagd
 var scrollWidth = this.scrollWidth;
 var offsetWidth = this.offsetWidth;
 var scrollLeft = this.scrollLeft;
 // Scroll naar links, of naar rechts, afhankelijk van waar we klikten
 var scrollXBy = (uiEvent.offsetX < offsetWidth / 2 ? -1 : 1) * offsetWidth;
 if (scrollXBy < 0 && scrollLeft == 0) {
  // Als we bij de eerste afbeelding zijn, ga dan naar de laatste
  scrollXBy = scrollWidth - offsetWidth;
 } else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
  // Als we bij de laatste afbeelding zijn, ga dan naar de eerste
  scrollXBy = (-1 * scrollWidth) + scrollXBy;
 }
 this.scrollBy({
  left: scrollXBy
 });


}