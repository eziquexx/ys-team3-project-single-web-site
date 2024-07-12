$('#menu li, #logo, #tel').hover(function () {
    // over
    $(this).css("cursor", "pointer");
  }, function () {
    // out
    $(this).css("cursor", "");
  }
);

$(document).scroll(function () { 
  if($(document).scrollTop() == 0) {
    $(".menu li").css("color", "");
    $(".tel p").css("color", "");
    $(".nav").css("background-color", "");
    $(".tel p").css("border-color", "");
    $(".logo img").attr("src", "../img/logo-white.png");
  } else {
    $(".menu li").css("color", "black");
    $(".tel p").css("color", "black");
    $(".nav").css("background-color", "#fff");
    // $(".nav").css("background-color", "#00000000"); 수정
    $(".tel p").css("border-color", "black");
    $(".logo img").attr("src", "../img/logo.png");
  }
});

$(".logo").click(function (e) { 
  e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 500);
});

$("#menu li").click(function (e) {
  e.preventDefault();
	let offset = $($(this).attr(data)).offset();
  $('html, body').animate({scrollTop : offset.top}, 500);
});