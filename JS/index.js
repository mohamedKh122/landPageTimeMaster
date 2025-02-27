"use strict";
// Nav Bar JS FlowBit
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector("[data-collapse-toggle]");
  const navbarMenu = document.getElementById("navbar-default");
  if (toggleButton && navbarMenu) {
      toggleButton.addEventListener("click", function () {
          navbarMenu.classList.toggle("hidden");
      });
  }
});
// Owl Carousel For Sliders
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  lazyLoad:true,
  autoplay:true,
  autoplayTimeout:6000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
// AOS For Animation 
AOS.init();
// Form Handling
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const messageInput = document.querySelector('#messageArea');
const submitButton = document.querySelector('#messageButton');

submitButton.addEventListener('click', ()=>{
  if(nameInput.value && emailInput.value && messageInput.value){
    document.querySelector('.warningText').classList.replace('block', 'hidden')
    fetch("https://67bb4ad7fbe0387ca139af9e.mockapi.io/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameInput.value, email: emailInput.value, message: messageInput.value })
    })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      if(document.querySelector('html').getAttribute('lang') === 'en'){
        toastr.success('Succes')
      }else{
        toastr.success('تم إرسال الرسالة بنجاح!');
      }
      console.log(data);
    })
    .catch(error => {
      console.error("Fetch Error:", error);
    });
  }else{
    document.querySelector('.warningText').classList.replace('hidden', 'block')
  }
})
// Form Handling
document.querySelector('select').addEventListener('change', function () {
  const lang = this.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    document.querySelector('html').setAttribute('lang', lang)
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          console.log(el.tagName);
          el.setAttribute("placeholder", el.getAttribute(`data-${lang}`));
      } else {

          el.textContent = el.getAttribute(`data-${lang}`);
      }
  });
});
document.querySelector('input').addEventListener('click', (e)=>{

  console.log(e.target.tagName);
  
})