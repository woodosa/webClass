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
    })

    
    $(window).scroll(function(){
        ScrollMovTxt(".mvTitle",{
            // origin:1,
            stop:1,
            OriginPoint:350,
            Direction:"translateY(",
        })
        MinusScrollMovTxt(".bespokeTxtbox",{
            OriginPoint:-350,
            Direction:"translateY(",
            stop:1
        })      
    })
    

    // let firstTargetTop = $(".make>.container").offset().top
    // $(window).scroll(function(){
    //     let target = $(".make>.container")
    //     // let targetTop = target.offset().top
    //     let winst = $(window).scrollTop();
    //     // if(winst>=firstTargetTop){
    //     //     // console.log(targetTop)
    //     //     target.css("position","fixed")
    //     //     target.css("left","0")
    //     //     target.css("top","0")
    //     //     target.parent().css("padding-bottom",winst)
    //     // }else{
    //     //     target.css("position","relative")
    //     // }
    // })
    
    
})