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
            // stop:-0.15
            OriginPoint:450,
            Direction:"translateX(",
            stop: -0.15
        })      
    })
    function ScrollMovTxt(MoveTag,MoveDirectionOption){
        let mvTop = $(MoveTag).offset().top
        let winst = $(window).scrollTop()
        let winHeight = $(window).height()*0.65
        let animationDirection = MoveDirectionOption.direction;
        let transformStyle = "";
        // let targetWidth = $(MoveTag).width();
        // let moveStrength = MoveDirectionOption.strength;
        // let moveLenght = MoveDirectionOption.length;
        let moveOriginPoint = MoveDirectionOption.OriginPoint?MoveDirectionOption.OriginPoint:0
        let movePercent=(winst+winHeight-mvTop-moveOriginPoint)
        let moveDirection= MoveDirectionOption.Direction?MoveDirectionOption.Direction:"translateX("
        let stopPoint= MoveDirectionOption.stop?MoveDirectionOption.stop:99999999
        // if(animationDirection=="left"){
        //     transformStyle="translateX("
        // }else if(animationDirection=="right"){
        //     transformStyle="translateX(-"
        // }else if(animationDirection=="top"){
        //     transformStyle=""
        // }
        // let Direction ={ left:"translateX(",right:"translateX(-",top:"translateY(",bottom:"translateY(-" }



        // let moveOrigin = MoveDirectionOption.origin?MoveDirectionOption.origin:0
        // let stopPoint = MoveDirectionOption.stop?MoveDirectionOption.stop

        // if(winst+winHeight>=mvTop){
        //     if(winst+winHeight-mvTop<=100){
        //         let movePercent=(winst+winHeight-mvTop)*moveLenght-100
        //         let movePixel = targetWidth*movePercent/100/moveStrength
        //         console.log(movePixel)
        //         $(MoveTag).css("transform","translateX("+movePixel+"px)")     
        //     }
        // }
        // ver.1  

        $(MoveTag).css("transform",moveDirection+(-moveOriginPoint)+"px)")
        if(winst+winHeight>=mvTop){
            console.log(winst+winHeight-mvTop-moveOriginPoint)
            if(movePercent > stopPoint){movePercent= stopPoint}
            $(MoveTag).css("transform",moveDirection+movePercent+"px)")
            // if(bespokeTitle>-0.15){bespokeTitle=0.15}
        } 

    }

    let firstTargetTop = $(".make>.container").offset().top
    $(window).scroll(function(){
        let target = $(".make>.container")
        // let targetTop = target.offset().top
        let winst = $(window).scrollTop();
        // if(winst>=firstTargetTop){
        //     // console.log(targetTop)
        //     target.css("position","fixed")
        //     target.css("left","0")
        //     target.css("top","0")
        //     target.parent().css("padding-bottom",winst)
        // }else{
        //     target.css("position","relative")
        // }
    })
    
    
})