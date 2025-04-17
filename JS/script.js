//Responsive Menu
const menuBtn = document.querySelector('.menu-btn');

const navigation = document.querySelector('.navigations').innerHTML;
const navigationMobile = document.querySelector('.responsive-menu .navigations');

navigationMobile.innerHTML = navigation; 


// Swipper
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  //Auto-scroll
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});

//Send Wish
function sendToWhatSapp(){
  const name = document.getElementById("name").value;
  const wish = document.getElementById("wish").value;
  const message = `${wish} -${name}`;
  const phone = "23299998294";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=5547999999999&text=Olá, meu nome é ${name}, meu telefone é ${phone} e minha mensagem é: ${message}`;
  
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}