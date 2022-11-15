function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

  // setInterval("showSlides(1)", 4000);


  // let slideIndex = 1;
  // showSlides(slideIndex);
  
  // // Next/previous controls
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // // Thumbnail image controls
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1] += " active";
  // }



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
// let slide = new Array("./assets/sushis.jpg", "./assets/burger.jpg","./assets/pasta.jpg","./assets/burger1.jpg","./assets/chicken.jpg","./assets/plate1.jpg", "./assets/dessert.jpeg", "./assets/smoothie.jpg","./assets/cake.jpeg","./assets/cream.jpeg","./assets/dessert.jpeg");
// let numero = 0;

// function ChangeSlide(sens) {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("slide").src = slide[numero];

// }
// setInterval("ChangeSlide(1)", 4000);

// Défilement auto carrousel
let currentIndex = 1;
let currentSlide = 1;
let slides = document.getElementsByClassName("MyImg");

let timer = setInterval(function () {
  currentSlide = currentIndex % slides.length + 1;
  currentIndex++;
  autoSlide(currentSlide);
}, 4000);

function autoSlide(currentSlide) {
  let numberCarou = ['zero', 'un', 'deux', 'trois', 'quatre','cinq','six','sept','huit']
  document.getElementById("carou_" + numberCarou[currentSlide]).checked = true;
  for (let x = 0; x < slides.length; x++) {
    slides[x].style.display = "";
  }
  slides[currentSlide - 1].style.display = "block";
};

function stopSlide() {
  clearInterval(timer);
};

//Modale menus
function zoomImage1(id) {
  let tabImage1 = [{ url: '', title: 'MENU HEALTHY', text: "", alt: '' },
   { url: '', title: "MENU FOOD", text: '' },
   {url:'', title:"MENU VEGGIE", text:''},
  ];

  Swal.fire({
    title: tabImage1[id].title,
    text: tabImage1[id].text,
    imageUrl: tabImage1[id].url,
    // imageWidth: '100%',
    width: '80vw',
    imageHeight: 500,
    imageAlt: tabImage1[id].alt,
    confirmButtonText: 'RETOUR',
    confirmButtonColor: '#303030',
  })
};