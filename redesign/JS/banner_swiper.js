onload=function(){
    let slider1 = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            // pauseOnMouseEnter:true
            
          },
      });
}