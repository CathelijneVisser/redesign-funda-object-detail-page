const DescriptionButton = document.querySelector(".more-description");
const DescriptionButtonLess = document.querySelector(".less");
const Description = document.querySelectorAll(".more-info-description");
const FooterServices = document.querySelector(".services");
const FooterInformation = document.querySelector(".information");
const FooterRealetor = document.querySelector(".realetor-footer");
const FooterAboutUs = document.querySelector(".about-us");
const FooterSVG = document.querySelectorAll("footer svg");
const CharacteristicsButton = document.querySelector(".more-characteristics");
const CharacteristicsButtonLess = document.querySelector(
	".less-characteristics"
);
const characteristics = document.querySelector(".characteristics");

DescriptionButton.addEventListener("click", DescriptionExpand);
DescriptionButtonLess.addEventListener("click", DescriptionExpand);
CharacteristicsButton.addEventListener("click", CharacteristicsExpand);
CharacteristicsButtonLess.addEventListener("click", CharacteristicsExpand);

function DescriptionExpand() {
	Description.forEach((Description) => {
		Description.classList.toggle("fold-out");
	});
	DescriptionButton.classList.toggle("expanded");
	DescriptionButtonLess.classList.toggle("expanded");
}

function CharacteristicsExpand() {
	Characteristics.forEach((Characteristics) => {
		Characteristics.classList.toggle("fold-out");
	});
	Characteristics.classList.toggle("expanded");
	CharacteristicsButtonLess.classList.toggle("expanded");
}

FooterSVG.forEach((svg) => {
	svg.addEventListener("click", () => {
		svg.parentElement.classList.toggle("expand");
	});
});
