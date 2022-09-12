function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  setInterval("showSlides(1)", 4000);


  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1] += " active";
  }



// let slide = new Array("./assets/burger.jpg", "./assets/smoothie.jpg","./assets/sushis.jpg");
// let numero = 0;
  
//   function ChangeSlide(sens) {
//       numero = numero + sens;
//       if (numero < 0)
//           numero = slide.length - 1;
//       if (numero > slide.length - 1)
//           numero = 0;
//       document.getElementById("slide").src = slide[numero];
//   }

  // fonction slide 06/09/22
let slide = new Array("./assets/sushis.jpg", "./assets/croque.jpeg","./assets/healthy.jpg","./assets/plate_frite.jpeg","./assets/chicken.jpeg","./assets/steak.jpeg", "./assets/dessert.jpeg", "./assets/smoothie.jpg","./assets/cake.jpeg","./assets/cream.jpeg","./assets/dessert.jpeg");
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];

}
setInterval("ChangeSlide(1)", 4000);
