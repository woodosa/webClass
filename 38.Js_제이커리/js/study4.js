$(document).ready(function(){

    
    $(window).scroll(function(){
       let winSCT = $(window).scrollTop()
       console.log(winSCT)
       if(winSCT>400 && winSCT<1500){
            // alert("400이상 아래로 스크롤해서 내려왔습니다.")
     //        $("body").addClass("dark")
     //   }else{
     //        $("body").removeClass("dark")
     //   }
          $("body").css("background","red")
       }else{
          $("body").css("background","transparent")
       }
    })

})