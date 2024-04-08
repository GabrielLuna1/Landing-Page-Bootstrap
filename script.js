
/*FUNÇÃO DO SLICK SLIDER */
$(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      arrows: true,
  prevArrow: '<button type="button" class="control-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="control-next"><i class="fa-solid fa-arrow-right"></i></button>',
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  });
  
  
  
  /*FUNÇÃO PARA ABERTURA DO DROPDOWN*/
  function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle('dropdown-open');
  }
  
  
  
  