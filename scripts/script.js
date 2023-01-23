const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav")
const descriptionButton = document.querySelector(".more-description");
const descriptionButtonLess = document.querySelector(".less");
const descriptions = document.querySelectorAll(".more-info-description");
const characteristicsButton = document.querySelector(".more-characteristics");
const characteristicsButtonLess = document.querySelector(".less-characteristics");
const characteristics = document.querySelector(".more-info-characteristics");
const footerFoldouts = document.querySelectorAll(".fold-out");

menuButton.addEventListener("click", menuExpand);
descriptionButton.addEventListener("click", descriptionExpand);
descriptionButtonLess.addEventListener("click", descriptionExpand);
characteristicsButton.addEventListener("click", characteristicsExpand);
characteristicsButtonLess.addEventListener("click", characteristicsExpand);

function menuExpand () {
	nav.classList.toggle("expanded");
}

function descriptionExpand() {
	descriptions.forEach((description) => {
		description.classList.toggle("fold-out");
	});
	descriptionButton.classList.toggle("expandeda");
	descriptionButtonLess.classList.toggle("expanded");
}

function characteristicsExpand() {
	characteristics.classList.toggle("fold-out")
	characteristicsButton.classList.toggle("expanded");
	characteristicsButtonLess.classList.toggle("expanded");
}

// FooterSVG.forEach((svg) => {
// 	svg.addEventListener("click", () => {
// 		svg.parentElement.classList.toggle("expand");
// 		svg.classList.toggle("turned")
// 	});
// });



footerFoldouts.forEach((foldOut) => {
	foldOut.addEventListener('click', () => {
		foldOut.parentElement.classList.toggle('active')
	})
})