window.onload = function(){

    let newsSlider = new Swiper(".news_station",{

        loop:true,  
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
        breakpoints:{
            320:{
                slidesPerView:1
            },
            768:{
                slidesPerView:2
            },
            1024:{
                slidesPerView:3
            },

        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
    })
    let newsSlider2 = new Swiper(".notice",{
        loop:true,  
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
        breakpoints:{
            320:{
                slidesPerView:1,
                spaceBetween:0
            },
            768:{
                slidesPerView:2,
                spaceBetween:10
            },
            1024:{
                slidesPerView:4,
                spaceBetween:20
            },

        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          }
    })

    


}
