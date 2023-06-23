$(document).ready(function(){
    txtAni(".t1",{
        aniTxtSize:300,
        aniSpeed:0.5,
        aniDelay:0.2,
        // effect:"scale"
    })
    txtAni(".t2",{
        aniTxtSize:180,
        aniSpeed:0.5,
        aniDelay:0.25,
        // effect:"scale"
    })
    txtAni(".t3",{
        aniTxtSize:25,
        aniSpeed:0.5,
        aniDelay:0.1,
        // effect:"scale"
    })
    // ScrollMovTxt(".txt",{
    //     OriginPoint:200,
    //     stop:0.01,
    //     Direction:"translateY(",
    //     Action:0.85
    // })
    // --------------

    let winHeight= $(window).height() //브라우저의 높이
    let fixedDiv=$(".fixedEffect") // 태그
    let fixedDivTop = fixedDiv.offset().top // 태그높이 
    let movingStaiton = $(".movingStation")
    let movingStaitonHeight = $(".movingStation").offset().top
    $(window).scroll(function(){
        let wstop = $(window).scrollTop()
        let scrollDistance=wstop-fixedDivTop
        if(scrollDistance<0){
            movingStaiton.css("position", "relative")
            movingStaiton.css("top","0")
        }
        
        if(scrollDistance>=0 && scrollDistance<=7200){
            let count=Math.floor(scrollDistance/1800)
            let percent= (scrollDistance/1800)-count
            console.log(count,percent)

            movingStaiton.css("position", "fixed")
            movingStaiton.css("top","0")
            moveSlider(count)
            // moveTextSlider(count,percent*400)
            opacity(count,percent)
            scaleImg(count,percent,0.2)
            moveScaleImg(count,percent,0.2,100)
        }
        if(scrollDistance>7200){
            console.log("작동종료")
            movingStaiton.css("position", "relative")
            movingStaiton.css("top","7200px")
        }
    })
    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-25*idx)+"%)")
    }
    function moveTextSlider(idx,per){
        $(".train>li").eq(idx).children(".txt").css("transform","translateY("+per+"px)")
    }
    function opacity(idx,per){
        $(".train>li").eq(idx).children(".txt").css("opacity",per)   
    }
    function scaleImg(idx,per,scale){
        $(".train>li").eq(idx).children(".txt").css("transform","scale("+(1-(per*scale))+")")   
    }
    function moveScaleImg(idx,per,scale,lenght){
        $(".train>li").eq(idx).children(".txt").css("transform","translateY("+(per*lenght)+"px) scale("+(1-(per*scale))+")")

    }

    $(document).mousemove(function(event){
        let posX = event.clientX
        let posY = event.clientY
        let curTxt=  $(".curTxt").attr("data-desc")
        console.log(curTxt)
        $(".cursor").css("left",(posX)+"px").css("top",(posY)+"px")
        $(".cursor").addClass("on")

        $(".cursorsub").css("left",(posX+15)+"px").css("top",(posY+15)+"px")
        $(".cursorsub").addClass("on")

        $(".curTxt").css("left",(posX+20)+"px"),css("top",(posY+0)+"px")
        // $(".curTxt").html(curTxt)

    })
    $(".station").mouseover(function(event){
        $(".cursorsub").addClass("move")
        $(".curTxt").addClass("on")
    })
    $(".station").mouseout(function(event){
        $(".cursorsub").removeClass("move")
        $(".curTxt").addClass("on")
    })

})

