$(document).ready(function(){
    $(window).scroll(function(){
        let winst = $(window).scrollTop() // 스크롤바 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 
        let winScrollSet = winst+winHeight
        // console.log(winScrollSet)

        $(".BG,.videoAnimate,.mltr,.mrtl,.mttb,.mbtt").each(function(){
            if(winScrollSet>$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
        
        if(winScrollSet>1500){
            $("header").addClass("on")
        }else{
            $("header").removeClass("on")
        }
        // if(winScrollSet>1650){
        //     $(".bespoke").addClass("on")
        // }else{
        //     $(".bespoke").removeClass("on")
        // }

        // let scrollLeftMoveRatio=$(".mltr").offset().top
    })

    
    $(window).scroll(function(){
        let mvTop = $(".mvTitle").offset().top
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.65 
        if(winst+winHeight>=mvTop){
            console.log(winst+winHeight-mvTop)
            $(".mvTitle").css("transform","translateX("+(winst+winHeight-mvTop)+"px)")
        }
        
    })
   
})