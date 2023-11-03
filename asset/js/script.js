//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// color navbar berubah ketika di scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

if ($(window).scrollTop() > 100) {
  $('#header').addClass('header-scrolled');
}


// $('.portfolio-item').isotope({
//  	itemSelector: '.item',
//  	layoutMode: 'fitRows'
//  });
$('.portfolio-menu ul li').click(function () {
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  });
  return false;
});
$(document).ready(function () {
  var popup_btn = $('.popup-btn');
  popup_btn.magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

// faq / accordion
(function ($) {
  'use strict';

  jQuery(document).on('ready', function () {

    $('a.page-scroll').on('click', function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1500);
      e.preventDefault();
    });

  });


})(jQuery);
