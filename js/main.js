// 메인-슬라이드
var swiper = new Swiper(".slideBG", {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 1,
  // loopAdditionalSlides: 1,
  pagination: true,
  centeredSlides: true,
  resistance : false, // 슬라이드 터치에 대한 저항 여부 설정
  slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드 위치로 이동
  allowTouchMove : true, //(false-스와이핑안됨)버튼으로만 슬라이드 조작이 가능
  effect: 'fade', // 희미해지면서 슬라이드 전환
  resistance: false,
  observer: true,
  observeParents: true,

  autoplay: {
    // delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, 
});

// about - aos
  AOS.init();


// img- 드래그 슬라이드
var swiper = new Swiper(".drSlide", {
  // rewind: true,
  spaceBetween: 520,
  slidesPerView: 4,
  centeredSlides: true,
  loopAdditionalSlides: 1,
  slidesOffsetAfter: 0,
  slidesOffsetBefore: 135,
  // slidesOffsetAfter: number,
  // slidesOffsetBefore: number,
  // direction: 'rtl',
  // direction: 'ltr', 
  slideToClickedSlide: true, //클릭하면서 마지막 요소일때 loop으로 실행 할수 있습니다.
  loop: true,
  // loopedSlides: 4,
  freeMode: false,
  touchRatio: 1,
  // slidesToShow: 3,
  // slidesToScroll: 1,
  followFinger: false,
  slideNextTransitionStart: 'easeInOut',
  slideNextTransitionEnd: 'easeInOut',

  roundLengths: true,
  grabCursor: true,
  // https://codepen.io/SamuelEiche/pen/OJJgawb

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },  
  on : {
    slideNextTransitionStart: 'easeInOut',
    slideNextTransitionEnd: 'easeInOut',

  }

});

// gotop
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() >= 300){
      $('footer .gotop').fadeIn();
    } else {
      $('footer .gotop').fadeOut();
    }
  })
  
  $('footer .gotop').click(function(e){
    e.preventDefault()
    $('html, body').stop().animate({
      scrollTop : 0
    }, 400)
  })
  
  // tab
  $('.family-site p , span').click(function(e){
      e.preventDefault()
      $('.family-site ul').toggle()
      $('.family-site span').toggleClass('after')
  })

  // 슬라이드 드래그
  const circle = document.querySelector(".cursor");
  document.addEventListener('mousemove',(e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = -90 + mouseX + 'px';
    circle.style.top = -130 + mouseY + 'px';
  });

  // header
  // https://swimfm.tistory.com/entry/%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%82%B4%EB%A6%AC%EB%A9%B4-%EC%83%81%EB%8B%A8%EC%97%90-%EA%B3%A0%EC%A0%95%EB%90%98%EB%8A%94-%EB%84%A4%EB%B9%84-%EB%A9%94%EB%89%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0
//   function upnav () {
//     document.addEventListener('scroll', onScroll, {passive: true});
//     let last = 0;
//     const gap = 1;
//     const nav = document.querySelector('.header-box');
//     const headerheight = document.querySelector('.header-box').clientHeight;

//     function onScroll(){
//       const scrollposition = pageYOffset;

//       if(Math.abs(last - scrollposition) <= gap) return;
//       else if (scrollposition > last || scrollposition <= headerheight){
//         nav.classList.remove('.header-box');
//       }
//       else if (scrollposition<last) {
//         nav.classList.add('.header-box');
//       }
//       last = scrollposition;
//     }
//   }
// upnav();

// https://codepen.io/yoonsangwon/pen/BayppGN
// let lastScrollTop = 0;

//   $(window).scroll(function(){
//     let scrollTop = $(this).scrollTop;
//     if(scrollTop >= 100) {
//       if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
//         $('.header-box').css('top','-100px');
//       } else {
//         $('.header-box').css('top','0px');
//       }
//       lastScrollTop = scrollTop;
//     }

    // --------
    // $('.content').each(function(){
    //   let contentIndex = $(this).attr('id');
    //   if(scrollTop >= $(this).offset().top){
    //     $('.scroll_03 a').removeClass('on');
    //     $('.scroll_03 a[href=#'+contentIndex+']').addClass('on')
    //   }
    // })
    
  // })

  // window.onscroll = scrollF();        
  // function scrollF() {    	
  //   if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){        	
  //     document.getElementById('header .header-box').style.top = '0';        
  //   } else {        	
  //     document.getElementById('header .header-box').style.top = '-200px';        
  //   }
  // }

  let header = $('.header-box'),
      page = $('main'),
      pageOffsetTop = page.offset().top

  $(window).resize(function(){
    pageOffsetTop = page.offset().top
  })
  let lastScroll = 0;
  $(window).scroll(function(event){
    let scrolled = $(window).scrollTop() >=
    pageOffsetTop
    
    // if( event.deltaY < 0){
    //   
    // }
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if(currentScroll > lastScroll) {
      header.addClass('top')
      header.removeClass('down')
    } else if( currentScroll == 0){
      header.removeClass('down')
      header.removeClass('top')
    }else{
      header.addClass('down')
      header.removeClass('top')
    }
  
    lastScroll = currentScroll;
  })

  

})


