// MENU BURGER
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.getElementById('deroulant')

link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})
// FIN BURGER
// BOUTON BACK TO TOP
mybutton = document.getElementById("backToTop")

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else  {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener('click', topFunction)
// FIN BOUTON BACK TO TOP