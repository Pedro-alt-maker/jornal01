const menu = document.querySelector(".menu");
const navbar = document.querySelector('#navbarMobil')
const header = document.getElementById('header')
const cards= document.querySelectorAll('.card')
const boxloader = document.querySelector('.loaderbox')
const loader = document.querySelector('.loader')
const headerLevel = header.offsetHeight

menu.addEventListener("click", () => {
  menu.classList.toggle("activar");
  navbar.classList.toggle('menuMobil')
});
window.addEventListener('scroll', function (){
  if(window.scrollY > headerLevel){
    header.classList.add('fixar')
  }
  else{
    header.classList.remove('fixar')
    header.style.transition = ' 4s'
  }
})