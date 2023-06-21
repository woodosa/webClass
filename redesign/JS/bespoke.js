$(document).ready(function(){
    let count=0;
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
            Direction:"translateX(",
        })
        MinusScrollMovTxt(".bespokeTxtbox",{
            OriginPoint:-350,
            Direction:"translateY(",
            stop:1
        })      
    })
    

    let firstTargetTop = $(".make>.container").offset().top

    $(window).scroll(function(){
        let endPoint=$(".spbene").offset().top
        let target = $(".make>.container")
        // let targetTop = target.offset().top
        let winst = $(window).scrollTop();
        console.log(winst)
        if(winst>=3001){
            target.addClass("bsPadding")
            }else{
                target.removeClass("bsPadding")
            }
        if(winst>=firstTargetTop && winst<=2980){
            // console.log(targetTop)
           target.addClass("on")
            
            // target.parent().css("padding-bottom",winst)
        }else{
            target.removeClass("on")
            count=0
        }
        
    })
    $(".make_content.container").on("wheel DOMMouseScroll",function(event){
        let train = $(".make .station>.train")
        let E = event.originalEvent
        let delta = 0;
        if(E.detail){
         delta = E.detail * -40
        }else{
         delta = E.wheelDelta
        }
        if(delta<0){
            count++
            if(count>3){count = 3}
            train.css("transform","translateX("+(-25*count)+"%)")

        }else{
            count--
            if(count<0){count=0}
            train.css("transform","translateX("+(-25*count)+"%)")
        }
    })
})