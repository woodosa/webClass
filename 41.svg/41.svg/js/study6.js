$(document).ready(function(){

    let pathLength=$("#progress path").get(0).getTotalLength()
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)

    $(window).scroll(function(){
        
        let winTop= $(window).scrollTop()
        let fixedTop=$(".fixedFrame").offset().top
        let scrollDistance = winTop-fixedTop
        let movingArea=$(".movingArea")
        let scrollLength=$(".fixedFrame").height()-movingArea.height()
        let percent = (scrollDistance/(scrollLength)*100)
        let percent2 = (scrollDistance/(scrollLength)*87.5)
        let count= Math.floor(percent2/8)// 정수만
        let count2 =(scrollDistance/(scrollLength)*8)-count// 소수만
        let idx=Math.round(count)
        if(scrollDistance<0){
            movingArea.css("position","relative").css("top","0px")
        }
        if(scrollDistance>0 && scrollDistance<scrollLength){
            movingArea.css("position","fixed").css("top","0px")
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")
            // if(percent>87.5){percent=87.5}
            $(".train").css("transform","translateX(-"+percent2+"%)")
            $(".train>li").removeClass("on")
            $(".train>li").eq(idx).addClass("on")
            $(".train li b").css("transform","rotateY("+(count*2)*180+"deg)")
        }
        if(scrollDistance>scrollLength){
            movingArea.css("position","relative").css("top",scrollLength+"px")
        }
    })
})