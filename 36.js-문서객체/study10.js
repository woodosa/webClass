window.onload= function(){

    let slider1 = new Swiper('.swiper',{
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
}