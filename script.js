function locomotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[#main]'),
        smooth: true
    });
    
}
 


function page4Animation(){
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

}


// swiper js ka code 
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        
      });
}

// animation for  
function menuAnimation(){
// code for menu to become fade on clicking
var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0 
menu.addEventListener("click", function(){
    if(flag == 0){
    full.style.top = 0
    navimg.style.opacity = 0
    flag = 1
    }else{
    full.style.top = "-100%"
    navimg.style.opacity = 1
    flag = 0  
    }
})
   
}

function loaderAnimation(){
    var loader = document.querySelector("#loader")
    setTimeout(function(){
    loader.style.top = "-100%"
    },4000)

}

locomotiveScroll()
page4Animation()
swiperAnimation()
menuAnimation()
loaderAnimation()











