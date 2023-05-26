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

        }
        
    })

    


}
