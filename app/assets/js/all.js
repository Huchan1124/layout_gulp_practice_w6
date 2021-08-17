
// $(document).ready(function () {
//   $(".nav-link").hover(function () {
//       $(this).addClass("nav-link--underline");
      
//     }, function () {
//       $(this).removeClass("nav-link--underline");
//     }
//   );
  
// });



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768:{
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
  });