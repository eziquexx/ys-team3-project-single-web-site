

// our service 위치값 찾아서
// 해당 위치에 도달하면
// item들이 opacity가 0 -> 1로
// transition y값이 밑에서 위로
// dration으로 시간차로 나타나게 하기.

$(function(){

  $(window).on('scroll', function(){
    let windowTop = $(this).scrollTop();
    let svScrollT = $('#ourService').offset().top;
    let svWrapH = $('#ourService').innerHeight();
    let workScrollT = $('#work').offset().top;
    let workWrapH = $('#work').innerHeight();

    // console.log('window scroll 위치', svTop);
    // console.log('our service 위치', svScrollT);
    // console.log('.wrap 위치', wrapH);
   

    // section#ourService 애니메이션 효과
    if(windowTop > (svScrollT - (svWrapH/2))){
      $('#ourService .serviceItem:nth-child(1)').animate({
        opacity : '1',
        top : '0'
      }, 1000, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(2)').animate({
        opacity : '1',
        top : '0'
      }, 1200, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(3)').animate({
        opacity : '1',
        top : '0'
      }, 1400, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(4)').animate({
        opacity : '1',
        top : '0'
      }, 1600, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(5)').animate({
        opacity : '1',
        top : '0'
      }, 1800, "easeOutQuad");
      $('#ourService .serviceItem:nth-child(6)').animate({
        opacity : '1',
        top : '0'
      }, 2000, "easeOutQuad");
    }

    // section#wrok 애니메이션 효과
    if(windowTop > svScrollT){

      // opacity, left
      $('#work li.workItem:nth-child(1)').animate({
        opacity: '1',
        left: '0'
      }, 1600, "easeInOutQuad");
      $('#work li.workItem:nth-child(2)').animate({
        opacity: '1',
        left: '0'
      }, 1800, "easeInOutQuad");
      $('#work li.workItem:nth-child(3)').animate({
        opacity: '1',
        left: '0'
      }, 2000, "easeInOutQuad");
      $('#work li.workItem:nth-child(4)').animate({
        opacity: '1',
        left: '0'
      }, 2200, "easeInOutQuad");


      // count animate
      $('.wItemNumText').each(function(){
        $(this).prop('Counter', 0).animate({
                Counter: $(this).data('value')
        }, {
          duration: 3200,
          easing: 'swing',
          step: function(now){
            $(this).text(Math.ceil(now));
          }
        })
      });


      // $({ Counter: 0 }).animate({
      //   Counter: $('.Single').text()
      // }, {
      //   duration: 1000,
      //   easing: 'swing',
      //   step: function () {
      //     $('.Single').text(Math.ceil(this.Counter));
      //   }
      // });


      ///////////////////////////////////////////////////////////
      // let index = 0;

      // let test = setInterval(num1, 30);
      // function num1(){
      //   if(index <= wTextNum1){
      //     $('#work .workItem1 span.wItemNumText').text(index);
      //     index += 2;
      //   }
      // }

      // let test1 = setInterval(num2, 50);
      // function num2(){
      //   if(index <= wTextNum2){
      //     $('#work .workItem2 span.wItemNumText').text(index);
      //     index += 20;
      //   }
      // }

      // setInterval(num3, 50);
      // function num3(){
      //   if(index <= wTextNum3){
      //     $('#work .workItem3 span.wItemNumText').text(index);
      //     index += 20;
      //   }
      // }

      // setInterval(num4, 50);
      // function num4(){
      //   if(index <= wTextNum4){
      //     $('#work .workItem4 span.wItemNumText').text(index);
      //     index += 20;
      //   }
      // }


    }; // #work scroll event end

    
  
  
  }); // window scroll event end

});