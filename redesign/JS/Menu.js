$(document).ready(function(){

    $(".headL").click(function(){
        if($(this).hasClass("on")==false){
            $(this).addClass("on")
            $(".blackcover").addClass("on")
            $(".menubutton").addClass("on")
            $(".headL>i").html("닫기")
        }else{
            $(this).removeClass("on")
            $(".blackcover").removeClass("on")
            $(".menubutton").removeClass("on")
            $(".headL>i").html("메뉴")
        }
    })

    // $(".blackcover").click(function(){
    //     return false;
    // })

})