// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



function pageCard(){
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
}


function swiperAnimation(){
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}


pageCard()
swiperAnimation()