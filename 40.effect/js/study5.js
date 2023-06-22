$(document).ready(function(){
    //마우스를 움직이면 cursor클래스가 따라다니도록
    $(document).mousemove(function(event){
        let posX = event.clientX
        let posY = event.clientY
        $(".cursorGuideBox").css("left",(posX+20)+"px").css("top",(posY+20)+"px")
        $(".cursor").css("left",(posX-15)+"px").css("top",(posY-15)+"px")
        $(".cursor").addClass("on")
    })
    $(".slider").mouseover(function(){
        $(".cursor").addClass("big")
        $(".cursorGuideBox").addClass("big")
    })
    $(".slider").mouseout(function(){
        $(".cursor").removeClass("big")
        $(".cursorGuideBox").removeClass("big")

    })
    let txt =$(".slider").attr("data-desc")
    $(".cursorGuideBox").html(txt)
    // $(".wrap").click(function(){
    //     alert("test")
    // })
})