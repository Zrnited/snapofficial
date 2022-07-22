
//GRABBING BOTH THE DROPDOWNS AND THE BTNS FROM THE DOM
const companyDropdown = document.querySelector(".company-dropdown");

const featuresDropdown = document.querySelector(".features-dropdown");

const featuresBtn = document.querySelector(".features");

const companyBtn = document.querySelector(".company");

//ROTATING THE SVGs

const rotate = document.querySelector(".rotate");
const rotateTwo = document.querySelector(".rotate-two");



companyBtn.addEventListener("click", function(){
    companyDropdown.classList.toggle("show-dropdown");
    rotateTwo.classList.toggle("svg-rotate");  
})

featuresBtn.addEventListener("click", function(){
    featuresDropdown.classList.toggle("show-dropdown");
    rotate.classList.toggle("svg-rotate");
    // let chicken = featuresDropdown.classList.contains("show-dropdown");
    // console.log(chicken);  
})


document.querySelectorAll(".nav-linkss").forEach(n => n.addEventListener("click", function(){
    featuresDropdown.classList.remove("show-dropdown");
    rotate.classList.toggle("svg-rotate");

}))

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", function(){
    companyDropdown.classList.remove("show-dropdown");
    rotateTwo.classList.toggle("svg-rotate");
}))

//MAKING SURE NONE OF THE NAV DROPDOWNS CONFLICT EACH OTHER

document.querySelector("#nav-links").addEventListener("click", function(){
    companyDropdown.classList.remove("show-dropdown");
})

document.querySelector("#nav-link2").addEventListener("click", function(){
    featuresDropdown.classList.remove("show-dropdown");
})



//ASIDE UL

const featuresAside = document.querySelector(".features-aside-el");

const companyAside = document.querySelector(".company-aside-el");



const featuresAsideLi = document.querySelector(".featuresasideli");;

const companyAsideLi = document.querySelector(".companyasideli");


//GRABBING THE SVGs FROM THE ASIDE DOM AND MANIPULATING IT USING JS

const featuresAsideSvg = document.querySelector(".features-aside-svg");

const companyAsideSvg = document.querySelector(".company-aside-svg");


featuresAsideLi.addEventListener("click", function(){
    featuresAside.classList.toggle("show");
    featuresAsideSvg.classList.toggle("svg-rotate");
})

companyAsideLi.addEventListener("click", function(){
    companyAside.classList.toggle("show");
    companyAsideSvg.classList.toggle("svg-rotate");
})

document.querySelectorAll(".navigation-link").forEach(n => n.addEventListener("click", function(){
    sideBar.classList.remove("show-sidebar");
}))



//SIDEBAR TOGGLE

const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

hamburgerBtn.addEventListener("click", function(){
    sideBar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove("show-sidebar");
})



