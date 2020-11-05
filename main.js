$( document ).ready(function() {
    var el = document.getElementsByClassName('header_config'); 
    var numPx = '200'; 

    window.addEventListener('scroll', function() {
        if (window.scrollY > numPx) {
            $('.header_config').addClass('header_config_bk'); 
        }else {
            $('.header_config').removeClass('header_config_bk'); 
        }
    });

    if( $(window).width() <= 960){
        $('.main_header_content_menu').prepend($('.main_header_content_menu_center'));
      }

});

