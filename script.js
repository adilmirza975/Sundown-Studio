// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[#main]'),
//     smooth: true
// });

 


// code for fixed-image(image that appear on hovering)
var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})



// code for image to appear on hover--select all elements together
var elems = document.querySelectorAll(".elem")
// run a loop for image change for those 7 elements
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        // using template literals and backtick
        fixed.style.backgroundImage = `url(${image})`
    })
})


// swiper js ka code 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });