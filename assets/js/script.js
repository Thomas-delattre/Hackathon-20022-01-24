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



var numOne   = document.querySelector(".rire"),
numTwo  = document.querySelector(".intrigue"),
numThree = document.querySelector(".warrior"),
numFour   =document.querySelector(".room"),

chiffreParticipant = document.getElementById(".chiffre-participant");


    
    
    function codetime() {
      if (numOne.textContent >= 1200) {
        clearInterval(2);
      } else {
        numOne.textContent++;
      }
    }
    setInterval(codetime, 1);
    
    function coffeetime() {
      if (numTwo.textContent >= 397) {
        clearInterval(3);
      } else {
        numTwo.textContent++;
      }
    }
    setInterval(coffeetime, 7);
    
    function worktime() {
      if (numThree.textContent >= 197) {
        clearInterval(3);
      } else {
        numThree.textContent++;
      }
    }
    setInterval(worktime, 7);
    
    
    function lightroom() {
      if (numFour.textContent >= 10) {
        clearInterval(4);
      } else {
        numFour.textContent++;
      }
    }
    setInterval(lightroom, 10);
    
console.log(data_num)