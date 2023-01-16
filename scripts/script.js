const DescriptionButton = document.querySelector(".more-description")
const DescriptionButtonLess = document.querySelector(".less")
const Description = document.querySelectorAll(".more-info-description")

DescriptionButton.addEventListener("click", DescriptionExpand)
DescriptionButtonLess.addEventListener("click", DescriptionExpand)

function DescriptionExpand () {
    Description.forEach.classList.toggle("fold-out")
    DescriptionButton.classList.toggle("expanded")
    DescriptionButtonLess.classList.toggle("expanded")
}