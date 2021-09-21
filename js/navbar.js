const menu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector(".open-toggle");
const closeMenuBtn = document.querySelector(".close-toggle");


function toggleMenu() {
  menu.classList.toggle("menu-opened");
}

openMenuBtn.addEventListener("click",toggleMenu);
closeMenuBtn.addEventListener("click",toggleMenu);


const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`);
    if(entry.isIntersecting){
      document.querySelector(".nav-menu a.nav-menu-link_active").classList.remove("nav-menu-link_active");
      menuLink.classList.add("nav-menu-link_active");
    }
  });
},{rootMargin: "-50% 0px -50% 0px"});



menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
      menu.classList.remove("menu-opened");
    })
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
      observer.observe(target);
    }
})
