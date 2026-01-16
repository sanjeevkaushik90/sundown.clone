// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



var image = document.querySelector("#imageContainer")
var fixed = document.querySelector("#fixedImage")
image.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
image.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})


var imageCards = document.querySelectorAll('.imageElement')

imageCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        var imageNew = card.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${imageNew})`
    })
})