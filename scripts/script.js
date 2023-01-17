const DescriptionButton = document.querySelector(".more-description")
const DescriptionButtonLess = document.querySelector(".less")
const Description = document.querySelectorAll(".more-info-description")
const FooterServices = document.querySelector(".services")
const FooterInformation = document.querySelector(".information")
const FooterRealetor = document.querySelector(".realetor-footer")
const FooterAboutUs = document.querySelector(".about-us")
const FooterSVG = document.querySelectorAll("footer svg")

// DescriptionButton.addEventListener("click", DescriptionExpand)
// DescriptionButtonLess.addEventListener("click", DescriptionExpand)

// function DescriptionExpand () {
//     Description.forEach.classList.toggle("fold-out")
//     DescriptionButton.classList.toggle("expanded")
//     DescriptionButtonLess.classList.toggle("expanded")
// }

FooterSVG.forEach((svg) => {
    svg.addEventListener("click", () => {
        svg.parentElement.classList.toggle("expand")
    })
})