$(document).ready(function() {
  $('#my-menu').mmenu({
    extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
    navbar: {
      title: '<img src="img/logo-1.svg" alt="Beauty salon S&Mitler">',
    },
  });

  var api = $('#my-menu').data('mmenu');
  api
    .bind('open:finish', function() {
      $('.hamburger').addClass('is-active');
    })
    .bind('close:finish', function() {
      $('.hamburger').removeClass('is-active');
    });

  $('.carousel-services').on('initialized.owl.carousel', function() {
    setTimeout(function() {
      carouselService();
    }, 100);
  });
  $('.carousel-services').owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1100: {
        items: 3,
      },
    },
  });

  $('.carousel-services-list').equalHeights();

  function carouselService() {
    $('.carousel-services-item').each(function() {
      var this_height = $(this)
        .find('.carousel-services-description')
        .outerHeight();
      $(this)
        .find('.carousel-services-image')
        .css('min-height', this_height);
    });
  }
  carouselService();

  $('.carousel-services-composition .h3').each(function() {
    $(this).html(
      $(this)
        .html()
        .replace(/(\S+)\s*$/, '<span>$1</span>')
    );
  });

  $('section .h2').each(function() {
    $(this).html(
      $(this)
        .html()
        .replace(/^(\S+)/, '<span>$1</span>')
    );
  });

  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true,
  });

  $('.partners').owlCarousel({
    loop: true,
    smartSpeed: 700,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });

  $('.top').click(function() {
    $('html, body')
      .stop()
      .animate({ scrollTop: 0 }, 'slow', 'swing');
  });

  //E-mail Ajax Send
  $('form.contact-form').submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: '/mail.php', //Change
      data: th.serialize(),
    }).done(function() {
      $(th)
        .find('.success')
        .addClass('active')
        .css('display', 'flex')
        .hide()
        .fadeIn();
      setTimeout(function() {
        // Done Functions
        $(th)
          .find('.success')
          .removeClass('active')
          .fadeOut();
        th.trigger('reset');
      }, 3000);
    });
    return false;
  });
});

$(window).on('load', function() {
  $('.preloader')
    .delay(1000)
    .fadeOut('slow');
});
