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
        console.log(percent)
        if(scrollDistance<0){
            movingArea.css("position","relative").css("top","0px")
        }
        if(scrollDistance>0 && scrollDistance<scrollLength){
            movingArea.css("position","fixed").css("top","0px")
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")
        }
        if(scrollDistance>scrollLength){
            movingArea.css("position","relative").css("top",scrollLength+"px")
        }
    })
})