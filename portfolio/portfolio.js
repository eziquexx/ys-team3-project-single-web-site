$(function(){
  
  // scroll event
  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    let pfScrollT = parseInt($('#portfolio').offset().top);
    // contact scroll event
    if(windowTop > (pfScrollT-200)){
      $('#portfolio li:nth-child(1) a').animate({
        top : '0'
      }, 1000, "easeOutQuad");
      $('#portfolio li:nth-child(2) a').animate({
        top : '0'
      }, 1400, "easeOutQuad");
      $('#portfolio li:nth-child(3) a').animate({
        top : '0'
      }, 1800, "easeOutQuad");
      $('#portfolio li:nth-child(4) a').animate({
        top : '0'
      }, 2200, "easeOutQuad");
    }// contact scroll event end

    // contact scroll event
    if(windowTop > (pfScrollT + 300)){
      $('#portfolio li:nth-child(5) a').animate({
        top : '0'
      }, 1000, "easeOutQuad");
      $('#portfolio li:nth-child(6) a').animate({
        top : '0'
      }, 1400, "easeOutQuad");
      $('#portfolio li:nth-child(7) a').animate({
        top : '0'
      }, 1800, "easeOutQuad");
      $('#portfolio li:nth-child(8) a').animate({
        top : '0'
      }, 2200, "easeOutQuad");
    }// contact scroll event end

  })// scroll event end
  
});