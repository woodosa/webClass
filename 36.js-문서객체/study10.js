window.onload= function(){
  
    let slider1 = new Swiper('.swiper',{
        loop: true,
        // slidesPerView:3,//슬라이드 개수 최대 반만큼만 적용가능
        spaceBetween:40,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable:true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".BtnNext",
            prevEl: ".BtnPrev",
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            // pauseOnMouseEnter:true
            
          },
          speed:2000,
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
              slidesPerView:3,
              spaceBetween:30
            }
          }
          // on: {
          //   autoplayTimeLeft(s, time, progress) {
          //     progressCircle.style.setProperty("--progress", 1 - progress);
          //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          //   }
          // }
          // navigation: {
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // },
          
        });
        document.querySelector(".station").addEventListener("mouseover",function(){
          slider1.autoplay.stop()
        })
        document.querySelector(".station").addEventListener("mouseout",function(){
          slider1.autoplay.start()
        })
}