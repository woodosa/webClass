window.onload=function(){

    let dtlist=document.querySelectorAll(".OB_HotKeyIN>dt")
    
    for(let i=0;i<dtlist.length;i++){
        dtlist[i].addEventListener("click", function(){
            for(let j=0;j<dtlist.length;j++){
                dtlist[j].classList.remove("on")
                // dtlist[j].nextElementSibling.classList.remove("on")
            }
            this.classList.add("on")
            // this.nextElementSibling.classList.add("on")
        })
    }

    let Bannerslider = new Swiper(".OB_mainBanner",{
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
        // breakpoints:{
        //   320:{
        //     slidesPerView:1,
        //     spaceBetween:0
        //   },
        //   768:{
        //     slidesPerView:2,
        //     spaceBetween:10
        //   },
        //   1024:{
        //     slidesPerView:3,
        //     spaceBetween:30
        //   }
        // }
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

      
    //   document.querySelector(".OB_mainBanner").addEventListener("mouseover",function(){
    //     Bannerslider.autoplay.stop()
    //   })
    //   document.querySelector(".OB_mainBanner").addEventListener("mouseout",function(){
    //     Bannerslider.autoplay.start()
    //   })



   
    
}